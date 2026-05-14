import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-green-400 border-green-400">🌲 TreexHosting</Badge>,
    title: "Твой сервер Minecraft. Онлайн за 60 секунд.",
    showButton: true,
    buttonText: 'Запустить сервер'
  },
  {
    id: 'about',
    title: 'Почему TreexHosting?',
    content: 'Мы специализируемся исключительно на хостинге Minecraft-серверов. Никаких лишних настроек — просто мощное железо, стабильный аптайм 99.9% и поддержка 24/7.'
  },
  {
    id: 'features',
    title: 'Всё для игры.',
    content: 'Поддержка всех версий — Java, Bedrock, Paper, Spigot, Forge, Fabric. Автоматические бэкапы, защита от DDoS, консоль управления и моды в один клик.'
  },
  {
    id: 'testimonials',
    title: 'Тысячи серверов уже в сети.',
    content: 'От небольших серверов для друзей до крупных публичных проектов с сотнями игроков — TreexHosting справляется с любой нагрузкой.'
  },
  {
    id: 'join',
    title: 'Начни играть прямо сейчас.',
    content: 'Выбери тариф, настрой сервер за минуту и зови друзей. Первые 3 дня — бесплатно, без привязки карты.',
    showButton: true,
    buttonText: 'Попробовать бесплатно'
  },
]