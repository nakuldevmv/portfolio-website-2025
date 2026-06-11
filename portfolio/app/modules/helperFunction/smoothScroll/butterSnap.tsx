// utils/smoothScroll.ts
import { getLenis } from './lenisInstance'

export const smoothScrollTo = async (target: string, offset = 0) => {
  const el = document.querySelector(target)
  if (el instanceof HTMLElement) {
    const lenis = await getLenis()
    if (!lenis) return

    lenis.scrollTo(el, { offset })
  } else {
    console.warn(`Target ${target} is not a valid HTMLElement`)
  }
}
