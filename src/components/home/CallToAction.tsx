import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#A88B58] mb-6 leading-tight">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Let's collaborate to create something extraordinary. Whether it's an event,
          fashion piece, home transformation, or a special gift, we're here to make it
          happen.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#A88B58] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#967A4A] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
