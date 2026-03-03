import Image from "next/image"
import { useState } from "react"

interface ZoomableImageProps {
  src: string
  width: number
  height: number
}

export default function ZoomableImage({ src, width, height }: ZoomableImageProps) {
  const [showZoom, setShowZoom] = useState(false)

  return (
    <>
      {/* Trigger image */}
      <div
        className="cursor-zoom-in inline-block"
        onMouseEnter={() => setShowZoom(true)}
      >
        <Image
          src={src}
          alt="email content"
          width={width}
          height={height}
          className="rounded-md select-none pointer-events-auto"
        />
      </div>

      {/* Enlarged overlay */}
      {showZoom && (
        <div
          className="
            fixed inset-0 
            flex items-center justify-center 
            bg-black/40 
            z-9999
          "
        >
          <div
            onMouseLeave={() => setShowZoom(false)}
            className="cursor-zoom-out"
          >
            <Image
              src={src}
              alt="zoomed email content"
              width={width * 2}
              height={height * 2}
              className="rounded-lg shadow-2xl pointer-events-auto"
            />
          </div>
        </div>
      )}
    </>
  )
}
