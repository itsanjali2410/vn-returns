'use client';

import { useForm, FormProvider, SubmitHandler, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter, usePathname } from 'next/navigation';

import { useCaptureUTM } from '@/hooks/useCaptureUTM';
import DatePicker from '@/components/form/DatePicker';
import InquiryForm from '../modals/InquiryForm';

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
});

interface TripFormData {
  guestName: string;
  guestMobile: string;
  destinations: string;
  plannedTravelDate: string;
  source_domain: string;
  adults: number;
  [key: string]: unknown;
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

const TripInquiryForm: React.FC = () => {
  const { firstUTM, lastUTM } = useCaptureUTM();
  const router = useRouter();
  const pathname = usePathname();

  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
    .toISOString()
    .split('T')[0];

  // ✅ Extract destination from URL
  const pathSegments = pathname.split('/').filter(Boolean);
  const destinationSlug = pathSegments[0]?.toLowerCase() || '';
  const mappedDestination = destinationMap[destinationSlug] || '';

  const methods = useForm<TripFormData>({
    resolver: yupResolver(validationSchema) as Resolver<TripFormData>,
    defaultValues: {
      guestName: '',
      guestMobile: '',
      destinations: mappedDestination,
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
    formState: { errors, isSubmitting, isValid },
  } = methods;

  const onSubmit: SubmitHandler<TripFormData> = (data) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'tripInquirySubmitted',
        formData: data,
        source_domain: data.source_domain,
      });
    }

    router.push('/trip-details-followup');
  };

  return (
    <div className=" bg-black flex items-center justify-center px-4 py-16 ">
      <InquiryForm />
    </div>
  );
};

export default TripInquiryForm;
