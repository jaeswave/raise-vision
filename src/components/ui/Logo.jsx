import React from 'react'

export default function Logo({ variant = 'dark', size = 'md' }) {
  const scale = { sm: 0.7, md: 1, lg: 1.4, xl: 2 }[size] || 1
  const W = 200 * scale, H = 52 * scale

  const textColor = variant === 'light' ? '#F8FAFC' : '#001F4D'
  const subColor = variant === 'light' ? 'rgba(248,250,252,0.6)' : 'rgba(0,31,77,0.5)'
  const fs = 26 * scale

  return (
    <svg width={W} height={H} viewBox="0 0 200 52" xmlns="http://www.w3.org/2000/svg" aria-label="Raisevision and Company Limited">
      {/* RV mark */}
      <g transform="translate(0, 4)">
        <rect x="0" y="0" width="42" height="42" fill="#2E8B57" />
        <text x="5" y="31" fontFamily="'Barlow Condensed', Arial Narrow, sans-serif" fontSize="28"
          fontWeight="900" fill="white" letterSpacing="-1">R</text>
        <text x="20" y="31" fontFamily="'Barlow Condensed', Arial Narrow, sans-serif" fontSize="28"
          fontWeight="900" fill="rgba(255,255,255,0.35)" letterSpacing="-1">V</text>
        <rect x="0" y="39" width="42" height="3" fill="#C9922A" />
      </g>
      {/* RAISEVISION wordmark */}
      <text x="52" y="30" fontFamily="'Barlow Condensed', Arial Narrow, sans-serif"
        fontSize="26" fontWeight="800" fill={textColor} letterSpacing="1.5">
        RAISEVISION
      </text>
      {/* and Company Limited */}
      <text x="53" y="44" fontFamily="'Barlow Semi Condensed', Helvetica, sans-serif"
        fontSize="8.5" fontWeight="600" fill={subColor} letterSpacing="3">
        AND COMPANY LIMITED
      </text>
      <line x1="52" y1="33.5" x2="196" y2="33.5"
        stroke={variant === 'light' ? 'rgba(255,255,255,0.2)' : 'rgba(0,31,77,0.15)'} strokeWidth="0.5" />
    </svg>
  )
}
