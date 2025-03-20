import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1C1F2A] text-white py-12">
      <div className="container mx-auto px-6">
        
        {/* Top Section */}
        <div className="text-center mb-10">
          <h2 className="text-accent cursor-pointer text-3xl font-bold">
            HEAVENLY MATCH
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl mx-auto leading-relaxed">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born 
            and I will give you a complete account of the system...
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-accent pt-8">
          
          {/* Contacts */}
          <div>
            <h3 className="text-accent cursor-pointer font-bold text-lg">CONTACTS</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li>
                <span className="font-semibold">📍 Address:</span> <br />
                1329 40th St Apt A Orlando, FL
              </li>
              <li>
                <span className="font-semibold">🌐 Website:</span> <br />
                www.envato.com
              </li>
              <li>
                <span className="font-semibold">✉️ Email:</span> <br />
                support@envato.com
              </li>
              <li>
                <span className="font-semibold">📞 Phone:</span> <br />
                +01-321-200-6932 <br />
                +01-321-200-6933
              </li>
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="text-accent cursor-pointer font-bold text-lg">MAIN MENU</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="hover:text-accent cursor-pointer transition">Home</li>
              <li className="hover:text-accent cursor-pointer transition">How It Works</li>
              <li className="hover:text-accent cursor-pointer transition">Premium Members</li>
              <li className="hover:text-accent cursor-pointer transition">Packages</li>
              <li className="hover:text-accent cursor-pointer transition">Real Reviews</li>
            </ul>
          </div>

          {/* Quick Search */}
          <div>
            <h3 className="text-accent cursor-pointer font-bold text-lg">QUICK SEARCH</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="hover:text-accent cursor-pointer transition">All Members</li>
              <li className="hover:text-accent cursor-pointer transition">Premium Members</li>
              <li className="hover:text-accent cursor-pointer transition">Free Members</li>
              <li className="hover:text-accent cursor-pointer transition">Search</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-accent cursor-pointer font-bold text-lg">USEFUL LINKS</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="hover:text-accent cursor-pointer transition">FAQ</li>
              <li className="hover:text-accent cursor-pointer transition">Terms & Conditions</li>
              <li className="hover:text-accent cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-accent cursor-pointer transition">Request a Refund</li>
            </ul>
          </div>

        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <Facebook className="text-blue-500 w-8 h-8 cursor-pointer hover:scale-110 transition" />
          <Twitter className="text-sky-400 w-8 h-8 cursor-pointer hover:scale-110 transition" />
          <Instagram className="text-accent w-8 h-8 cursor-pointer hover:scale-110 transition" />
          <Youtube className="text-red-500 w-8 h-8 cursor-pointer hover:scale-110 transition" />
          <Linkedin className="text-blue-600 w-8 h-8 cursor-pointer hover:scale-110 transition" />
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm mt-10 border-t border-accent pt-4">
          ©2025 heavenlymatch.com | Trademarks and brands are the property of their respective owners.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
