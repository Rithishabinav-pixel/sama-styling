import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import GalleryPreview from '../components/home/GalleryPreview';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesOverview />
      <Testimonials />
      <GalleryPreview />
      <CallToAction />
    </>
  );
}
