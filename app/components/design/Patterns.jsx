import React from 'react'

export const wideGrid = ({children}) => {
  return (
    <div className="min-h-screen w-full bg-transparent relative">
  {/* Purple Gradient Grid Right Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      `,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    }}
  />
   {children}
</div>
  )
}
