import Content from '../components/content';

export const metadata = {
  title: 'ABS Digital Daksh | Luxury Photography & Cinematography Studio',
  description:
    'Capturing life’s most extraordinary moments with art and heart — wedding, pre-wedding, event, maternity & product photography house.',
  alternates: {
    canonical: 'https://absdigitaldaksh.com',
  },
};

export default function HomePage(props) {
  return <Content {...props} />;
}
