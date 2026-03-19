import {
  AlertTriangle,
  CheckCircle2,
} from "lucide-react"

export default function ProblemSolution() {
  return (
    <section
      id="problema"
      className="relative bg-[#00010a] px-6 py-20 md:px-16 md:py-32"
    >
      {/* Decorative blurred orbs */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-red-300/80">
          ¿POR QUÉ NECESITAS UN AGENTE DE IA?
        </p>
        <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-5xl">
          EL PROBLEMA QUE{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
            RESOLVEMOS
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Problema */}
          <div className="group glass rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:border-red-400/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/20">
              <AlertTriangle className="h-7 w-7 text-red-400" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-white">
              Sin IA, tu equipo pierde horas
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400/60"></span>
                Responder las mismas preguntas una y otra vez
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400/60"></span>
                Procesar datos manualmente sin parar
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400/60"></span>
                Perder clientes por tiempos de respuesta lentos
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400/60"></span>
                Operaciones limitadas al horario laboral
              </li>
            </ul>
          </div>

          {/* Solución */}
          <div className="group glass rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:border-red-400/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/20">
              <CheckCircle2 className="h-7 w-7 text-green-400" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-white">
              Con nuestro agente, todo cambia
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-400/60"></span>
                Respuestas instantáneas y personalizadas 24/7
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-400/60"></span>
                Automatización inteligente de procesos repetitivos
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-400/60"></span>
                Atención al cliente sin tiempos de espera
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-400/60"></span>
                Escala infinita sin contratar más personal
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
