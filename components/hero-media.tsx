'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
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
const scenes = [
  '/images/hero/hero-buzios-1920.webp',
  '/images/hero/hero-scene2-1920.webp',
  '/images/hero/hero-scene3-1920.webp',
]

// Em mobile/4G, 7s entre trocas é agressivo: o browser ainda está decodificando
// a cena atual quando precisa baixar/prerender da próxima. 10s dá fôlego sem
// perder ritmo.
const SCENE_DURATION_DESKTOP = 7000
const SCENE_DURATION_MOBILE = 10000

// 8x8 cinza médio (~#6b7280) — placeholder blur quase imperceptível mas válido.
const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiM2Yjc0ODAiLz48L3N2Zz4='

function useSceneDuration(): number {
  const get = () =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
      ? SCENE_DURATION_MOBILE
      : SCENE_DURATION_DESKTOP
  const [duration, setDuration] = useState(get)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(max-width: 768px)')
    const onChange = () => setDuration(get())
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return duration
}

export function HeroMedia() {
  const [useVideo, setUseVideo] = useState(false)
  const [scene, setScene] = useState(0)
  const [started, setStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const sceneDuration = useSceneDuration()

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
    const kickoff = window.setTimeout(() => setStarted(true), sceneDuration)
    return () => window.clearTimeout(kickoff)
  }, [useVideo, sceneDuration])

  useEffect(() => {
    if (!started || useVideo) return
    const interval = window.setInterval(
      () => setScene((s) => (s + 1) % scenes.length),
      sceneDuration,
    )
    return () => window.clearInterval(interval)
  }, [started, useVideo, sceneDuration])

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
          // metadata-only: browser ainda consegue autoplay, mas não baixa o MP4 inteiro no load.
          preload="metadata"
          poster="/images/hero/hero-buzios-1920.webp"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        scenes.map((src, i) => (
          <Image
            key={src}
            src={src || '/placeholder.svg'}
            alt=""
            fill
            // LCP: primeira imagem com priority, demais lazy. next/image já adiciona
            // loading="lazy" e decoding="async" quando priority=false.
            priority={i === 0}
            loading={i === 0 ? 'eager' : 'lazy'}
            sizes="100vw"
            quality={75}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className={cn(
              'absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out',
              i === scene
                ? 'animate-scene-zoom opacity-100'
                : 'opacity-0',
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