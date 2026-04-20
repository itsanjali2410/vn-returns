'use client';

import React, { useEffect, useState } from 'react';
import TripForm from './TripForm';
import TripFeedbackForm from './FeedbackForm';

interface TripFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestination?: string;
  packageName: string;
}

const TripFormModal: React.FC<TripFormModalProps> = ({
  isOpen,
  onClose,
  defaultDestination,
  packageName,
}) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [initialData, setInitialData] = useState<Record<string, any>>({});
  const [lockClose, setLockClose] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTripFormComplete = (data: Record<string, any>) => {
    setShowFeedback(true);
    setInitialData(data);
    setLockClose(true);
  };

  const handleFeedbackFormComplete = () => {
    setLockClose(false);
    setShowFeedback(false);
    onClose();
  };

  return (
    <div className="faisal-modal fixed inset-0 z-[9999] flex items-start sm:items-center justify-center bg-black bg-opacity-50 p-0 overflow-auto">
      <div
        className="
          relative w-full h-full sm:h-auto sm:w-full sm:max-w-2xl sm:max-h-[80vh]
          bg-white sm:border sm:border-gray-200 rounded-none sm:rounded-lg shadow-2xl
          lg:p-4 sm:p-8 text-gray-900 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
          sm:mx-auto sm:my-auto
        "
      >
        {!lockClose && (
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 text-4xl font-bold hover:text-gray-900 z-10"
          >
            &times;
          </button>
        )}

        {!showFeedback ? (
          <TripForm
            defaultDestination={defaultDestination}
            packageName={packageName}
            onComplete={handleTripFormComplete}
            onClose={onClose}
            isModal={true}
          />
        ) : (
          <TripFeedbackForm
            onComplete={handleFeedbackFormComplete}
            initialData={initialData}
            isModal={true}
          />
        )}
      </div>
    </div>
  );
};

export default TripFormModal;
