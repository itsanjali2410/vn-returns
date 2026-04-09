'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImgWithPlaceholderProps {
  src: string;
  alt: string;
  title?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  className?: string;
  wrapperClassName?: string;
}

export default function ImgWithPlaceholder({
  src,
  alt,
  title,
  fill = true,
  width,
  height,
  sizes = '100vw',
  priority,
  loading,
  className,
  wrapperClassName,
}: ImgWithPlaceholderProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative h-full w-full overflow-hidden ${wrapperClassName ?? ''}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <Image
            src="/logo.webp"
            alt=""
            width={64}
            height={64}
            className="w-auto h-auto object-contain opacity-30 animate-pulse"
          />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        title={title}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority || loading === 'eager'}
        className={`${className ?? ''} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
