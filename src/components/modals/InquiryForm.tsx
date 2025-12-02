'use client';

import React, { useState } from 'react';
import TripForm from './TripForm';
import TripFeedbackForm from './FeedbackForm';

interface InquiryFormProps {
  defaultDestination?: string;
  packageName?: string;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ defaultDestination = '', packageName = '' }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [initialData, setInitialData] = useState<Record<string, any>>({});

  const handleTripFormComplete = (data: Record<string, any>) => {
    // Step 1 → Step 2
    setShowFeedback(true);
    setInitialData(data);
  };

  const handleFeedbackFormComplete = () => {
    // Reset form flow after completion
    setShowFeedback(false);
    setInitialData({});
  };

  return (
    <div className=" relative w-full max-w-2xl mx-auto bg-[#111] rounded-lg  text-white">
      {!showFeedback ? (
        <TripForm
          defaultDestination={defaultDestination}
          packageName={packageName}
          onComplete={handleTripFormComplete}
          isModal={false}
        />
      ) : (
        <TripFeedbackForm
          onComplete={handleFeedbackFormComplete}
          initialData={initialData}
          isModal={false}
        />
      )}
    </div>
  );
};

export default InquiryForm;
