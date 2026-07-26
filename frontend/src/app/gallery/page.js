import Gallery from '../../components/Gallery';

export const metadata = {
  title: 'Portfolio Gallery & Lightbox | ABS Digital Daksh',
  description:
    'Browse our curated gallery of royal destination weddings, romantic pre-wedding shoots, maternity portraits, galas, and commercial photography.',
  alternates: {
    canonical: 'https://absdigitaldaksh.com/gallery',
  },
  openGraph: {
    title: 'Portfolio Gallery | ABS Digital Daksh Photography',
    description: 'Explore breathtaking photography stories and high-resolution Lightbox visuals.',
    url: 'https://absdigitaldaksh.com/gallery',
  },
};

export default function GalleryPage(props) {
  return <Gallery {...props} />;
}
