'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
  API_URL,
  BEARER_TOKEN,
  BOOKING_TIMES,
  BUDGETS,
  CITIES,
  LANGUAGES,
  MONTHS,
  OCCASIONS,
  PACKAGES,
} from '@/constant';
import { FormSelect } from '@/components/form/FormSelect';
import { sanitizeData } from '@/utils/sanitizeData';
import { useCaptureUTM } from '@/hooks/useCaptureUTM';
import { useRouter } from 'next/navigation'; // App Router
interface TripFeedbackFormProps {
  onComplete: () => void;
  initialData: Record<string, string>;
  isModal: boolean;
}

const TripFeedbackForm: React.FC<TripFeedbackFormProps> = ({
  onComplete,
  initialData,
  isModal,
}) => {
  const { firstUTM, lastUTM } = useCaptureUTM();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState<Record<string, string>>({
    preferred_language: '',
    when_are_you_looking_to_book: '',
    is_there_any_special_occasion_for_your_trip: '',
    choose_your_departure_city: '',
    preferred_travel_month: '',
    choose_your_destination_and_budget_including_flights: '',
    what_is_your_overall_budget: '',
    ...firstUTM,
    ...lastUTM,
  });

  // ✅ Track whether all required fields are filled
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const requiredFields = [
      'preferred_language',
      'when_are_you_looking_to_book',
      'is_there_any_special_occasion_for_your_trip',
      'choose_your_departure_city',
      'preferred_travel_month',
      'choose_your_destination_and_budget_including_flights',
      'what_is_your_overall_budget',
    ];
    const allFilled = requiredFields.every((key) => form[key] && form[key].trim() !== '');
    setIsValid(allFilled);
  }, [form]);

  const totalSteps = Object.keys(form).length;
  const filledSteps = Object.values(form).filter((val) => val !== '').length;
  const progressPercent = Math.round((filledSteps / totalSteps) * 100);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return; // Prevent submission if not all fields are filled

    setIsSubmitting(true);

    const sanitized = sanitizeData({
      ...initialData,
      ...form,
      ...firstUTM,
      ...lastUTM,
    });

    try {
      await axios.post(`${API_URL}`, sanitized, {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
      });

      // toast(
      //   <div className="flex flex-col">
      //     <strong className="text-lg text-black mb-1">🎉 Thank You</strong>
      //     <span className="text-sm text-black">
      //       Your message has been successfully sent to our team. We’ll get back to you shortly!
      //     </span>
      //   </div>
      // );
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'tripFollowUpSubmitted',
        source_domain: window.location.hostname,
        formData: sanitized,
      });

      // router.push('/thankyou');
      window.location.href = '/thankyou';
      onComplete();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${
        isModal
          ? 'fixed inset-0 z-[9999] flex items-start sm:items-center justify-center bg-neutral-900 bg-opacity-70 p-0'
          : ''
      }`}
    >
      <div
        className={`
          relative w-full h-full sm:h-auto sm:max-w-2xl
          bg-neutral-900 sm:rounded-2xl
          text-white overflow-hidden
        `}
      >
        {/* Top Bar: Close + Progress */}
        {isModal && (
          <div className="sticky top-0 bg-neutral-900 z-20 flex items-center justify-between p-4 sm:rounded-t-2xl gap-1">
            {/* Progress Bar */}
            <div className="flex-1 ml-0 h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {/* Close Button */}
            {/* <button
              onClick={onComplete}
              className="text-gray-400 hover:text-white text-3xl sm:text-3xl"
            >
              ×
            </button> */}
          </div>
        )}

        {/* Form Content */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 px-4 pt-4 pb-24 sm:pb-8 overflow-y-auto h-[calc(100%-80px)] sm:h-auto"
        >
          <FormSelect
            name="is_there_any_special_occasion_for_your_trip"
            label="Is there any special occasion for your trip?"
            options={OCCASIONS}
            onChange={handleChange}
            required
          />
          <FormSelect
            name="choose_your_departure_city"
            label="Choose your departure city"
            options={CITIES}
            onChange={handleChange}
            required
          />
          <FormSelect
            name="preferred_travel_month"
            label="Preferred travel month"
            options={MONTHS}
            onChange={handleChange}
            required
          />
          <FormSelect
            name="preferred_language"
            label="Preferred language for communication"
            options={LANGUAGES}
            onChange={handleChange}
            required
          />
          <FormSelect
            name="when_are_you_looking_to_book"
            label="When are you looking to book?"
            options={BOOKING_TIMES}
            onChange={handleChange}
            required
          />
          <FormSelect
            name="choose_your_destination_and_budget_including_flights"
            label="Choose your destination and budget (including flights)"
            options={PACKAGES}
            onChange={handleChange}
            required
          />
          <FormSelect
            name="what_is_your_overall_budget"
            label="What is your overall budget?"
            options={BUDGETS}
            onChange={handleChange}
            required
          />
        </form>

        {/* Submit Button Fixed at Bottom */}
        <div className="sticky bottom-0 bg-neutral-900 p-4 sm:rounded-b-2xl z-20">
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            onClick={handleSubmit}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              isSubmitting || !isValid
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-[#ffc42d] text-white hover:bg-[#d97706] active:scale-[0.98]'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TripFeedbackForm;
