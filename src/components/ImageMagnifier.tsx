// 'use client'

// import React, { useState, useRef, useCallback } from 'react'

// interface ImageMagnifierProps {
//     src?: string
//     width?: number
//     height?: number
//     magnifierHeight?: number
//     magnifierWidth?: number
//     zoomLevel?: number
// }

// export default function ImageMagnifier({
//     src = 'https://media.istockphoto.com/id/1347455404/photo/shot-of-an-unrecognizable-woman-spending-a-day-in-the-city.jpg?s=612x612&w=0&k=20&c=W3-QMPd9D-ok_upk94ooFtb3wnWUZW4Gu8dtYRH3fKI=',
//     width = 500,
//     height = 500,
//     magnifierHeight = 100,
//     magnifierWidth = 100,
//     zoomLevel = 2.5
// }: ImageMagnifierProps) {
//     const [[x, y], setXY] = useState([0, 0])
//     const [[imgWidth, imgHeight], setSize] = useState([0, 0])
//     const [showMagnifier, setShowMagnifier] = useState(false)

//     const imgRef = useRef<HTMLImageElement>(null)

//     const handleMouseEnter = useCallback(() => {
//         const img = imgRef.current
//         if (img) {
//             const { width, height } = img.getBoundingClientRect()
//             setSize([width, height])
//             setShowMagnifier(true)
//         }
//     }, [])

//     const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
//         const elem = e.currentTarget
//         const { top, left } = elem.getBoundingClientRect()

//         const x = e.pageX - left - window.pageXOffset
//         const y = e.pageY - top - window.pageYOffset
//         setXY([x, y])
//     }, [])

//     const handleMouseLeave = useCallback(() => {
//         setShowMagnifier(false)
//     }, [])

//     return (
//         <div className="relative">
//             <div
//                 className="relative overflow-hidden"
//                 style={{
//                     height: height,
//                     width: width
//                 }}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//             >
//                 <img
//                     ref={imgRef}
//                     src={src}
//                     alt="Magnifier"
//                     className="w-full h-full object-cover"
//                 />

//                 {showMagnifier && (
//                     <div
//                         style={{
//                             position: "absolute",
//                             left: `${x - magnifierWidth / 2}px`,
//                             top: `${y - magnifierHeight / 2}px`,
//                             pointerEvents: "none",
//                             width: `${magnifierWidth}px`,
//                             height: `${magnifierHeight}px`,
//                             opacity: "1",
//                             border: "1px solid lightgray",
//                             backgroundColor: "white",
//                             backgroundImage: `url('${src}')`,
//                             backgroundRepeat: "no-repeat",
//                             backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
//                             backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
//                             backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
//                         }}
//                     />
//                 )}
//             </div>

//             {showMagnifier && (
//                 <div
//                     className="absolute left-full ml-4 border border-gray-300"
//                     style={{
//                         height: `${height}px`,
//                         width: `${width}px`,
//                         backgroundImage: `url('${src}')`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
//                         backgroundPositionX: `${-x * zoomLevel + width / 2}px`,
//                         backgroundPositionY: `${-y * zoomLevel + height / 2}px`
//                     }}
//                 />
//             )}
//         </div>
//     )
// }


// -------------------------------------------------------------------------------------------------------
// 'use client'

// import React, { useState, useRef, useCallback } from 'react'

// interface ImageMagnifierProps {
//   src: string
//   width: number
//   height: number
//   zoomLevel?: number
// }

// export default function ImageMagnifier({
//   src,
//   width,
//   height,
//   zoomLevel = 2.5
// }: ImageMagnifierProps) {
//   const [[x, y], setXY] = useState([0, 0])
//   const [[imgWidth, imgHeight], setSize] = useState([0, 0])
//   const [showMagnifier, setShowMagnifier] = useState(false)

//   const imgRef = useRef<HTMLImageElement>(null)

//   const handleMouseEnter = useCallback(() => {
//     const img = imgRef.current
//     if (img) {
//       const { width, height } = img.getBoundingClientRect()
//       setSize([width, height])
//       setShowMagnifier(true)
//     }
//   }, [])

