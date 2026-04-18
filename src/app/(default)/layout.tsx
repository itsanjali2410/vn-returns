import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TripToastContainer from '@/components/shared/TripToastContainer';
import FloatingContactButton from '@/components/contact/FloatingContactButton';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <TripToastContainer />
      <main className="min-h-screen pt-[92px] md:pt-[108px]">{children}</main>
      <Footer />
      <FloatingContactButton />
    </>
  );
}
