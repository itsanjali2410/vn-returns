'use client';

import React from 'react';

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  widthClass?: string; // e.g., max-w-2xl or max-w-lg
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  widthClass = 'max-w-2xl',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div
        className={`relative w-full ${widthClass} bg-[#111] border-2 border-[#ffc42d] rounded-lg p-8 text-white sm:p-6`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl font-bold hover:text-gray-400"
        >
          &times;
        </button>

        {/* Title */}
        {title && <h2 className="text-center mb-6 text-[#ffc42d] text-2xl font-bold">{title}</h2>}

        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
