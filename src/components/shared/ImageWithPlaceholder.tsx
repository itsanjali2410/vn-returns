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
    <div className={`relative ${wrapperClassName ?? ''}`}>
      {/* Logo placeholder */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gray-100 transition-opacity duration-500 ${
          loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <img
          src="/logo.webp"
          alt="Loading..."
          className="w-20 h-20 object-contain opacity-40 animate-pulse"
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
