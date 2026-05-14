import { motion } from 'framer-motion'
import Icon from '@/components/ui/icon'
import { Button } from '@/components/ui/button'

const features = [
  { icon: 'Cpu', label: 'Высокопроизводительные AMD Ryzen 9 и Intel i9' },
  { icon: 'Shield', label: 'Продвинутая защита от DDoS атак' },
  { icon: 'Globe', label: 'Бесплатные поддомены для серверов' },
  { icon: 'Users', label: 'Управление игроками прямо из панели' },
  { icon: 'Plug', label: 'Подключение без порта' },
  { icon: 'Package', label: 'Установка любых ядер в два клика' },
]

const tariff = {
  name: 'Агент',
  description: 'Лучший выбор под большинство задач',
  cpu: '3 ядра',
  cpuModel: 'AMD Ryzen 9 7950X/9950X / Intel i9-13900K',
  ram: '10 ГБ',
  ramType: 'DDR5',
  disk: '60 ГБ',
  diskType: 'NVMe SSD',
  ddos: 'Расширенная',
  locations: ['🇷🇺', '🇩🇪'],
  price: '639',
  priceAlt: '4 042 ₸/мес',
}

const navLinks = [
  { icon: 'Home', label: 'Главная' },
  { icon: 'Info', label: 'Информация' },
  { icon: 'Mail', label: 'Контакты' },
  { icon: 'ShieldCheck', label: 'Бот защита' },
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
            <button key={link.label} className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors">
              <Icon name={link.icon} size={14} />
              {link.label}
              {link.label === 'Бот защита' && (
                <span className="ml-1 text-[9px] bg-violet-500 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">NEW</span>
              )}
            </button>
          ))}
        </div>

        <Button className="bg-violet-600 hover:bg-violet-500 text-white text-sm px-4 py-2 h-auto rounded-lg flex items-center gap-2">
          <Icon name="LayoutDashboard" size={14} />
          Перейти в панель
        </Button>
      </nav>

      {/* Hero */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center gap-12">

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
            <Button variant="outline" className="border-violet-500/50 text-white hover:bg-violet-900/40 px-6 py-3 h-auto text-sm font-semibold rounded-lg flex items-center gap-2 bg-transparent">
              <Icon name="List" size={16} />
              Посмотреть тарифы
            </Button>
          </div>
        </motion.div>

        {/* Правая колонка — карточка тарифа */}
        <motion.div
          className="w-full lg:w-[420px] flex-shrink-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-[#2a1050]/80 border border-violet-500/30 rounded-2xl p-6 backdrop-blur-sm">
            {/* Шапка карточки */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="w-14 h-14 rounded-xl bg-violet-900 border border-violet-500/40 flex items-center justify-center text-2xl font-black text-violet-300">
                TX
              </div>
              <div>
                <div className="font-bold text-lg">{tariff.name}</div>
                <div className="text-sm text-white/50">{tariff.description}</div>
              </div>
            </div>

            {/* Характеристики */}
            <div className="space-y-4">
              {[
                { icon: 'Cpu', label: 'Процессор:', value: tariff.cpu, sub: tariff.cpuModel, progress: 50 },
                { icon: 'MemoryStick', label: 'Память (RAM):', value: tariff.ram, sub: tariff.ramType, progress: 65 },
                { icon: 'HardDrive', label: 'Диск (SSD):', value: tariff.disk, sub: tariff.diskType, progress: 40 },
                { icon: 'ShieldCheck', label: 'DDoS защита:', value: tariff.ddos, sub: null, progress: 85 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex items-start gap-3">
                    <Icon name={row.icon} size={14} className="text-violet-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/50">{row.label}</span>
                        <div className="text-right">
                          <span className="font-semibold text-white">{row.value}</span>
                          {row.sub && <div className="text-[11px] text-white/40">{row.sub}</div>}
                        </div>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full">
                        <div
                          className="h-1 bg-gradient-to-r from-violet-500 to-violet-300 rounded-full"
                          style={{ width: `${row.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Локация */}
              <div className="flex items-center gap-3 pt-1">
                <Icon name="MapPin" size={14} className="text-violet-400 flex-shrink-0" />
                <span className="text-sm text-white/50 w-28">Локация:</span>
                <div className="flex gap-1 text-lg">{tariff.locations.map((f, i) => <span key={i}>{f}</span>)}</div>
              </div>
            </div>

            {/* Цена и кнопка */}
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold">
                  {tariff.price}<span className="text-sm font-normal text-white/50">₽ / мес</span>
                </div>
                <div className="text-xs text-white/40">или {tariff.priceAlt}</div>
              </div>
              <Button className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-2 h-auto rounded-lg flex items-center gap-2 text-sm font-semibold">
                Заказать
                <Icon name="ArrowRight" size={14} />
              </Button>
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  )
}