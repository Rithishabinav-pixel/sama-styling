import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Sangeeta transformed our wedding into a fairytale. Her attention to detail and creative vision exceeded all our expectations.',
      author: 'Priya & Rahul Sharma',
      role: 'Wedding Clients',
    },
    {
      text: 'The custom fashion pieces designed by Sangeeta are absolutely stunning. She truly understands how to blend tradition with contemporary style.',
      author: 'Meera Kapoor',
      role: 'Fashion Client',
    },
    {
      text: 'Our home has never looked better! Sangeeta\'s décor styling brought warmth and elegance to every corner of our living space.',
      author: 'Anjali Patel',
      role: 'Home Décor Client',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#A88B58] mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-700 text-lg">What our clients say about us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#E8E0D5] p-8 rounded-lg shadow-md"
            >
              <Quote className="w-10 h-10 text-[#A88B58] mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
