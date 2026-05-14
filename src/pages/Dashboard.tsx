import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const AUTH_URL = 'https://functions.poehali.dev/e5c0600d-05e3-436c-a168-9d69ba53c5b3'

export default function Dashboard() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) { navigate('/auth'); return }

    fetch(AUTH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ action: 'me' }),
    })
      .then(r => r.text())
      .then(text => {
        const data = JSON.parse(typeof text === 'string' && text.startsWith('"') ? JSON.parse(text) : text)
        if (data.email) {
          setEmail(data.email)
        } else {
          localStorage.removeItem('token')
          navigate('/auth')
        }
      })
      .catch(() => navigate('/auth'))
      .finally(() => setLoading(false))
  }, [navigate])

  const handleLogout = async () => {
    const token = localStorage.getItem('token')
    await fetch(AUTH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ action: 'logout' }),
    })
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate('/auth')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a0533] flex items-center justify-center">
        <Icon name="Loader2" size={32} className="text-violet-400 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1a0533] text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-800/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-violet-700/20 blur-[100px]" />
      </div>

      {/* Шапка */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-4 border-b border-white/10 backdrop-blur-sm">
        <a href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-violet-500 flex items-center justify-center">
            <Icon name="TreePine" size={18} className="text-white" />
          </div>
          <span className="font-bold text-sm">
            <span className="text-violet-300">TREEX</span> HOSTING
          </span>
        </a>
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/50">{email}</span>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-violet-500/40 text-white/70 hover:text-white hover:bg-violet-900/40 bg-transparent h-auto py-2 px-4 text-sm flex items-center gap-2"
          >
            <Icon name="LogOut" size={14} />
            Выйти
          </Button>
        </div>
      </nav>

      {/* Контент */}
      <main className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold mb-2">Личный кабинет</h1>
          <p className="text-white/50 mb-10">Добро пожаловать, <span className="text-violet-300">{email}</span></p>

          <div className="bg-[#2a1050]/80 border border-violet-500/30 rounded-2xl p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-violet-900 border border-violet-500/40 flex items-center justify-center">
              <Icon name="Server" size={28} className="text-violet-300" />
            </div>
            <h2 className="text-xl font-bold">Серверов пока нет</h2>
            <p className="text-white/50 text-sm max-w-sm">
              Вы ещё не создали ни одного сервера. Выберите тариф и запустите свой Minecraft-сервер за минуту.
            </p>
            <Button
              onClick={() => navigate('/')}
              className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 h-auto font-semibold rounded-lg flex items-center gap-2 mt-2"
            >
              <Icon name="ArrowRight" size={16} />
              Посмотреть тарифы
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
