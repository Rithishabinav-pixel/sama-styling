import { Link } from 'react-router-dom';

export default function GalleryPreview() {
  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Events',
    },
    {
      url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Fashion',
    },
    {
      url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Home Décor',
    },
    {
      url: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Gifting',
    },
    {
      url: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Events',
    },
    {
      url: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Home Décor',
    },
  ];

  return (
    <section className="py-20 bg-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#A88B58] mb-4">
            Our Work
          </h2>
          <p className="text-gray-700 text-lg">
            A glimpse into our creative projects and designs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="relative group overflow-hidden rounded-lg shadow-md aspect-square"
            >
              <img
                src={image.url}
                alt={image.category}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium text-lg">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <Link
            to="/gallery"
            className="inline-block bg-[#A88B58] text-white px-8 py-3 rounded-full font-medium hover:bg-[#967A4A] transition-colors shadow-md"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
