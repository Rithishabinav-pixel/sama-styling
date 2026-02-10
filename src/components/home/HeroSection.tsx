import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section
      className="relative hp_hero_banner h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./src/images/hero_banner.png)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="text-center mt-20 text-white px-4 max-w-7xl" data-aos="fade-up">
        <h1 className="text-5xl text-[#A88B58] md:text-9xl font-serif font-bold mb-6 leading-tight">
          Styling Beyond the Ordinary
        </h1>
        <p className="text-xl md:text-3xl mb-8 font-normal leading-relaxed">
          Beauty Is Thoughtfully Crafted Here
        </p>
        <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          SAMA curates immersive custom fashion and event styling, focusing on atmosphere, emotion, and the details that make moments unforgettable.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#A88B58] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#967A4A] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
         Style My Event
        </Link>
      </div>
    </section>
  );
}
