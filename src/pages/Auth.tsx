import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const AUTH_URL = 'https://functions.poehali.dev/e5c0600d-05e3-436c-a168-9d69ba53c5b3'

async function authRequest(action: string, email: string, password: string) {
  const res = await fetch(AUTH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, email, password }),
  })
  const text = await res.text()
  const data = JSON.parse(typeof text === 'string' && text.startsWith('"') ? JSON.parse(text) : text)
  return { ok: res.ok, data }
}

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { ok, data } = await authRequest(mode, email, password)
    setLoading(false)
    if (!ok) {
      setError(data.error || 'Ошибка')
      return
    }
    localStorage.setItem('token', data.token)
    localStorage.setItem('email', data.email)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#1a0533] text-white flex flex-col">
      {/* Фоновые пятна */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-800/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-violet-700/20 blur-[100px]" />
      </div>

      {/* Шапка */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-4 border-b border-white/10">
        <a href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded overflow-hidden flex items-center justify-center">
            <img src="https://cdn.poehali.dev/projects/9a2f31c3-f374-4cc9-9eeb-5423f0b51d1d/bucket/2f0bc9ef-32a2-4ce3-8878-e7e9f2e0e860.png" alt="TREEX" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-sm">
            <span className="text-violet-300">TREEX</span> HOSTING
          </span>
        </a>
      </nav>

      {/* Форма */}
      <div className="flex-1 flex items-center justify-center px-4 relative z-10">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#2a1050]/80 border border-violet-500/30 rounded-2xl p-8 backdrop-blur-sm">
            {/* Переключатель */}
            <div className="flex rounded-lg bg-white/5 p-1 mb-8">
              <button
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${mode === 'login' ? 'bg-violet-600 text-white' : 'text-white/50 hover:text-white'}`}
                onClick={() => { setMode('login'); setError('') }}
              >
                Войти
              </button>
              <button
                className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${mode === 'register' ? 'bg-violet-600 text-white' : 'text-white/50 hover:text-white'}`}
                onClick={() => { setMode('register'); setError('') }}
              >
                Регистрация
              </button>
            </div>

            <h1 className="text-2xl font-bold mb-2">
              {mode === 'login' ? 'Вход в аккаунт' : 'Создать аккаунт'}
            </h1>
            <p className="text-white/50 text-sm mb-6">
              {mode === 'login' ? 'Введите email и пароль' : 'Зарегистрируйтесь, чтобы управлять серверами'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-white/50 mb-1.5 block">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/50 mb-1.5 block">Пароль</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder={mode === 'register' ? 'Минимум 6 символов' : '••••••••'}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-sm text-red-300">
                  <Icon name="AlertCircle" size={14} />
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-600 hover:bg-violet-500 text-white py-3 h-auto font-semibold rounded-lg flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <Icon name="Loader2" size={16} className="animate-spin" />
                ) : (
                  <Icon name="LogIn" size={16} />
                )}
                {mode === 'login' ? 'Войти' : 'Создать аккаунт'}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}