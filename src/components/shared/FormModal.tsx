'use client';

import { useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter, usePathname } from 'next/navigation';
import { useCaptureUTM } from '@/hooks/useCaptureUTM';
import DatePicker from '@/components/form/DatePicker';

// ✅ Global typing for GTM dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

// ✅ Validation Schema
const validationSchema = Yup.object().shape({
  guestName: Yup.string().required('Name is required'),
  guestMobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, 'Please enter a valid mobile number')
    .required('Mobile number is required'),
  destinations: Yup.string().required('Destination is required'),
  adults: Yup.number()
    .required('Number of adults is required')
    .min(1, 'At least one adult is required'),
  plannedTravelDate: Yup.string().required('Planned travel date is required'),
  source_domain: Yup.string().required(),
  packageName: Yup.string().required('Package name is required'),
});

interface TripFormData {
  guestName: string;
  guestMobile: string;
  destinations: string;
  plannedTravelDate: string;
  source_domain: string;
  adults: number;
  packageName: string;
  [key: string]: unknown;
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestination?: string;
  packageName: string;
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

const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  defaultDestination,
  packageName,
}) => {
  const { firstUTM, lastUTM } = useCaptureUTM();
  const router = useRouter();
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
      destinations: mappedDestination,
      packageName: packageName || '',
      adults: 2,
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

  // ✅ Dynamically update fields when props change
  useEffect(() => {
    if (defaultDestination) {
      setValue('destinations', mappedDestination);
    }
  }, [defaultDestination, mappedDestination, setValue]);

  useEffect(() => {
    if (packageName) {
      setValue('packageName', packageName);
    }
  }, [packageName, setValue]);

  const onSubmit: SubmitHandler<TripFormData> = (data) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'tripInquirySubmitted',
        formData: data,
        source_domain: data.source_domain,
      });
    }

    // router.push("/trip-details-followup");
    // onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-full max-w-2xl bg-[#111] border-2 border-[#ffc42d] rounded-lg p-8 text-white sm:p-6 faisal">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-lg font-bold hover:text-gray-400"
        >
          &times;
        </button>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2 className="text-center mb-8 text-[#ffc42d] text-2xl font-bold sm:text-xl sm:mb-6">
              Plan Your Trip
            </h2>

            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 md:gap-6">
              {/* Name */}
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  {...register('guestName')}
                  placeholder="Your full name"
                  className="w-full p-3 border border-[#ffc42d] rounded bg-black text-white placeholder-gray-400"
                />
                {errors.guestName && (
                  <p className="text-red-500 text-sm pt-1">{errors.guestName.message}</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="block mb-2 text-sm font-medium">Contact Number</label>
                <input
                  type="tel"
                  {...register('guestMobile')}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').slice(0, 10);
                  }}
                  className="w-full p-3 border border-[#ffc42d] rounded bg-black text-white placeholder-gray-400"
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
                  className="w-full p-3 border border-[#ffc42d] rounded bg-black text-white placeholder-gray-400 disabled:bg-gray-800 disabled:text-gray-500"
                />
                {errors.destinations && (
                  <p className="text-red-500 text-sm pt-1">{errors.destinations.message}</p>
                )}
              </div>

              {/* Package */}
              <div>
                <label className="block mb-2 text-sm font-medium">Package</label>
                <input
                  {...register('packageName')}
                  disabled={!!packageName}
                  placeholder="Package Name"
                  className="w-full p-3 border border-[#ffc42d] rounded bg-black text-white placeholder-gray-400 disabled:bg-gray-800 disabled:text-gray-500"
                />
              </div>

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

            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-full py-3 bg-[#ffc42d] text-white font-bold rounded hover:bg-[#d97706] transition disabled:bg-gray-600 disabled:text-gray-400"
            >
              {isSubmitting ? 'Sending...' : 'Next'}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default FormModal;
