import json
import os
import hashlib
import secrets
import psycopg2

def get_conn():
    return psycopg2.connect(os.environ['DATABASE_URL'])

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

def handler(event: dict, context) -> dict:
    """Аутентификация: register, login, me, logout через поле action в body."""
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Authorization',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    raw_body = event.get('body') or '{}'
    if isinstance(raw_body, str):
        body = json.loads(raw_body)
    else:
        body = raw_body
    action = body.get('action')

    if action == 'me':
        token = event.get('headers', {}).get('X-Authorization', '').replace('Bearer ', '')
        if not token:
            return {'statusCode': 401, 'headers': cors, 'body': json.dumps({'error': 'Unauthorized'})}
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            'SELECT u.id, u.email, u.created_at FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = %s',
            (token,)
        )
        row = cur.fetchone()
        conn.close()
        if not row:
            return {'statusCode': 401, 'headers': cors, 'body': json.dumps({'error': 'Invalid token'})}
        return {'statusCode': 200, 'headers': cors, 'body': json.dumps({
            'id': row[0], 'email': row[1], 'created_at': str(row[2])
        })}

    if action == 'register':
        email = (body.get('email') or '').strip().lower()
        password = body.get('password') or ''
        if not email or not password:
            return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Email и пароль обязательны'})}
        if len(password) < 6:
            return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Пароль минимум 6 символов'})}
        conn = get_conn()
        cur = conn.cursor()
        cur.execute('SELECT id FROM users WHERE email = %s', (email,))
        if cur.fetchone():
            conn.close()
            return {'statusCode': 409, 'headers': cors, 'body': json.dumps({'error': 'Email уже зарегистрирован'})}
        cur.execute('INSERT INTO users (email, password_hash) VALUES (%s, %s) RETURNING id', (email, hash_password(password)))
        user_id = cur.fetchone()[0]
        token = secrets.token_hex(32)
        cur.execute('INSERT INTO sessions (user_id, token) VALUES (%s, %s)', (user_id, token))
        conn.commit()
        conn.close()
        return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'token': token, 'email': email})}

    if action == 'login':
        email = (body.get('email') or '').strip().lower()
        password = body.get('password') or ''
        conn = get_conn()
        cur = conn.cursor()
        cur.execute('SELECT id FROM users WHERE email = %s AND password_hash = %s', (email, hash_password(password)))
        row = cur.fetchone()
        if not row:
            conn.close()
            return {'statusCode': 401, 'headers': cors, 'body': json.dumps({'error': 'Неверный email или пароль'})}
        token = secrets.token_hex(32)
        cur.execute('INSERT INTO sessions (user_id, token) VALUES (%s, %s)', (row[0], token))
        conn.commit()
        conn.close()
        return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'token': token, 'email': email})}

    if action == 'logout':
        token = event.get('headers', {}).get('X-Authorization', '').replace('Bearer ', '')
        if token:
            conn = get_conn()
            cur = conn.cursor()
            cur.execute('UPDATE sessions SET token = %s WHERE token = %s', (secrets.token_hex(32), token))
            conn.commit()
            conn.close()
        return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'ok': True})}

    return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Unknown action'})}