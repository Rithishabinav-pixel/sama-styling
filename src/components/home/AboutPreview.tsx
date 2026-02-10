import { Link } from 'react-router-dom';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img
              src="/src/assets/hp_about.png"
              alt="Sangeeta Khorana"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#A88B58] mb-6 leading-tight">
              Designs Guided by Emotions
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At SAMA, everything starts with a feeling. You might not always know exactly how you want something to look, but you usually know how you want it to feel. That’s where the work begins. Through fashion designing, event styling, and thoughtful details, SAMA creates experiences that feel considered, personal, and quietly unforgettable. The approach is rooted in listening, shaped by Sangeeta Khorana’s background in scientific research and her lifelong love for textiles and design. With clarity, care, and emotion guiding every decision, design here is never about perfection, but about creating moments and pieces that truly feel right.

            </p>
            
            <Link
              to="/about"
              className="inline-block border-2 border-[#A88B58] text-[#A88B58] px-8 py-3 rounded-full font-medium hover:bg-[#A88B58] hover:text-white transition-all"
            >
              Discover SAMA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
