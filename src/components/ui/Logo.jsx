import React from 'react'

export default function Logo({ variant = 'dark', size = 'md' }) {
  const sizes = { sm: 100, md: 150, lg: 200, xl: 280 }
  const w = sizes[size] || sizes.md
  return (
    <img
      src="/raisevision-logo.png"
      alt="Raisevision and Company Limited"
      style={{ width: w, height: 'auto', display: 'block' }}
    />
  )
}
