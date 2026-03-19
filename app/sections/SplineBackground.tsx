"use client"

import { useEffect, useRef } from "react"

export default function SplineBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create canvas exactly like the HTML
    const canvas = document.createElement("canvas")
    canvas.style.display = "block"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    container.appendChild(canvas)

    // MutationObserver to remove watermark as soon as the runtime injects it
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            if (
              node.classList?.contains("spline-watermark") ||
              (node.tagName === "A" &&
                node.getAttribute("href")?.includes("spline"))
            ) {
              node.remove()
            }
          }
        }
      }
    })
    observer.observe(container, { childList: true, subtree: true })

    // Also observe document.body for watermark that may attach outside container
    const bodyObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            if (
              node.classList?.contains("spline-watermark") ||
              (node.tagName === "A" &&
                node.getAttribute("href")?.includes("spline"))
            ) {
              node.remove()
            }
          }
        }
      }
    })
    bodyObserver.observe(document.body, { childList: true, subtree: false })

    let app: any = null

    // Fetch scene data and start — exactly like the HTML does with app.start(data)
    Promise.all([
      import("@splinetool/runtime"),
      fetch("/spline-scene-data.json").then((r) => r.json()),
    ]).then(([{ Application }, sceneData]) => {
      app = new Application(canvas)
      app.start(sceneData)
    })

    return () => {
      observer.disconnect()
      bodyObserver.disconnect()
      if (app) {
        app.dispose?.()
      }
      if (container.contains(canvas)) {
        container.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 h-full w-full"
    />
  )
}