//   const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
//     const elem = e.currentTarget
//     const { top, left } = elem.getBoundingClientRect()

//     const x = e.pageX - left - window.pageXOffset
//     const y = e.pageY - top - window.pageYOffset
//     setXY([x, y])
//   }, [])

//   const handleMouseLeave = useCallback(() => {
//     setShowMagnifier(false)
//   }, [])

//   const zoomedWidth = width * 1.5
//   const zoomedHeight = height * 1.5

//   return (
//     <div className="flex items-start gap-4">
//       <div
//         className="relative overflow-hidden"
//         style={{
//           height: height,
//           width: width
//         }}
//         onMouseEnter={handleMouseEnter}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//       >
//         <img
//           ref={imgRef}
//           src={src}
//           alt="Original"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {showMagnifier && (
//         <div
//           className="border border-gray-300"
//           style={{
//             height: `${zoomedHeight}px`,
//             width: `${zoomedWidth}px`,
//             backgroundImage: `url('${src}')`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
//             backgroundPositionX: `${-x * zoomLevel + zoomedWidth / 2}px`,
//             backgroundPositionY: `${-y * zoomLevel + zoomedHeight / 2}px`
//           }}
//         />
//       )}
//     </div>
//   )
// }



// ------------------------------------------------------------------------------------------

'use client'

import React, { useState, useRef, useCallback } from 'react'

interface ImageMagnifierProps {
  src: string
  width: number
  height: number
  magnifierSize?: number
  zoomLevel?: number
  enabled?: boolean
}

export default function ImageMagnifier({
  src,
  width,
  height,
  magnifierSize = 150,
  zoomLevel = 2.5,
  enabled = true
}: ImageMagnifierProps) {
  const [[x, y], setXY] = useState([0, 0])
  const [[imgWidth, imgHeight], setSize] = useState([0, 0])
  const [showMagnifier, setShowMagnifier] = useState(false)

  const imgRef = useRef<HTMLImageElement>(null)

  const handleMouseEnter = useCallback(() => {
    const img = imgRef.current
    if (img) {
      const { width, height } = img.getBoundingClientRect()
      setSize([width, height])
      setShowMagnifier(true)
    }
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const elem = e.currentTarget
    const { top, left } = elem.getBoundingClientRect()

    // Cursor position relative to the image
    const x = e.clientX - left
    const y = e.clientY - top
    setXY([x, y])
  }, [])

  const handleMouseLeave = useCallback(() => {
    setShowMagnifier(false)
  }, [])

  const zoomedWidth = width * 1.5
  const zoomedHeight = height * 1.5

  return (
    <div className="flex items-start gap-4">
      <div
        className="relative overflow-hidden"
        style={{
          height: height,
          width: width
        }}
        onMouseEnter={enabled ? handleMouseEnter : undefined}
        onMouseMove={enabled ? handleMouseMove : undefined}
        onMouseLeave={enabled ? handleMouseLeave : undefined}
      >
        <img
          ref={imgRef}
          src={src}
          alt="Original"
          className="w-full h-full object-cover"
        />
        {enabled && showMagnifier && (
          <div
            style={{
              position: "absolute",
              // Prevent the magnifier from going off the edges
              left: Math.max(0, Math.min(x - magnifierSize / 2, width - magnifierSize)),
              top: Math.max(0, Math.min(y - magnifierSize / 2, height - magnifierSize)),
              width: `${magnifierSize}px`,
              height: `${magnifierSize}px`,
              opacity: "1",
              border: "1px solid lightgray",
              backgroundColor: "white",
              backgroundImage: `url('${src}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
              backgroundPositionX: `${-x * zoomLevel + magnifierSize / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierSize / 2}px`,
              pointerEvents: "none"
            }}
          />
        )}
      </div>

      {enabled && showMagnifier && (
        <div
          className="border border-gray-300"
          style={{
            height: `${zoomedHeight}px`,
            width: `${zoomedWidth}px`,
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
            backgroundPositionX: `${-x * zoomLevel + zoomedWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + zoomedHeight / 2}px`
          }}
        />
      )}
    </div>
  )
}