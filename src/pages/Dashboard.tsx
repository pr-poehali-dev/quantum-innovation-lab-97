import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '@/components/ui/icon'

const AUTH_URL = 'https://functions.poehali.dev/e5c0600d-05e3-436c-a168-9d69ba53c5b3'
const BANNER = 'https://cdn.poehali.dev/projects/9a2f31c3-f374-4cc9-9eeb-5423f0b51d1d/files/30f62d82-e15d-45b1-99e1-74e066350eef.jpg'

type Page = 'home' | 'servers' | 'finance' | 'settings'

const sidebarSections = [
  {
    label: 'ОСНОВНОЕ',
    items: [
      { id: 'home' as Page, icon: 'LayoutDashboard', label: 'Главная' },
      { id: 'servers' as Page, icon: 'ShoppingCart', label: 'Приобретение услуг' },
    ],
  },
  {
    label: 'УСЛУГИ',
    items: [
      { id: 'servers' as Page, icon: 'Server', label: 'Все сервера' },
    ],
  },
  {
    label: 'АККАУНТ',
    items: [
      { id: 'finance' as Page, icon: 'Wallet', label: 'Финансы' },
      { id: 'settings' as Page, icon: 'Settings', label: 'Настройки' },
    ],
  },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState<Page>('home')

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
        if (data.email) setEmail(data.email)
        else { localStorage.removeItem('token'); navigate('/auth') }
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

  const username = email.split('@')[0] || email

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
        <Icon name="Loader2" size={32} className="text-violet-400 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex">

      {/* Сайдбар */}
      <aside className="w-56 flex-shrink-0 bg-[#141414] border-r border-white/8 flex flex-col min-h-screen">
        {/* Лого */}
        <div className="px-5 py-5 border-b border-white/8">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-violet-500 flex items-center justify-center">
              <Icon name="TreePine" size={14} className="text-white" />
            </div>
            <span className="font-bold text-sm">
              <span className="text-violet-300">TREEX</span> HOSTING
            </span>
          </a>
        </div>

        {/* Навигация */}
        <nav className="flex-1 px-3 py-4 space-y-5 overflow-y-auto">
          {sidebarSections.map(section => (
            <div key={section.label}>
              <p className="text-[10px] text-white/30 font-semibold tracking-widest px-2 mb-2">{section.label}</p>
              {section.items.map(item => (
                <button
                  key={item.label}
                  onClick={() => setPage(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all mb-0.5 ${
                    page === item.id
                      ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon name={item.icon} size={15} />
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Низ сайдбара */}
        <div className="border-t border-white/8 px-3 py-3 space-y-0.5">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all"
          >
            <Icon name="ArrowLeft" size={15} />
            На основной сайт
          </button>
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-white/50">
            <Icon name="Globe" size={15} />
            <span className="flex-1">Язык</span>
            <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded">RU</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-sm">
            <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
              {username[0]?.toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white/80 text-xs truncate">{username}</div>
              <div className="text-white/30 text-[10px]">0 ₽</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/50 hover:text-red-400 hover:bg-red-500/5 transition-all"
          >
            <Icon name="LogOut" size={15} />
            Выйти
          </button>
        </div>
      </aside>

      {/* Основной контент */}
      <main className="flex-1 overflow-y-auto">
        {page === 'home' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            {/* Баннер */}
            <div
              className="relative w-full h-52 bg-cover bg-center flex items-end"
              style={{ backgroundImage: `url('${BANNER}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 px-8 pb-7">
                <h1 className="text-2xl font-bold">Здравствуйте, {username}!</h1>
                <p className="text-white/60 text-sm mt-1 max-w-md">
                  В данном разделе вы можете посмотреть список последних ваших услуг, а также данные для входа в них.
                </p>
              </div>
            </div>

            {/* Активные услуги */}
            <div className="px-8 py-6">
              <h2 className="text-base font-semibold mb-4 text-white/80">Активные услуги</h2>

              <div className="border border-white/8 rounded-lg divide-y divide-white/8">
                {/* Пустое состояние */}
                <div className="py-10 text-center text-white/40 text-sm">
                  У вас пока нет активных серверов!<br />
                  Приобрести новый сервер{' '}
                  <button
                    onClick={() => setPage('servers')}
                    className="text-violet-400 hover:text-violet-300 underline transition-colors"
                  >
                    можно здесь
                  </button>
                </div>

                {/* Ссылки */}
                <button
                  onClick={() => navigate('/')}
                  className="w-full flex items-center justify-center gap-2 py-4 text-sm text-white/40 hover:text-white hover:bg-white/3 transition-all"
                >
                  перейти в панель управления
                  <Icon name="ArrowRight" size={14} />
                </button>
                <button
                  onClick={() => setPage('servers')}
                  className="w-full flex items-center justify-center gap-2 py-4 text-sm text-white/40 hover:text-white hover:bg-white/3 transition-all"
                >
                  полный список услуг
                  <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {page === 'servers' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="px-8 py-8">
            <h1 className="text-xl font-bold mb-1">Все сервера</h1>
            <p className="text-white/40 text-sm mb-6">Список ваших серверов появится здесь после покупки</p>
            <div className="border border-white/8 rounded-lg p-10 text-center text-white/30 text-sm">
              <Icon name="Server" size={32} className="mx-auto mb-3 text-white/20" />
              Серверов пока нет.<br />
              <button onClick={() => navigate('/#tariffs')} className="text-violet-400 hover:text-violet-300 mt-1 underline">
                Посмотреть тарифы
              </button>
            </div>
          </motion.div>
        )}

        {page === 'finance' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="px-8 py-8">
            <h1 className="text-xl font-bold mb-1">Финансы</h1>
            <p className="text-white/40 text-sm mb-6">Баланс и история платежей</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#1a1a1a] border border-white/8 rounded-lg p-5">
                <div className="text-white/40 text-xs mb-1">Текущий баланс</div>
                <div className="text-2xl font-bold">0 ₽</div>
              </div>
            </div>
            <div className="border border-white/8 rounded-lg p-10 text-center text-white/30 text-sm">
              <Icon name="Receipt" size={32} className="mx-auto mb-3 text-white/20" />
              История платежей пуста
            </div>
          </motion.div>
        )}

        {page === 'settings' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="px-8 py-8">
            <h1 className="text-xl font-bold mb-1">Настройки</h1>
            <p className="text-white/40 text-sm mb-6">Управление аккаунтом</p>
            <div className="bg-[#1a1a1a] border border-white/8 rounded-lg p-6 max-w-md">
              <div className="mb-4">
                <div className="text-xs text-white/40 mb-1">Email</div>
                <div className="text-sm text-white bg-white/5 border border-white/10 rounded-lg px-4 py-3">{email}</div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                <Icon name="LogOut" size={14} />
                Выйти из аккаунта
              </button>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  )
}
