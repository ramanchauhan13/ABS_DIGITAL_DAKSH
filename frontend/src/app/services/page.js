import Services from '../../components/Services';

export const metadata = {
  title: 'Photography Packages & Services | ABS Digital Daksh',
  description:
    'Explore photography and film packages for weddings, pre-wedding films, maternity shoots, events, product shoots, and custom photo albums. Instant price estimator available.',
  alternates: {
    canonical: 'https://absdigitaldaksh.com/services',
  },
  openGraph: {
    title: 'Photography Packages & Pricing | ABS Digital Daksh',
    description: 'Explore tailored wedding, pre-wedding, and event photography packages.',
    url: 'https://absdigitaldaksh.com/services',
  },
};

export default function ServicesPage(props) {
  return <Services {...props} />;
}
