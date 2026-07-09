'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement,
        options: {
          videoId: string
          playerVars: Record<string, string | number>
          events: {
            onReady?: (e: { target: YTPlayer }) => void
            onStateChange?: (e: { data: number; target: YTPlayer }) => void
            onError?: (e: { data: number }) => void
          }
        },
      ) => YTPlayer
      PlayerState: { ENDED: number; PLAYING: number }
    }
    onYouTubeIframeAPIReady?: () => void
  }
}

interface YTPlayer {
  mute: () => void
  playVideo: () => void
  seekTo: (seconds: number, allowSeekAhead: boolean) => void
  destroy: () => void
}

interface VideoBackgroundProps {
  videoId: string
  /** Segundo inicial do vídeo */
  start?: number
  className?: string
}

export function VideoBackground({ videoId, start = 0, className }: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YTPlayer | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let destroyed = false

    function createPlayer() {
      if (destroyed || !window.YT || !el) return
      playerRef.current = new window.YT.Player(el, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          start,
        },
        events: {
          onReady: (e) => {
            e.target.mute()
            e.target.seekTo(start, true)
            e.target.playVideo()
          },
          // Erros (ex.: 150 = incorporação desativada pelo dono do vídeo):
          // o wrapper permanece com opacity-0 e o fundo escuro do hero fica visível
          onError: () => {},
          onStateChange: (e) => {
            if (window.YT && e.data === window.YT.PlayerState.PLAYING) {
              setReady(true)
            }
            // Loop manual: ao terminar, volta para o segundo inicial
            if (window.YT && e.data === window.YT.PlayerState.ENDED) {
              e.target.seekTo(start, true)
              e.target.playVideo()
            }
          },
        },
      })
    }

    if (window.YT?.Player) {
      createPlayer()
    } else {
      const prev = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        prev?.()
        createPlayer()
      }
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(tag)
      }
    }

    return () => {
      destroyed = true
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [videoId, start])

  return (
    <div className={className} aria-hidden="true">
      {/* Wrapper superdimensionado: cobre o contêiner e esconde as bordas/UI do player */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[300%] min-h-full w-[300%] min-w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 [&_iframe]:h-full [&_iframe]:w-full ${ready ? 'opacity-100' : 'opacity-0'}`}
        style={{ aspectRatio: '16 / 9', maxHeight: 'none' }}
      >
        <div ref={containerRef} className="h-full w-full" />
      </div>
    </div>
  )
}
