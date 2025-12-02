'use client';
import { ToastContainer } from 'react-toastify';
import useIsMobile from '@/hooks/useIsMobile';
export default function TripToastContainer() {
  const isMobile = useIsMobile();
  return (
    <ToastContainer
      position={isMobile ? 'bottom-center' : 'top-right'}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{ zIndex: 11000 }}
    />
  );
}
