import { Button } from "@/components/ui/button"
import {
  Zap,
  ArrowRight,
} from "lucide-react"

export default function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#00010a] px-6 py-20 md:px-16 md:py-32"
    >
      {/* Animated glow orbs */}
      <div className="animate-glow-pulse absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-red-500/15 blur-[100px]"></div>
      <div
        className="animate-glow-pulse absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-purple-500/15 blur-[100px]"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="relative z-10 container mx-auto max-w-3xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-300">
          <Zap className="h-4 w-4" />
          OFERTA LIMITADA
        </div>

        <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
          TRANSFORMA TU NEGOCIO
          <br />
          <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
            HOY MISMO
          </span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/70">
          Únete a las empresas que ya automatizaron sus procesos con nuestro
          agente de IA. Agenda una demo gratuita y descubre cómo podemos
          multiplicar tu productividad.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group rounded-full bg-white px-10 py-6 text-base font-semibold uppercase tracking-wide text-[#5B4B8A] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(239,68,68,0.8),0_0_60px_rgba(239,68,68,0.5)]"
          >
            AGENDAR DEMO GRATIS
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-white/30 bg-transparent px-10 py-6 text-base font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-red-400 hover:bg-white/5 hover:text-red-400"
          >
            CONTACTAR VENTAS
          </Button>
        </div>

        <p className="mt-8 text-xs text-white/40">
          Sin compromisos · Configuración en minutos · Soporte dedicado
        </p>
      </div>
    </section>
  )
}
