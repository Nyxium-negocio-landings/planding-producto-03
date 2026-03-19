import {
  Clock,
  Puzzle,
  BarChart3,
  MessageSquare,
  Shield,
  Scale,
} from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Automatización 24/7",
    desc: "Tu agente nunca duerme. Opera día y noche sin interrupciones, gestionando tareas mientras tu equipo descansa.",
  },
  {
    icon: Puzzle,
    title: "Integración Total",
    desc: "Se conecta con tus herramientas favoritas: CRM, email, Slack, WhatsApp y más de 100 plataformas.",
  },
  {
    icon: BarChart3,
    title: "Analítica Inteligente",
    desc: "Dashboards en tiempo real con métricas clave. Toma decisiones basadas en datos, no en suposiciones.",
  },
  {
    icon: MessageSquare,
    title: "Respuestas Instantáneas",
    desc: "Atiende consultas en milisegundos con respuestas naturales y contextualizadas que sorprenden a tus clientes.",
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    desc: "Encriptación de extremo a extremo, cumplimiento GDPR y auditorías de seguridad continuas.",
  },
  {
    icon: Scale,
    title: "Escalabilidad Sin Límites",
    desc: "De 10 a 10,000 consultas simultáneas. Crece sin preocuparte por la infraestructura.",
  },
]

export default function Features() {
  return (
    <section
      id="caracteristicas"
      className="relative bg-[#00010a] px-6 py-20 md:px-16 md:py-32"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-red-500/5 blur-[150px]"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-red-300/80">
          POTENCIA ILIMITADA
        </p>
        <h2 className="mb-6 text-center text-3xl font-bold text-white md:text-5xl">
          CARACTERÍSTICAS{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
            PRINCIPALES
          </span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-base text-white/60">
          Diseñado para empresas que buscan resultados reales. Cada
          funcionalidad está pensada para transformar tu eficiencia operativa.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group glass rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:border-red-400/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/15 transition-all duration-300 group-hover:bg-red-500/25 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <feature.icon className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
