import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Audiowide } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const aurora = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aurora",
})

export const metadata: Metadata = {
  title: "NyxiumAI — Agente de Inteligencia Artificial para tu Negocio",
  description:
    "Automatiza tareas repetitivas, integra tus herramientas y escala sin límites con nuestro agente de IA avanzado. Disponible 24/7.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${aurora.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
