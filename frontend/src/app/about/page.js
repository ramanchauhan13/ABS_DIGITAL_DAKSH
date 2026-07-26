import About from '../../components/About';

export const metadata = {
  title: 'About Studio & Gear Arsenal | ABS Digital Daksh',
  description:
    'Learn about ABS Digital Daksh creative director Daksh, our studio philosophy, and professional 4K/8K camera gear arsenal.',
  alternates: {
    canonical: 'https://absdigitaldaksh.com/about',
  },
  openGraph: {
    title: 'About ABS Digital Daksh Studio',
    description: 'Boutique photography house preserving memories for generations.',
    url: 'https://absdigitaldaksh.com/about',
  },
};

export default function AboutPage(props) {
  return <About {...props} />;
}
