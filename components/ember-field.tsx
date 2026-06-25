'use client'

import { useEffect, useRef } from 'react'

export function EmberField() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const field = ref.current
    if (!field) return

    const count = 28
    const particles: HTMLSpanElement[] = []

    for (let i = 0; i < count; i++) {
      const el = document.createElement('span')
      const isGreen = Math.random() > 0.78
      el.className =
        'ember-particle ' + (isGreen ? 'ember-particle--green' : 'ember-particle--gold')

      const size = 2 + Math.random() * 3
      const duration = 14 + Math.random() * 18
      const delay = Math.random() * -30
      const drift = (Math.random() - 0.5) * 60

      el.style.left = Math.random() * 100 + '%'
      el.style.width = size + 'px'
      el.style.height = size + 'px'
      el.style.animationDuration = duration + 's'
      el.style.animationDelay = delay + 's'
      el.style.setProperty('--drift', drift + 'px')

      field.appendChild(el)
      particles.push(el)
    }

    return () => {
      particles.forEach((p) => p.remove())
    }
  }, [])

  return <div ref={ref} className="ember-field" aria-hidden="true" />
}
