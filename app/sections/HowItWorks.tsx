import {
  Settings,
  Link2,
  Rocket,
} from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Settings,
    title: "Configura",
    desc: "Define los flujos de trabajo, las respuestas y el tono de tu agente. Sin código, con nuestra interfaz visual intuitiva.",
  },
  {
    step: "02",
    icon: Link2,
    title: "Conecta",
    desc: "Integra tu agente con tus plataformas existentes en minutos. API lista, webhooks y conectores nativos.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Automatiza",
    desc: "Tu agente comienza a trabajar de inmediato. Monitorea, ajusta y escala desde un solo panel de control.",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative bg-[#00010a] px-6 py-20 md:px-16 md:py-32"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/8 blur-[180px]"></div>

      <div className="relative z-10 container mx-auto max-w-5xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-red-300/80">
          SIMPLE Y PODEROSO
        </p>
        <h2 className="mb-6 text-center text-3xl font-bold text-white md:text-5xl">
          CÓMO{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
            FUNCIONA
          </span>
        </h2>
        <p className="mx-auto mb-20 max-w-2xl text-center text-base text-white/60">
          Implementar tu agente de IA es más fácil de lo que piensas. En tres
          pasos simples, transformarás tu operación.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Connector line (desktop) */}
              {i < 2 && (
                <div className="absolute right-0 top-16 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-red-400/40 to-transparent md:block"></div>
              )}

              {/* Step Number */}
              <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                <span className="absolute text-8xl font-bold text-white/5">
                  {step.step}
                </span>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-red-400/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                  <step.icon className="h-8 w-8 text-red-400" />
                </div>
              </div>

              <h3 className="mb-3 text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-white/60">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
