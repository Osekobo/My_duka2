import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } 
from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-red-950 mt-20 border-t-2 border-red-800">
      {/* Blood drip effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 shadow-lg shadow-red-500/50"></div>
      
      {/* Subtle skull pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22white%22%3E%3Cpath d=%22M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-2 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z%22/%3E%3C/svg%3E')", backgroundRepeat: "repeat", backgroundSize: "30px" }}></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

        {/* Logo + Social */}
        <div>
          <h2 className="text-3xl font-bold text-red-600 tracking-wider drop-shadow-lg">WAGGY</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Enter the darkness. Subscribe to witness our sinister offers.
          </p>

          <div className="flex gap-3 mt-6">
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaTwitter /></SocialIcon>
            <SocialIcon><FaPinterestP /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
            <SocialIcon><FaYoutube /></SocialIcon>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-4 border-l-4 border-red-700 pl-3">Quick Links</h3>
          <FooterLink>Home</FooterLink>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Offer</FooterLink>
          <FooterLink>Services</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-4 border-l-4 border-red-700 pl-3">Help Center</h3>
          <FooterLink>FAQs</FooterLink>
          <FooterLink>Payment</FooterLink>
          <FooterLink>Returns & Refunds</FooterLink>
          <FooterLink>Checkout</FooterLink>
          <FooterLink>Delivery Information</FooterLink>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-4 border-l-4 border-red-700 pl-3">Our Newsletter</h3>
          <p className="text-gray-400 mb-5 text-sm">
            Subscribe to our newsletter to get updates about our grand offers.
          </p>

          <div className="flex items-center bg-black border border-red-800 rounded-full overflow-hidden shadow-lg shadow-red-900/30">
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="flex-1 px-4 py-3 outline-none bg-black text-gray-300 placeholder-gray-600"
            />
            <button className="bg-red-700 hover:bg-red-600 text-white p-4 transition duration-300">
              <IoSend />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-900 py-6 text-center text-gray-500 text-sm bg-black/50">
        <p>© 2023 Waggy. All rights reserved. | <span className="text-red-700">Enter at your own risk</span></p>
      </div>
    </footer>
  );
}

function FooterLink({ children }) {
  return (
    <p className="text-gray-400 mb-2 hover:text-red-500 cursor-pointer transition duration-300 hover:translate-x-1">
      {children}
    </p>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center border border-red-800 rounded-full text-gray-400 hover:bg-red-700 hover:text-white hover:border-red-600 transition duration-300 cursor-pointer hover:scale-110">
      {children}
    </div>
  );
}