'use client'

import { useEffect, useRef } from 'react'

const KEYFRAMES = `
@keyframes ember-field-rise {
  0%   { transform: translate(0, 0) scale(0.5); opacity: 0; }
  8%   { opacity: 0.5; }
  40%  { transform: translate(calc(var(--drift) * 0.4), -45vh) scale(1.1); opacity: 0.4; }
  75%  { transform: translate(calc(var(--drift) * 0.8), -80vh) scale(0.9); opacity: 0.25; }
  100% { transform: translate(var(--drift), -115vh) scale(0.4); opacity: 0; }
}
`

export function EmberField() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const styleId = 'ember-field-keyframes'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = KEYFRAMES
      document.head.appendChild(style)
    }

    const field = ref.current
    if (!field) return

    const count = 35
    const particles: HTMLSpanElement[] = []

    for (let i = 0; i < count; i++) {
      const el = document.createElement('span')
      const isGreen = Math.random() > 0.72
      const isBig = Math.random() > 0.85

      const size = isBig ? 4 + Math.random() * 4 : 1 + Math.random() * 2.5
      const duration = isBig ? 12 + Math.random() * 14 : 16 + Math.random() * 22
      const delay = Math.random() * -40
      const drift = (Math.random() - 0.5) * 100

      const goldColor = 'radial-gradient(circle at 40% 35%, #ffe59a 0%, #c9973a 55%, #8b5e15 100%)'
      const greenColor = 'radial-gradient(circle at 40% 35%, #b8ffca 0%, #5dbf72 55%, #277a3c 100%)'

      const goldShadow = isBig
        ? '0 0 8px 3px rgba(201,151,58,0.4), 0 0 18px 5px rgba(201,151,58,0.15)'
        : '0 0 4px 1px rgba(201,151,58,0.35)'
      const greenShadow = isBig
        ? '0 0 8px 3px rgba(93,191,114,0.4), 0 0 18px 5px rgba(93,191,114,0.15)'
        : '0 0 4px 1px rgba(93,191,114,0.35)'

      Object.assign(el.style, {
        position: 'absolute',
        bottom: '-6%',
        borderRadius: '9999px',
        left: Math.random() * 100 + '%',
        width: size + 'px',
        height: size + 'px',
        background: isGreen ? greenColor : goldColor,
        boxShadow: isGreen ? greenShadow : goldShadow,
        animationName: 'ember-field-rise',
        animationDuration: duration + 's',
        animationDelay: delay + 's',
        animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animationIterationCount: 'infinite',
        willChange: 'transform, opacity',
      })
      el.style.setProperty('--drift', drift + 'px')

      field.appendChild(el)
      particles.push(el)
    }

    return () => {
      particles.forEach((p) => p.remove())
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    />
  )
}
