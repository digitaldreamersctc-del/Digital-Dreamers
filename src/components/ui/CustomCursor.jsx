import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY

      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `
            translate(${pos.current.x - 12}px, ${pos.current.y - 12}px)
          `
        }
      })
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0 pointer-events-none
        w-7 h-7 rounded-full
        bg-[#B2A5FF]/70
        mix-blend-multiply
        transition-transform duration-75 ease-out
        z-50
      "
    />
  )
}
