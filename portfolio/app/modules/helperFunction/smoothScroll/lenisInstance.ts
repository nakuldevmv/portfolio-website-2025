// lib/lenisInstance.ts
import type Lenis from 'lenis'

let lenis: Lenis | null = null
let lenisPromise: Promise<Lenis | null> | null = null

export const getLenis = async () => {
  if (typeof window === 'undefined') {
    return null
  }

  if (!lenis) {
    lenisPromise ??= import('lenis').then(({ default: LenisConstructor }) => {
      lenis = new LenisConstructor({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })

      return lenis
    })

    return lenisPromise
  }

  return lenis
}
