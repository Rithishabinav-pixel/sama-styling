import { Calendar, Sparkles, Home, Gift } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Calendar,
      title: 'Event Management Consulting',
      image: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'From intimate gatherings to grand celebrations, we orchestrate every detail to create unforgettable experiences.',
      features: [
        'Wedding planning and coordination',
        'Corporate events and launches',
        'Social gatherings and parties',
        'Venue selection and decoration',
        'Vendor management and coordination',
        'Timeline and budget planning',
      ],
    },
    {
      icon: Sparkles,
      title: 'Contemporary Fashion Design',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Bespoke fashion pieces that blend traditional craftsmanship with modern aesthetics, tailored to your unique style.',
      features: [
        'Custom bridal and occasion wear',
        'Contemporary ethnic designs',
        'Personal styling consultations',
        'Fabric selection and sourcing',
        'Fitting and alterations',
        'Wardrobe planning',
      ],
    },
    {
      icon: Home,
      title: 'Home Décor Styling',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Transform your living spaces into personalized sanctuaries that reflect your personality and enhance your lifestyle.',
      features: [
        'Complete home makeovers',
        'Room-by-room styling',
        'Color scheme consultation',
        'Furniture selection and placement',
        'Accessory curation',
        'Space optimization',
      ],
    },
    {
      icon: Gift,
      title: 'Personalized Gifting Concepts',
      image: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description:
        'Thoughtfully curated and customized gifts that convey your sentiments with elegance and sophistication.',
      features: [
        'Custom gift hampers',
        'Corporate gifting solutions',
        'Wedding favors and return gifts',
        'Personalized packaging',
        'Themed gift collections',
        'Special occasion gifts',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center text-white px-4" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive creative solutions for your every need</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`mb-20 last:mb-0 ${index % 2 === 1 ? 'bg-[#E8E0D5]' : ''} ${
                index % 2 === 1 ? 'py-16 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8' : ''
              }`}
            >
              <div
                className={`grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div
                  data-aos="fade-right"
                  className={index % 2 === 1 ? 'md:order-2' : ''}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                  />
                </div>

                <div
                  data-aos="fade-left"
                  className={index % 2 === 1 ? 'md:order-1' : ''}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#A88B58] rounded-full flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-[#A88B58]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#A88B58] rounded-full mt-2"></div>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#E8E0D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-serif font-bold text-[#A88B58] mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Each service is tailored to your specific needs and vision. Get in touch to
            discuss how we can bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#A88B58] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#967A4A] transition-all shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
