export function GlobalPresenceMap() {
  // Simple decorative SVG world map with presence dots (static)
  return (
    <div className="rounded-2xl border bg-card p-4 shadow-glass">
      <svg viewBox="0 0 800 400" role="img" aria-label="Global presence map" className="w-full h-auto">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
            <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#g1)" rx="24" />
        {/* Simplified continents silhouettes */}
        <g fill="currentColor" opacity="0.25">
          <path d="M120 150c40-20 90-30 140-10 30 10 70 10 100-5 50-25 130-25 160 0 30 25-10 55-80 60-40 3-70 22-90 40-20 18-50 30-90 30-70 0-120-30-160-50-40-20-50-45 20-65z" />
          <path d="M520 180c50-15 90-10 120 10 20 15 20 35-10 50-30 15-70 20-110 10-30-5-40-30-10-55 5-5 10-10 10-15z" />
        </g>
        {/* Presence dots */}
        {[
          [160, 190],
          [260, 210],
          [340, 180],
          [420, 200],
          [500, 210],
          [640, 220],
          [700, 240],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="hsl(var(--primary))" />
        ))}
      </svg>
    </div>
  )
}
