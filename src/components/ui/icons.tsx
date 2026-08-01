import {
  Sparkles,
  Shield,
  Heart,
  Smile,
  Grid3X3,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Star,
  Check,
  Calendar,
  MessageCircle,
  ArrowRight,
  Quote,
  User,
  Stethoscope,
  Gem,
  AlertCircle,
  Siren,
  Pencil,
  Activity,
  HeartHandshake,
  ScanLine,
  Timer,
  UserCheck,
  CheckCircle,
  ExternalLink,
  Plus,
  Minus,
} from "lucide-react";

// Ícono personalizado de diente
function Tooth({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 3 1.5 4.5C9 13.5 9.5 16 9 19c-.5 2 1 3 2 3h2c1 0 2.5-1 2-3-.5-3 0-5.5 1.5-7.5C17.5 10 18 8.5 18 7c0-2.5-2.5-5-6-5z" />
    </svg>
  );
}

// Ícono de WhatsApp
function WhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Ícono de Instagram
function Instagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Ícono de Facebook
function Facebook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export const Icons = {
  // Servicios
  sparkles: Sparkles,
  shield: Shield,
  heart: Heart,
  smile: Smile,
  grid: Grid3X3,
  tooth: Tooth,
  stethoscope: Stethoscope,
  gem: Gem,
  alertCircle: AlertCircle,
  siren: Siren,
  pencil: Pencil,
  activity: Activity,

  // Why us
  heartHandshake: HeartHandshake,
  scanLine: ScanLine,
  timer: Timer,
  userCheck: UserCheck,

  // Contacto
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  clock: Clock,
  whatsapp: WhatsApp,
  calendar: Calendar,
  messageCircle: MessageCircle,

  // UI
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  arrowRight: ArrowRight,
  menu: Menu,
  x: X,
  star: Star,
  check: Check,
  checkCircle: CheckCircle,
  quote: Quote,
  user: User,
  externalLink: ExternalLink,
  plus: Plus,
  minus: Minus,

  // Redes sociales
  instagram: Instagram,
  facebook: Facebook,
} as const;

export type IconName = keyof typeof Icons;
