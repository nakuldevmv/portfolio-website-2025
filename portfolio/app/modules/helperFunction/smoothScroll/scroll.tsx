// app/lib/scroll.tsx
'use client'

import { useEffect } from 'react'
import { getLenis } from './lenisInstance'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let cancelled = false
    let rafId: number

    const start = async () => {
      const lenis = await getLenis()
      if (!lenis || cancelled) return

      const raf = (time: number) => {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }

      rafId = requestAnimationFrame(raf)
    }

    start()

    return () => {
      cancelled = true
      if (rafId) {
        cancelAnimationFrame(rafId)
      }

      getLenis().then((lenis) => {
        lenis?.destroy()
      })
    }
  }, [])

  return <>{children}</>
}
