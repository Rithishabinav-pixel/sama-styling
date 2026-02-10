import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#E8E0D5] text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#A88B58] mb-4">
              SAMA Styling
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Crafting elegant experiences through event management, fashion design,
              home décor, and personalized gifting.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#A88B58] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-[#A88B58] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#A88B58] mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#A88B58]" />
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-[#A88B58]" />
                <span>info@samastyling.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#A88B58]" />
                <span>India</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#A88B58] hover:bg-[#A88B58] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#A88B58] hover:bg-[#A88B58] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#A88B58] hover:bg-[#A88B58] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8 text-center text-sm">
          <p>&copy; {currentYear} SAM Styling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
