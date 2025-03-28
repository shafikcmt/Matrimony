import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1C1F2A] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 mt-2">Stay updated with latest matches and features</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent flex-1 md:w-64"
              />
              <button className="bg-accent hover:bg-accent/90 px-6 py-2 rounded-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-accent mb-6">HEAVENLY MATCH</h2>
            <p className="text-gray-400 mb-6">
              Connecting hearts, creating lasting relationships. Your trusted platform for finding meaningful connections.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-blue-500 hover:scale-110 transition cursor-pointer" />
              <Twitter className="w-6 h-6 text-sky-400 hover:scale-110 transition cursor-pointer" />
              <Instagram className="w-6 h-6 text-pink-500 hover:scale-110 transition cursor-pointer" />
              <Youtube className="w-6 h-6 text-red-500 hover:scale-110 transition cursor-pointer" />
              <Linkedin className="w-6 h-6 text-blue-600 hover:scale-110 transition cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'How It Works', 'Premium Members', 'Success Stories'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-accent transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {['Help Center', 'Safety Tips', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-accent transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>1329 40th St Apt A Orlando, FL</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+01-321-200-6932</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>support@heavenlymatch.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Globe className="w-5 h-5 text-accent shrink-0" />
                <span>www.heavenlymatch.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Heavenly Match. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-accent text-sm">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-accent text-sm">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-accent text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
