'use client';

import React, { useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { usePathname } from 'next/navigation';
import { useCaptureUTM } from '@/hooks/useCaptureUTM';
import DatePicker from '@/components/form/DatePicker';

// ✅ Validation Schema
const validationSchema = Yup.object().shape({
  guestName: Yup.string().required('Name is required'),
  guestMobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, 'Please enter a valid mobile number')
    .required('Mobile number is required'),
  destinations: Yup.string().required('Destination is required'),
  plannedTravelDate: Yup.string().required('Planned travel date is required'),
  adults: Yup.number()
    .required('Number of adults is required')
    .min(1, 'At least one adult is required'),
  source_domain: Yup.string().required(),
  packageName: Yup.string().optional(),
});

interface TripFormData {
  guestName: string;
  guestMobile: string;
  destinations: string;
  plannedTravelDate: string;
  source_domain: string;
  packageName?: string;
  adults: number;
  [key: string]: unknown;
}

interface TripFormProps {
  defaultDestination?: string;
  packageName: string;
  onComplete: (formData: Record<string, any>) => void;
  onClose?: () => void;
  isModal: boolean;
}

const destinationMap: Record<string, string> = {
  bali: 'Bali',
  dubai: 'Dubai',
  europe: 'Europe',
  thailand: 'Thailand',
  singapore: 'Singapore',
  malaysia: 'Malaysia',
  vietnam: 'Vietnam',
  australia: 'Australia',
  japan: 'Japan',
  hongkong: 'Hong Kong',
  maldives: 'Maldives',
  mauritius: 'Mauritius',
  bhutan: 'Bhutan',
  himachal: 'Himachal',
  kerala: 'Kerala',
  bangkok: 'Bangkok',
  baku: 'Baku',
  turkey: 'Turkey',
};

