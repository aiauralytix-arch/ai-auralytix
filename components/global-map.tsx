"use client"

import "leaflet/dist/leaflet.css"
import { useMemo } from "react"
import dynamic from "next/dynamic"
import type { LatLngExpression, LatLngBoundsExpression } from "leaflet"

type Office = { label: string; lat: number; lon: number; href?: string }

type Props = {
  offices?: Office[]
  showLabels?: boolean
  heightClassName?: string
}

const MapContainer = dynamic(
  async () => (await import("react-leaflet")).MapContainer,
  { ssr: false }
)
const TileLayer = dynamic(
  async () => (await import("react-leaflet")).TileLayer,
  { ssr: false }
)
const CircleMarker = dynamic(
  async () => (await import("react-leaflet")).CircleMarker,
  { ssr: false }
)
const Popup = dynamic(
  async () => (await import("react-leaflet")).Popup,
  { ssr: false }
)

function toBounds(offices: Office[]): LatLngBoundsExpression | null {
  if (!offices.length) return null
  const lats = offices.map(o => o.lat)
  const lons = offices.map(o => o.lon)
  const south = Math.min(...lats)
  const north = Math.max(...lats)
  const west = Math.min(...lons)
  const east = Math.max(...lons)
  const padLat = Math.max(2, (north - south) * 0.2)
  const padLon = Math.max(2, (east - west) * 0.2)
  return [
    [south - padLat, west - padLon],
    [north + padLat, east + padLon],
  ]
}

export function GlobalPresenceMap({
  offices = [
    { label: "Gurugram, IN", lat: 28.4595, lon: 77.0266 },
    { label: "Dubai, AE", lat: 25.2048, lon: 55.2708 },
    { label: "London, UK", lat: 51.5074, lon: -0.1278 },
    { label: "New York, US", lat: 40.7128, lon: -74.0060 },
    { label: "Singapore, SG", lat: 1.3521, lon: 103.8198 },
  ],
  heightClassName = "h-80 min-h-[420px]",
}: Props) {
  if (!offices.length) {
    return (
      <div className="rounded-2xl border bg-card p-4 shadow-glass text-sm text-muted-foreground">
        No offices to display.
      </div>
    )
  }

  const bounds = useMemo(() => toBounds(offices), [offices])
  const defaultCenter: LatLngExpression = [20, 0]

  return (
    <div className={`rounded-2xl border bg-card shadow-glass overflow-hidden ${heightClassName}`}>
      <div className="w-full h-full">
        <MapContainer
          bounds={bounds ?? undefined}
          center={defaultCenter}
          zoom={2}
          minZoom={2}
          worldCopyJump
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          />
          {offices.map((o) => {
            const pos: LatLngExpression = [o.lat, o.lon]
            return (
              <CircleMarker
                key={`${o.label}-${o.lat}-${o.lon}`}
                center={pos}
                radius={7 as any} // leaflet typing quirk
                pathOptions={{
                  color: "hsl(252 100% 60%)",
                  fillColor: "hsl(252 100% 60%)",
                  fillOpacity: 0.8,
                  opacity: 0.9,
                }}
              >
                <Popup>
                  <div className="space-y-1">
                    <div className="font-medium">{o.label}</div>
                    {o.href && (
                      <a
                        className="text-primary underline"
                        href={o.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open in Maps
                      </a>
                    )}
                  </div>
                </Popup>
              </CircleMarker>
            )
          })}
        </MapContainer>
      </div>
    </div>
  )
}