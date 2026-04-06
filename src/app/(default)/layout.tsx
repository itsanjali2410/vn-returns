import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TripToastContainer from '@/components/shared/TripToastContainer';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <TripToastContainer />
      <main className="min-h-screen pt-[71px] md:pt-[86px]">{children}</main>
      <Footer />
    </>
  );
}