const TripForm: React.FC<TripFormProps> = ({
  defaultDestination,
  packageName,
  onComplete,
  onClose,
  isModal,
}) => {
  const { firstUTM, lastUTM } = useCaptureUTM();
  const pathname = usePathname();

  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
    .toISOString()
    .split('T')[0];

  const pathSegments = pathname.split('/').filter(Boolean);
  const destinationSlug = defaultDestination?.toLowerCase() || pathSegments[0]?.toLowerCase() || '';
  const mappedDestination = destinationMap[destinationSlug] || '';

  const methods = useForm<TripFormData>({
    resolver: yupResolver(validationSchema) as Resolver<TripFormData>,
    defaultValues: {
      guestName: '',
      guestMobile: '',
      adults: 2,
      destinations: mappedDestination,
      packageName: packageName || '',
      plannedTravelDate: '',
      source_domain: typeof window !== 'undefined' ? window.location.hostname : '',
      ...firstUTM,
      ...lastUTM,
    },
    mode: 'onChange',
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = methods;

  useEffect(() => {
    if (defaultDestination) setValue('destinations', mappedDestination);
  }, [defaultDestination, mappedDestination, setValue]);

  useEffect(() => {
    if (packageName) setValue('packageName', packageName);
  }, [packageName, setValue]);

  const onSubmit: SubmitHandler<TripFormData> = async (data) => {
    try {
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'tripInquirySubmitted',
          formData: data,
          source_domain: data.source_domain,
        });
      }
      onComplete(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormProvider {...methods}>
      <div
        className={`${
          isModal
            ? 'fixed inset-0 z-[9999] flex items-start sm:items-center justify-center bg-black bg-opacity-50 p-0'
            : ''
        }`}
        role={isModal ? 'dialog' : undefined}
        aria-modal={isModal ? 'true' : undefined}
        aria-labelledby="trip-form-title"
      >
        <div className="relative w-full h-full sm:h-auto sm:max-w-2xl bg-white sm:rounded-2xl text-gray-900 overflow-hidden shadow-xl">
          {/* Top Bar: Close + Title */}
          {isModal && (
            <div className="sticky top-0 z-20 flex justify-between items-center p-4 bg-white sm:rounded-t-2xl border-b border-gray-100">
              <h2 id="trip-form-title" className="text-[#376941] text-xl font-bold">
                Plan Your Trip
              </h2>

              <button
                onClick={onClose}
                aria-label="Close Trip Form"
                title="Close Trip Form"
                className="
    text-gray-400 hover:text-gray-900
    text-3xl sm:text-4xl
    font-extrabold
    focus:outline-none focus:ring-2 focus:ring-[#376941]
    transition-all duration-150 ease-in-out
  "
              >
                ×
              </button>
            </div>
          )}

          {/* Form Scrollable Area */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="px-4 pt-4 pb-24 sm:p-8 space-y-5 overflow-y-auto h-[calc(100%-70px)] sm:h-auto"
          >
            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 md:gap-6">
              {/* Name */}
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  {...register('guestName')}
                  placeholder="Your full name"
                  aria-label="Full name"
                  className={`w-full p-3 border rounded bg-white text-gray-900 placeholder-gray-400 ${
                    errors.guestName ? 'border-red-500' : 'border-gray-200 focus:border-[#376941]'
                  }`}
                />
                {errors.guestName && (
                  <p className="text-red-500 text-sm pt-1">{errors.guestName.message}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block mb-2 text-sm font-medium">Contact Number</label>
                <input
                  type="tel"
                  {...register('guestMobile')}
                  placeholder="10-digit mobile number"
                  aria-label="Mobile number"
                  maxLength={10}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').slice(0, 10);
                  }}
                  className={`w-full p-3 border rounded bg-white text-gray-900 placeholder-gray-400 ${
                    errors.guestMobile ? 'border-red-500' : 'border-gray-200 focus:border-[#376941]'
                  }`}
                />
                {errors.guestMobile && (
                  <p className="text-red-500 text-sm pt-1">{errors.guestMobile.message}</p>
                )}
              </div>

              {/* Destination */}
              <div>
                <label className="block mb-2 text-sm font-medium">Destination</label>
                <input
                  {...register('destinations')}
                  disabled={!!mappedDestination}
                  placeholder="Where do you want to go?"
                  aria-label="Destination"
                  className={`w-full p-3 border rounded bg-white text-gray-900 placeholder-gray-400 disabled:bg-gray-100 disabled:text-gray-500 ${
                    errors.destinations ? 'border-red-500' : 'border-gray-200 focus:border-[#376941]'
                  }`}
                />
                {errors.destinations && (
                  <p className="text-red-500 text-sm pt-1">{errors.destinations.message}</p>
                )}
              </div>

              {/* Package */}
              {isModal && packageName && (
                <div>
                  <label className="block mb-2 text-sm font-medium">Package</label>
                  <input
                    {...register('packageName')}
                    disabled={!!packageName}
                    placeholder="Package Name"
                    aria-label="Package name"
                    className="w-full p-3 border border-gray-200 focus:border-[#376941] rounded bg-black text-white placeholder-gray-400 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>
              )}

              {/* Travel Date */}
              <div>
                <label className="block mb-2 text-sm font-medium">Travel Date</label>
                <DatePicker
                  register={register('plannedTravelDate')}
                  todayDate={todayDate}
                  onChange={(val) =>
                    methods.setValue('plannedTravelDate', val, { shouldValidate: true })
                  }
                />
                {errors.plannedTravelDate && (
                  <p className="text-red-500 text-sm pt-1">{errors.plannedTravelDate.message}</p>
                )}
              </div>
            </div>
          </form>

          {/* Bottom Bar: Next Button */}
          {/* Bottom Sticky Button for Modal or Mobile */}
          <div
            className={`sticky bottom-0 p-4 z-20 ${
              isModal ? 'bg-white sm:rounded-b-2xl border-t border-gray-100' : 'bg-transparent'
            }`}
          >
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              onClick={handleSubmit(onSubmit)}
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                isSubmitting || !isValid
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#376941] text-white hover:bg-[#2a5032] active:scale-[0.98]'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default TripForm;
