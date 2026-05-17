import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/ui/icon'
import { Button } from '@/components/ui/button'

const features = [
  { icon: 'Cpu', label: 'Высокопроизводительные AMD Ryzen 9 и Intel i9' },
  { icon: 'Shield', label: 'Продвинутая защита от DDoS атак' },
  { icon: 'Users', label: 'Управление игроками прямо из панели' },
  { icon: 'Package', label: 'Установка любых ядер в два клика' },
]

const navLinks = [
  { icon: 'Home', label: 'Главная', href: '#hero' },
  { icon: 'Info', label: 'Информация', href: '#why' },
  { icon: 'Mail', label: 'Контакты', href: '#contacts' },
]

const whyCards = [
  {
    icon: 'Gauge',
    title: 'Производительность',
    text: 'Мы очень серьезно относимся к производительности серверов. Постоянно добавляем новые узлы на AMD Ryzen 9 7950X/9950X и Intel Core i9-13900K со сверхбыстрой DDR5 памятью.',
  },
  {
    icon: 'ShieldCheck',
    title: 'DDoS Защита',
    text: 'Особое внимание уделено DDoS защите. Используем инновационные решения и передовые технологии для надёжной защиты от атак любого объёма.',
  },
  {
    icon: 'Handshake',
    title: 'Сотрудничество',
    text: 'Мы открыты для людей, которые хотят сотрудничать с нами! Готовы индивидуально обсудить условия партнёрства. У каждого есть шанс проявить себя.',
  },
  {
    icon: 'MapPin',
    title: 'Удобное расположение',
    text: 'Наши серверы расположены в надёжных дата-центрах России и Германии. Стабильное соединение с минимальными задержками для игроков из Европы и СНГ.',
  },
  {
    icon: 'Clock',
    title: 'Круглосуточная поддержка',
    text: 'Команда поддержки доступна 24/7 и готова оперативно решить любые вопросы. Ценим каждого клиента и стремимся дать максимально быстрый ответ.',
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Лучшее соотношение цены',
    text: 'Предлагаем оптимальное соотношение цены и качества на рынке. Все необходимые характеристики для стабильной работы игровых проектов любого масштаба.',
  },
]

const germanTariffs = [
  {
    name: 'GAMING-ZERO',
    price: '72',
    cpu: '50% AMD Ryzen 9 7950X3D',
    ram: '1.5 GB DDR4',
    disk: '8 GB NVMe SSD',
    ports: '1 портов',
    backups: '0 бекапов',
    databases: '1 баз данных',
  },
  {
    name: 'GAMING-1',
    price: '141',
    cpu: '100% AMD Ryzen 9 7950X3D',
    ram: '3 GB DDR4',
    disk: '15 GB NVMe SSD',
    ports: '2 портов',
    backups: '1 бекапов',
    databases: '1 баз данных',
  },
  {
    name: 'GAMING-2',
    price: '263',
    cpu: '175% AMD Ryzen 9 7950X3D',
    ram: '6 GB DDR4',
    disk: '25 GB NVMe SSD',
    ports: '3 портов',
    backups: '1 бекапов',
    databases: '2 баз данных',
  },
]

