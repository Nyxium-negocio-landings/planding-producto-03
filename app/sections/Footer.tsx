import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#00010a] px-6 py-16 md:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="mb-4 block text-lg font-bold tracking-widest text-white">
              NYXIUM<span className="text-red-400">AI</span>
            </span>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/50">
              Agentes de inteligencia artificial que automatizan, escalan y
              transforman tu negocio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="group" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:text-red-400 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
              </a>
              <a href="#" className="group" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:text-red-400 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
              </a>
              <a href="#" className="group" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:text-red-400 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
              </a>
              <a href="#" className="group" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:text-red-400 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Características", href: "#caracteristicas" },
                { label: "Cómo Funciona", href: "#como-funciona" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-all duration-300 hover:text-red-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Recursos
            </h4>
            <ul className="space-y-3">
              {[
                "Documentación",
                "Blog",
                "Casos de Éxito",
                "Centro de Ayuda",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/50 transition-all duration-300 hover:text-red-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Mail className="h-4 w-4 text-red-400/60" />
                hola@nyxiumai.com
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4 text-red-400/60" />
                Lima, Perú
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} NyxiumAI. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/30 transition-all duration-300 hover:text-red-400"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-xs text-white/30 transition-all duration-300 hover:text-red-400"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
