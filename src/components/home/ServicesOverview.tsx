import { Calendar, Sparkles, Home, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesOverview() {
  const services = [
    {
      icon: Calendar,
      title: 'Event Management',
      description:
        'Expertly curated events that leave lasting impressions, from concept to execution with meticulous attention to every detail.',
    },
    {
      icon: Sparkles,
      title: 'Fashion Design',
      description:
        'Contemporary fashion pieces that blend traditional elegance with modern aesthetics, tailored to your unique style.',
    },
    {
      icon: Home,
      title: 'Home Décor',
      description:
        'Transform your living spaces into personalized sanctuaries that reflect your personality and lifestyle.',
    },
    {
      icon: Gift,
      title: 'Personalized Gifting',
      description:
        'Thoughtfully curated gift concepts that convey your sentiments with elegance and sophistication.',
    },
  ];

  return (
    <section className="py-20 bg-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#A88B58] mb-4">
            Our Services
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all group hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#A88B58]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#A88B58] transition-colors">
                <service.icon className="w-8 h-8 text-[#A88B58] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <Link
            to="/services"
            className="inline-block bg-[#A88B58] text-white px-8 py-3 rounded-full font-medium hover:bg-[#967A4A] transition-colors shadow-md"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
