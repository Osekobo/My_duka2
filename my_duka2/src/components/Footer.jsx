import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } 
from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Social */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-700">WAGGY</h2>
          <p className="text-gray-500 mt-3">
            Subscribe to our newsletter to get updates about our grand offers.
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
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Quick Links</h3>
          <FooterLink>Home</FooterLink>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Offer</FooterLink>
          <FooterLink>Services</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Help Center</h3>
          <FooterLink>FAQs</FooterLink>
          <FooterLink>Payment</FooterLink>
          <FooterLink>Returns & Refunds</FooterLink>
          <FooterLink>Checkout</FooterLink>
          <FooterLink>Delivery Information</FooterLink>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Our Newsletter</h3>
          <p className="text-gray-500 mb-5">
            Subscribe to our newsletter to get updates about our grand offers.
          </p>

          <div className="flex items-center bg-white border rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="flex-1 px-4 py-3 outline-none"
            />
            <button className="bg-yellow-500 text-white p-4">
              <IoSend />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t py-6 text-center text-gray-500">
        © 2023 Waggy. All rights reserved.
      </div>
    </footer>
  );
}




function FooterLink({ children }) {
  return (
    <p className="text-gray-500 mb-2 hover:text-yellow-500 cursor-pointer transition">
      {children}
    </p>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center border rounded-full text-gray-500 hover:bg-yellow-500 hover:text-white transition cursor-pointer">
      {children}
    </div>
  );
}
