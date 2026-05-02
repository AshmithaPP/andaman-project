import HeroSection from '@/components/home/HeroSection';
import ExploreServices from '@/components/home/ExploreServices';
import PremiumAdsSection from '@/components/home/PremiumAdsSection';
import MarketPlaceSection from '@/components/home/MarketPlaceSection';
import ResortSection from '@/components/home/ResortSection';
import JobsSection from '@/components/home/JobsSection';
import FaqSection from '@/components/home/FaqSection';
import ContactSection from '@/components/home/ContactSection';
import NewsSection from '@/components/home/NewsSection';
import AdSection from '@/components/home/AdSection';


export default function Home() {
  const heroImages = [
    '/images/hero1F.png',
    '/images/hero-2.png',
    '/images/hero-3.png',
    '/images/hero-4.png',
    '/images/hero-5.png',
  ];

  return (
    <main>
      <HeroSection images={heroImages} />
      <ExploreServices />
      <PremiumAdsSection />
      <MarketPlaceSection />
      <ResortSection />
      <JobsSection />
      <NewsSection/>
      <ContactSection/> 
      <AdSection/>
       <FaqSection />
      {/* Additional sections like MarketPlace, etc. will go here */}
      {/* <div style={{ height: '500px' }}></div>  */}
    </main>
  );
}
