import { Link } from 'react-router-dom';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img
              src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sangeeta Khorana"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#A88B58] mb-6 leading-tight">
              Who is Sangeeta Khorana
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              A visionary creative entrepreneur with a passion for transforming ordinary
              moments into extraordinary experiences. With years of expertise in event
              management, fashion design, and styling, Sangeeta brings a unique blend of
              artistry and precision to every project.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Her work is characterized by attention to detail, a deep understanding of
              aesthetics, and a commitment to creating memorable experiences that reflect
              her clients' unique personalities and visions.
            </p>
            <Link
              to="/about"
              className="inline-block border-2 border-[#A88B58] text-[#A88B58] px-8 py-3 rounded-full font-medium hover:bg-[#A88B58] hover:text-white transition-all"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
