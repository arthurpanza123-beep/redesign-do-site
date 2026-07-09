import { MessageCircle } from 'lucide-react'

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5522998945070"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  )
}
