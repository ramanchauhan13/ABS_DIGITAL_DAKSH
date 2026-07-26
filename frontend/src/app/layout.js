import './globals.css';
import Providers from './providers';

export const metadata = {
  metadataBase: new URL('https://absdigitaldaksh.com'),
  title: {
    default: 'ABS Digital Daksh | Luxury Photography & Cinematography Studio',
    template: '%s | ABS Digital Daksh',
  },
  description:
    'Premier wedding, pre-wedding, maternity, event, and product photography studio. Capturing life’s most precious moments with art, heart, and 4K cinematography.',
  keywords: [
    'wedding photography',
    'pre-wedding shoot',
    'maternity photography',
    'event photography',
    'product photography',
    'drone cinematography',
    'luxury photo albums',
    'ABS Digital Daksh',
    'Daksh Photography Studio',
  ],
  authors: [{ name: 'ABS Digital Daksh' }],
  creator: 'ABS Digital Daksh',
  publisher: 'ABS Digital Daksh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://absdigitaldaksh.com',
  },
  openGraph: {
    title: 'ABS Digital Daksh | Luxury Photography & Cinematography Studio',
    description:
      'Capturing life’s most extraordinary moments with art and heart — one frame at a time.',
    url: 'https://absdigitaldaksh.com',
    siteName: 'ABS Digital Daksh',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'ABS Digital Daksh Photography Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABS Digital Daksh | Luxury Photography Studio',
    description: 'Premier Wedding, Pre-Wedding, & Event Photography Studio.',
    images: ['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ABS Digital Daksh',
  image: 'https://absdigitaldaksh.com/assets/image.jpg',
  '@id': 'https://absdigitaldaksh.com',
  url: 'https://absdigitaldaksh.com',
  telephone: '+919876543210',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sector 18 Commercial Hub',
    addressLocality: 'Main City',
    addressRegion: 'State',
    postalCode: '110001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.6139,
    longitude: 77.209,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '09:00',
    closes: '21:00',
  },
  sameAs: [
    'https://instagram.com',
    'https://facebook.com',
    'https://youtube.com',
    'https://pinterest.com',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        {/* FontAwesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* JSON-LD Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#08080a] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 antialiased overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
