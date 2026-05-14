import { motion } from 'framer-motion'
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
  return (
    <div className="min-h-screen bg-[#1a0533] text-white overflow-x-hidden">

      {/* фоновые пятна */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-800/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-violet-700/20 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[80px]" />
      </div>

      {/* Навигация */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-4 border-b border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-violet-500 flex items-center justify-center">
            <Icon name="TreePine" size={18} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-sm leading-none">
              <span className="text-violet-300">TREEX</span> HOSTING
            </div>
            <div className="text-[10px] text-white/50 mt-0.5">Надёжный игровой хостинг</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
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

        <Button className="bg-violet-600 hover:bg-violet-500 text-white text-sm px-4 py-2 h-auto rounded-lg flex items-center gap-2">
          <Icon name="LayoutDashboard" size={14} />
          Перейти в панель
        </Button>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative z-10 max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center gap-12">

        {/* Левая колонка */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Защищённый хостинг<br />
            Майнкрафт серверов<br />
            <span className="text-violet-300">С низкими ценами</span>
          </h1>

          <div className="w-16 h-1 bg-violet-500 rounded mb-8 mt-6" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-violet-900/60 border border-violet-500/30 flex items-center justify-center">
                  <Icon name={f.icon} size={18} className="text-violet-300" />
                </div>
                <span className="text-xs text-white/60 leading-tight">{f.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 h-auto text-sm font-semibold rounded-lg flex items-center gap-2">
              <Icon name="ArrowRight" size={16} />
              Создать сервер
            </Button>
            <Button
              variant="outline"
              className="border-violet-500/50 text-white hover:bg-violet-900/40 px-6 py-3 h-auto text-sm font-semibold rounded-lg flex items-center gap-2 bg-transparent"
              onClick={() => document.querySelector('#tariffs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="List" size={16} />
              Посмотреть тарифы
            </Button>
          </div>
        </motion.div>


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

    </div>
  )
}