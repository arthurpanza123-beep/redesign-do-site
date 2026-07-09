import { ImagePlus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PhotoPlaceholderProps {
  label?: string
  className?: string
  iconClassName?: string
}

/**
 * Espaço reservado para o cliente inserir uma foto posteriormente.
 * Substitua este componente por uma <img> / <Image> quando tiver a imagem.
 */
export function PhotoPlaceholder({
  label = 'Adicione sua foto aqui',
  className,
  iconClassName,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2 border-2 border-dashed border-ocean/40 bg-secondary text-muted-foreground',
        className,
      )}
      role="img"
      aria-label={label}
    >
      <ImagePlus className={cn('size-7 text-ocean', iconClassName)} aria-hidden="true" />
      <span className="px-3 text-center text-xs font-medium leading-tight">{label}</span>
    </div>
  )
}
