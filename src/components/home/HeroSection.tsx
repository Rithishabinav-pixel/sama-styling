import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920)',
      }}
    >
      <div className="text-center text-white px-4 max-w-4xl" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Sangeeta Khorana
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Crafting Elegance Through Creativity & Style
        </p>
        <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Event Management | Fashion Design | Home Décor | Personalized Gifting
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#A88B58] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#967A4A] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Let's Create Together
        </Link>
      </div>
    </section>
  );
}
