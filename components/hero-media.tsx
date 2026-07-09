'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Fundo do hero em 2 atos:
 * 1. A foto principal entra na tela.
 * 2. Depois de alguns segundos, começa um "modo vídeo": crossfade
 *    cinematográfico entre cenas com zoom contínuo (sem player, sem controles).
 *
 * Se você salvar um vídeo real em public/videos/hero.mp4, ele é usado
 * automaticamente no lugar do slideshow — também sem player visível.
 */
const scenes = ['/images/hero-buzios.png', '/images/hero-scene2.png', '/images/hero-scene3.png']

const SCENE_DURATION = 7000

export function HeroMedia() {
  const [useVideo, setUseVideo] = useState(false)
  const [scene, setScene] = useState(0)
  const [started, setStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Detecta se o vídeo real existe (sem exibir erros)
  useEffect(() => {
    let cancelled = false
    fetch('/videos/hero.mp4', { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') ?? ''
        if (!cancelled && res.ok && type.includes('video')) setUseVideo(true)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  // Ato 2: inicia a troca de cenas depois da entrada da foto
  useEffect(() => {
    if (useVideo) return
    const kickoff = window.setTimeout(() => setStarted(true), SCENE_DURATION)
    return () => window.clearTimeout(kickoff)
  }, [useVideo])

  useEffect(() => {
    if (!started || useVideo) return
    const interval = window.setInterval(
      () => setScene((s) => (s + 1) % scenes.length),
      SCENE_DURATION,
    )
    return () => window.clearInterval(interval)
  }, [started, useVideo])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {useVideo ? (
        <video
          ref={videoRef}
          className="size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-buzios.png"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        scenes.map((src, i) => (
          <img
            key={src}
            src={src || "/placeholder.svg"}
            alt=""
            className={cn(
              'absolute inset-0 size-full object-cover transition-opacity duration-[2000ms] ease-in-out',
              i === scene ? 'animate-scene-zoom opacity-100' : 'opacity-0',
            )}
          />
        ))
      )}

      {/* Gradientes para legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/85 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/60 to-transparent" />
    </div>
  )
}
