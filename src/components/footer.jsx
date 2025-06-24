// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-[#C7D9D5]  py-10  border-b-2 border-t-2 border-[#102D0B]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-[#e59c61]">TripTide</h2>
          <p className="mt-2  text-[#374151]">
            Your gateway to unforgettable travel experiences. Book trips, explore destinations, and travel stress-free.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#102D0B]">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/hotels" className="hover:text-[#f5b78b] text-[#C5601A]">Home</a></li>
            <li><a href="/aboutus" className="hover:text-[#f5b78b] text-[#C5601A]">About Us</a></li>
            <li><a href="/bookings" className="hover:text-[#f5b78b] text-[#C5601A]">Bookings</a></li>
           
          </ul>
        </div>

        {/* Support
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#102D0B]">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/help" className="hover:text-teal-400">Help Center</a></li>
            <li><a href="/faq" className="hover:text-teal-400">FAQs</a></li>
            <li><a href="/terms" className="hover:text-teal-400">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-teal-400">Privacy Policy</a></li>
          </ul>
        </div> */}

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#102D0B]">Contact Us</h3>
          <p className="text-sm text-[#C5601A]">Email: support@triptide.com</p>
          <p className="text-sm text-[#C5601A]">Phone: +1 (234) 567-8901</p>
         
        </div>
      </div>

      <div className="text-center text-sm text-[#102D0B] mt-10 border-t border-[#102D0B] pt-4">
        &copy; {new Date().getFullYear()} TripTide. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
