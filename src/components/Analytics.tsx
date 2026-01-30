'use client';

import Script from 'next/script';

export default function Analytics() {
  // Google Analytics ID - environment variable'dan al
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    return null; // GA ID yoksa hiçbir şey render etme
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

