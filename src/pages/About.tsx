export default function About() {
  return (
    <div className="bg-white">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <h1
          className="text-5xl md:text-6xl font-serif font-bold text-white"
          data-aos="fade-up"
        >
          About Sangeeta Khorana
        </h1>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div data-aos="fade-right">
              <img
              src="./src/images/hp_about.png"
              alt="Sangeeta Khorana"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            </div>

            <div data-aos="fade-left">
              <h2 className="text-5xl font-serif font-bold text-[#A88B58] mb-6">
                A Passion for Creative Excellence
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Sangeeta Khorana is a multi-disciplinary creative professional whose work
                spans the realms of event management, fashion design, home décor, and
                personalized gifting. With a keen eye for aesthetics and an unwavering
                commitment to excellence, she has built a reputation for transforming
                visions into reality.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Her journey in the creative industry began with a deep-rooted passion for
                design and a desire to create meaningful experiences. Over the years, she
                has honed her skills and developed a unique approach that blends
                traditional elegance with contemporary innovation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every project is approached with meticulous attention to detail, ensuring
                that each element contributes to a cohesive and memorable outcome. Her
                work is not just about aesthetics—it's about creating experiences that
                resonate on a deeper level.
              </p>
            </div>
          </div>

          <div className="bg-[#E8E0D5] rounded-lg p-12 mb-20" data-aos="fade-up">
            <h2 className="text-5xl font-serif font-bold text-[#A88B58] mb-8 text-center">
              The SAM Styling Journey
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              SAM Styling was born from a vision to bring together diverse creative
              disciplines under one roof. The name represents more than just a brand—it's
              a commitment to excellence, creativity, and personalized service.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With a partnership in India, SAM Styling has expanded its reach and
              capabilities, allowing for a broader range of services and access to unique
              resources. This collaboration has enabled the creation of truly exceptional
              experiences for clients across various domains.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From intimate gatherings to grand celebrations, from bespoke fashion pieces
              to complete home transformations, SAM Styling approaches each project with
              fresh eyes and a dedication to exceeding expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
            <div className="text-center p-8">
              <div className="text-4xl font-serif font-bold text-[#A88B58] mb-2">10+</div>
              <p className="text-gray-700 font-medium">Years of Experience</p>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl font-serif font-bold text-[#A88B58] mb-2">100+</div>
              <p className="text-gray-700 font-medium">Successful Projects</p>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl font-serif font-bold text-[#A88B58] mb-2">50+</div>
              <p className="text-gray-700 font-medium">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E8E0D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-5xl font-serif font-bold text-[#A88B58] mb-6">
            Creative Philosophy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            "Every project is an opportunity to create something extraordinary. I believe
            in listening deeply to my clients' needs and translating their dreams into
            tangible, beautiful realities. Whether it's a wedding, a fashion collection,
            or a home makeover, the goal is always the same: to create experiences that
            inspire and delight."
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            - Sangeeta Khorana
          </p>
        </div>
      </section>
    </div>
  );
}
