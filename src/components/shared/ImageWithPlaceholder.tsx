'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type ImageWithPlaceholderProps = ImageProps & {
  wrapperClassName?: string;
};

export default function ImageWithPlaceholder({
  wrapperClassName,
  className,
  onLoad,
  ...props
}: ImageWithPlaceholderProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative h-full w-full ${wrapperClassName ?? ''}`}>
      {/* Logo placeholder */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gray-100 transition-opacity duration-500 ${
          loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Image
          src="/logo.webp"
          alt=""
          width={80}
          height={80}
          className="w-auto h-auto object-contain opacity-40 animate-pulse"
        />
      </div>

      {/* Actual image */}
      <Image
        {...props}
        className={`${className ?? ''} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={(e) => {
          setLoaded(true);
          if (typeof onLoad === 'function') {
            (onLoad as (e: React.SyntheticEvent<HTMLImageElement>) => void)(e);
          }
        }}
      />
    </div>
  );
}
