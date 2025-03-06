import './globals.css'; // Optional: For global styles if needed
import Head from 'next/head';
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer';

export const metadata = {
  title: 'Sangamesh Myageri | Innovative Web Developer',
  description: 'Discover the portfolio of Sangamesh Myageri, a skilled web developer creating cutting-edge digital experiences. View projects, skills, and contact details.',
  keywords: 'Sangamesh Myageri, Web Developer, Portfolio, Web Design, Development, Projects, Contact, Innovative Solutions',
  author: 'Sangamesh Myageri',
  robots: 'index, follow',
  canonical: 'https://sangameshmyageri.in/',
  openGraph: {
    title: 'Sangamesh Myageri | Innovative Web Developer',
    description: 'Explore Sangamesh Myageri’s portfolio, showcasing expertise in web development with innovative digital solutions. Contact me for collaborations!',
    image: 'https://sangameshmyageri.in/static/media/profile-Photoroom.20fe4cda75cfad026dd5.jpg',
    url: 'https://sangameshmyageri.in/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sangamesh Myageri | Innovative Web Developer',
    description: 'Check out Sangamesh Myageri’s portfolio for stunning web development projects and innovative digital experiences.',
    image: 'https://sangameshmyageri.in/static/media/profile-Photoroom.20fe4cda75cfad026dd5.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}