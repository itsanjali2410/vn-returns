'use client';

import { useState, ImgHTMLAttributes } from 'react';

interface ImgWithPlaceholderProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export default function ImgWithPlaceholder({
  wrapperClassName,
  className,
  onLoad,
  ...props
}: ImgWithPlaceholderProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName ?? ''}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <img
            src="/logo.webp"
            alt=""
            className="w-16 h-16 object-contain opacity-30 animate-pulse"
          />
        </div>
      )}
      <img
        {...props}
        className={`${className ?? ''} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={(e) => {
          setLoaded(true);
          if (onLoad) onLoad(e);
        }}
      />
    </div>
  );
}
