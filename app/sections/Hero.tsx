import { Button } from "@/components/ui/button"
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react"
import Image from "next/image"
import Navbar from "./Navbar"
import SplineBackground from "./SplineBackground"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Fondo 3D Spline — sin watermark */}
      <SplineBackground />

      {/* Navbar on top of Spline */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-between gap-8 px-6 pt-8 md:flex-row md:px-16 md:pt-12">
        <div className="max-w-2xl text-center md:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-red-200/90">
            AGENTE DE INTELIGENCIA ARTIFICIAL
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            AUTOMATIZA TUS
            <br />
            TAREAS CON
            <br />
            <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
              IA AVANZADA
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/85 md:mx-0">
            Libera a tu equipo de tareas repetitivas. Nuestro agente de IA
            trabaja 24/7, se integra con tus herramientas y escala sin límites
            para que tu negocio crezca más rápido.
          </p>

          {/* Buttons */}
          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Button
              size="lg"
              className="rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-wide text-[#7B6BA8] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(239,68,68,0.8),0_0_40px_rgba(239,68,68,0.5)]"
            >
              <a href="#contacto">COMENZAR AHORA</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white bg-transparent px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-red-400 hover:bg-white/10 hover:text-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.8),0_0_40px_rgba(239,68,68,0.5)]"
            >
              <a href="#caracteristicas">SABER MÁS</a>
            </Button>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-3 md:justify-start">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
          </div>

          {/* Social Media Icons — inside the container */}
          <div className="mt-12 hidden gap-6 md:flex">
            <Twitter className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
            <Linkedin className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
            <Facebook className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
            <Instagram className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
          </div>
        </div>

        <div className="relative animate-pulse-scale transition-transform duration-500 hover:scale-110">
          <div className="relative h-[400px] w-[300px] md:h-[720px] md:w-[540px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2812%29-AUzcUJl45XueiOf0D1t9cvkzHg1wce.png"
              alt="Agente de IA - Headset VR"
              fill
              className="object-contain transition-all duration-500"
              style={{
                filter:
                  "drop-shadow(0 0 50px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 100px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 150px rgba(239, 68, 68, 0.4))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