export default function LandingPage() {
  const navigate = useNavigate()
  const isLoggedIn = !!localStorage.getItem('token')

  return (
    <div className="min-h-screen bg-[#1a0533] text-white overflow-x-hidden">



      {/* Навигация */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded overflow-hidden flex items-center justify-center">
            <img src="https://cdn.poehali.dev/projects/9a2f31c3-f374-4cc9-9eeb-5423f0b51d1d/bucket/2f0bc9ef-32a2-4ce3-8878-e7e9f2e0e860.png" alt="TREEX" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="font-bold text-sm leading-none">
              <span className="text-violet-300">TREEX</span> HOSTING
            </div>
            <div className="text-[10px] text-white/50 mt-0.5">Надёжный игровой хостинг</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Icon name={link.icon} size={14} />
              {link.label}
            </a>
          ))}
        </div>

        <Button
          className="border border-violet-500 bg-violet-600 hover:bg-violet-500 text-white text-sm px-5 py-2 h-auto rounded-lg flex items-center gap-2"
          onClick={() => navigate(isLoggedIn ? '/dashboard' : '/auth')}
        >
          <Icon name="LayoutDashboard" size={14} />
          {isLoggedIn ? 'Личный кабинет' : 'Перейти в панель'}
        </Button>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative z-10 overflow-hidden">
        {/* Изображение Minecraft справа */}
        <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
          <img
            src="https://cdn.poehali.dev/projects/9a2f31c3-f374-4cc9-9eeb-5423f0b51d1d/bucket/c05f22e4-6139-4e09-a26b-c3ca82ed5289.png"
            alt=""
            className="w-full h-full object-cover object-left"
          />
          {/* Градиент — плавный переход от фона к картинке */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0533] via-[#1a0533]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-28">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Защищённый хостинг<br />
              Майнкрафт серверов<br />
              <span className="text-violet-300">С низкими ценами</span>
            </h1>

            <div className="w-16 h-1 bg-violet-500 rounded mb-10 mt-6" />

            <div className="flex flex-wrap gap-8 mb-12">
              {features.map((f) => (
                <div key={f.label} className="flex flex-col items-center text-center gap-2 w-24">
                  <div className="w-14 h-14 rounded-full bg-violet-900/60 border border-violet-500/30 flex items-center justify-center">
                    <Icon name={f.icon} size={22} className="text-violet-300" />
                  </div>
                  <span className="text-xs text-white/60 leading-tight">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 h-auto text-base font-semibold rounded-xl flex items-center gap-2">
                <Icon name="ArrowRight" size={16} />
                Создать сервер
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-violet-900/40 px-8 py-4 h-auto text-base font-semibold rounded-xl flex items-center gap-2 bg-transparent"
                onClick={() => document.querySelector('#tariffs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="List" size={16} />
                Посмотреть тарифы
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Почему мы */}
      <section id="why" className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Почему стоит выбрать нас?</h2>
          <div className="w-12 h-0.5 bg-violet-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="flex gap-5 bg-[#22084a]/60 border border-violet-500/20 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-14 h-14 rounded-xl bg-violet-900/60 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <Icon name={card.icon} size={24} className="text-violet-400" />
              </div>
              <div>
                <h3 className="font-bold text-violet-300 mb-2">{card.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Тарифы Германия */}
      <section id="tariffs" className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            Тарифы (Германия 🇩🇪)
          </h2>
          <div className="w-10 h-0.5 bg-violet-500 mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {germanTariffs.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-[#1a0a2e] border border-violet-500/20 rounded-xl p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Шапка */}
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Gamepad2" size={16} className="text-violet-400" />
                <span className="font-bold text-sm tracking-widest text-white">{t.name}</span>
              </div>
              <div className="text-2xl font-bold mb-5">
                {t.price}<span className="text-sm font-normal text-white/50">₽ / мес.</span>
              </div>

              {/* Характеристики */}
              <div className="space-y-3 flex-1 mb-6">
                {[
                  { icon: 'Settings2', label: 'Процессор', value: t.cpu },
                  { icon: 'MemoryStick', label: 'Оперативная память', value: t.ram },
                  { icon: 'HardDrive', label: 'Хранилище', value: t.disk },
                  { icon: 'Network', label: 'Сеть', value: t.ports },
                  { icon: 'RefreshCw', label: 'Резервные копии', value: t.backups },
                  { icon: 'Database', label: 'Базы данных', value: t.databases },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <Icon name={row.icon} size={14} className="text-violet-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-violet-400 font-medium">{row.label}</div>
                      <div className="text-xs text-white/60">{row.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full border-violet-500/40 text-white/80 hover:bg-violet-900/40 hover:text-white bg-transparent h-auto py-2.5 text-sm flex items-center justify-center gap-2">
                <Icon name="ShoppingCart" size={14} />
                Перейти к покупке
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="relative z-10 border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Контакты</h2>
            <div className="w-10 h-0.5 bg-violet-500 mb-8" />

            <a
              href="https://t.me/TreexHost_manager_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#22084a]/60 border border-violet-500/20 rounded-xl px-6 py-4 hover:border-violet-400/50 hover:bg-violet-900/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
                <Icon name="Send" size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-white/50 mb-0.5">Telegram</div>
                <div className="text-white font-semibold group-hover:text-violet-300 transition-colors">t.me/TreexHost_manager_bot</div>
              </div>
              <Icon name="ArrowRight" size={16} className="text-violet-400 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="border-t border-white/5 py-5 text-center text-xs text-white/30">
          © 2025 TreexHosting — Надёжный игровой хостинг
        </div>
      </section>

    </div>
  )
}