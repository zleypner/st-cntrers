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

// Ícono de Waze
function Waze({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.54 6.63c-1.28-3.28-4.53-5.63-8.54-5.63-4.29 0-7.71 2.66-8.73 6.36-.07.27-.13.54-.18.82-.04.23-.07.46-.09.7v.12c0 3.69 2.99 6.68 6.68 6.68h.32c.12 0 .24-.01.36-.02.41-.03.81-.1 1.2-.2.13-.03.26-.07.39-.11.39-.13.77-.29 1.13-.48l.09-.05c.12-.07.24-.14.35-.22.23-.15.45-.31.66-.49l.06-.05c.73-.63 1.33-1.4 1.77-2.27.15-.29.28-.59.39-.9.04-.11.07-.22.1-.33.11-.39.19-.79.23-1.2.01-.14.02-.28.02-.42 0-.14-.01-.28-.02-.42-.02-.28-.06-.55-.12-.82 2.54.52 4.43 2.79 4.43 5.49 0 1.86-.9 3.51-2.29 4.53-.05.04-.1.07-.15.11-.18.12-.36.24-.56.34-.06.03-.13.06-.19.09-.21.1-.43.19-.66.27-.07.02-.14.05-.21.07-.27.08-.55.14-.84.18-.09.01-.18.02-.27.03-.23.02-.47.03-.71.03-3.87 0-7.02-3.14-7.02-7.02h-2c0 4.97 4.04 9.02 9.02 9.02.33 0 .66-.02.98-.06.11-.01.21-.03.32-.05.38-.06.75-.15 1.11-.27.1-.03.2-.07.3-.11.33-.13.65-.28.96-.46.09-.05.17-.1.26-.16.29-.18.56-.38.82-.6.07-.06.15-.12.22-.19.28-.26.54-.54.78-.84.06-.07.11-.15.17-.22.21-.28.4-.58.57-.89.05-.09.1-.19.15-.28.15-.29.28-.59.39-.9.04-.1.07-.2.1-.3.1-.31.18-.63.24-.96.02-.1.03-.2.05-.31.05-.36.08-.73.08-1.1 0-4.01-2.68-7.4-6.35-8.47z" />
      <circle cx="9" cy="10.5" r="1.5" />
      <circle cx="15" cy="10.5" r="1.5" />
      <path d="M12 16c-1.1 0-2-.45-2.68-1.17l-1.41 1.41C8.88 17.21 10.34 18 12 18s3.12-.79 4.09-1.76l-1.41-1.41C14 15.55 13.1 16 12 16z" />
    </svg>
  );
}

// Ícono de Google Maps
function GoogleMaps({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
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

  // Navegación
  waze: Waze,
  googleMaps: GoogleMaps,
} as const;

export type IconName = keyof typeof Icons;
