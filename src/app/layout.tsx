'use client';

import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContactButton from '@/components/contact/FloatingContactButton';
import TripToastContainer from '@/components/shared/TripToastContainer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideLayout = pathname?.startsWith('/video'); // 👈 hide header/footer for /video route

  return (
    <html lang="en">
      <head>
        {/* ✅ Google Webmaster Verification */}
        {/* <meta name="google-site-verification" content="YOUR_WEBMASTER_VERIFICATION_CODE" /> */}

        {/* ✅ Favicon */}
        <link rel="icon" type="image/x-icon" href="/Fevico.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/Fevico.ico" />
        <link rel="apple-touch-icon" href="/Fevico.ico" />

        {/* ✅ Meta Tags */}
        <meta name="robots" content="index, follow" />

        {/* ✅ Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NPNHWWKV');
            `,
          }}
        />
      </head>
      <body className="antialiased font-primary">
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NPNHWWKV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* ✅ Conditional Layout */}
        {!hideLayout && <Header />}
        <TripToastContainer />

        <main className={!hideLayout ? 'min-h-screen pt-[71px] md:pt-[86px]' : 'min-h-screen'}>
          {children}
        </main>

        {!hideLayout && <Footer />}
        {/* {!hideLayout && <FloatingContactButton />} */}
      </body>
    </html>
  );
}
