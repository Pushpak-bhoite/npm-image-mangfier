import React, { useRef, useState, useEffect } from 'react';

interface ImageZoomProps {
    src: string;
    width?: number;
    height?: number;
    zoomWidth?: number;
    zoomHeight?: number;
    lensSize?: number;
}

const ImageZoom: React.FC<ImageZoomProps> = ({
    src,
    width = 300,
    height = 240,
    zoomWidth = 300,
    zoomHeight = 300,
    lensSize = 40,
}) => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const lensRef = useRef<HTMLDivElement | null>(null);
    const resultRef = useRef<HTMLDivElement | null>(null);

    const [cx, setCx] = useState(1);
    const [cy, setCy] = useState(1);

    useEffect(() => {
        const img = imgRef.current;
        const lens = lensRef.current;
        const result = resultRef.current;

        if (img && lens && result) {
            const cxRatio = zoomWidth / lensSize;
            const cyRatio = zoomHeight / lensSize;

            setCx(cxRatio);
            setCy(cyRatio);

            result.style.backgroundImage = `url(${src})`;
            result.style.backgroundSize = `${img.width * cxRatio}px ${img.height * cyRatio}px`;
            console.log(img.width * cxRatio)
            console.log(img.height * cyRatio)
        }
    }, [src, zoomWidth, zoomHeight, lensSize]);

    const getCursorPos = (e: React.MouseEvent | React.TouchEvent) => {
        const img = imgRef.current;
        if (!img) return { x: 0, y: 0 };

        const a = img.getBoundingClientRect();
        const x = (e as React.MouseEvent).pageX - a.left - window.pageXOffset;
        const y = (e as React.MouseEvent).pageY - a.top - window.pageYOffset;
        console.log('x', x)
        console.log('y', y)
        return { x, y };
    };

    const moveLens = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        const img = imgRef.current;
        const lens = lensRef.current;
        const result = resultRef.current;

        if (!img || !lens || !result) return;

        const pos = getCursorPos(e);
        let x = pos.x - lens.offsetWidth / 2;
        let y = pos.y - lens.offsetHeight / 2;

        if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
        if (x < 0) x = 0;
        if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
        if (y < 0) y = 0;

        lens.style.left = `${x}px`;
        lens.style.top = `${y}px`;

        result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    };

    return (
        <div className="relative  bg-black   gap-10 " >

            <div className=' border border-blue-500 ' style={{ width: width, height: height }}>
                <img
                    ref={imgRef}
                    src={src}
                    className=" block w-full object-cover border border-red-500  "
                    width={width}
                    height={height}
                    onMouseMove={moveLens}
                    onTouchMove={moveLens}
                    alt="Zoomable"
                />
            </div>
            <div
                ref={lensRef}
                className="absolute border border-gray-400"
                style={{ width: lensSize, height: lensSize }}
            ></div>
            <div
                ref={resultRef}
                className="border border-gray-400"
                style={{
                    width: zoomWidth,
                    height: zoomHeight,
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    top: 0,
                    left: `${width + 10}px`,
                }}
            ></div>
        </div>
    );
};

export default ImageZoom;
