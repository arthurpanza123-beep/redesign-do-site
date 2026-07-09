'use client'

import { useState } from 'react'

/**
 * Fundo do hero: tenta reproduzir /videos/hero.mp4 (vídeo nativo, sem player).
 * Se o arquivo não existir, mostra a foto com movimento lento (Ken Burns).
 * Para usar seu vídeo: salve o arquivo como public/videos/hero.mp4
 */
export function HeroMedia() {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {!videoFailed ? (
        <video
          className="size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-buzios.png"
          onError={() => setVideoFailed(true)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/images/hero-buzios.png"
          alt=""
          className="animate-kenburns size-full object-cover"
        />
      )}
      {/* Gradientes para legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/15" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/80 to-transparent" />
    </div>
  )
}
