import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-10 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold main-text-color">KachaPapad.pk</h2>
          <p className="text-[#6f4e20] mt-3 text-sm leading-relaxed">
            Freshly crafted kacha papads prepared with authentic traditional recipes.
            Crunchy, tasty & made with love.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FAB85F] text-white hover:bg-[#FD8E36] transition shadow-md"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FAB85F] text-white hover:bg-[#FD8E36] transition shadow-md"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FAB85F] text-white hover:bg-[#FD8E36] transition shadow-md"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold main-text-color mb-3">Quick Links</h3>
          <ul className="space-y-2 text-[#6f4e20]">
            <li className="hover:text-[#D86F1A] cursor-pointer">Home</li>
            <li className="hover:text-[#D86F1A] cursor-pointer">Shop</li>
            <li className="hover:text-[#D86F1A] cursor-pointer">About Us</li>
            <li className="hover:text-[#D86F1A] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold main-text-color mb-3">Categories</h3>
          <ul className="space-y-2 text-[#6f4e20]">
            <li className="hover:text-[#D86F1A] cursor-pointer">Pipe Papad</li>
            <li className="hover:text-[#D86F1A] cursor-pointer">Ring Papad</li>
            <li className="hover:text-[#D86F1A] cursor-pointer">Slanty Papad</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold main-text-color mb-3">Contact Us</h3>
          <ul className="space-y-2 text-[#6f4e20] text-sm">
            <li>Email: support@kachapapad.pk</li>
            <li>Phone: +92 300 1234567</li>
            <li>Location: Karachi, Pakistan</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-[#6f4e20] mt-10 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold main-text-color">KachaPapad.pk</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
