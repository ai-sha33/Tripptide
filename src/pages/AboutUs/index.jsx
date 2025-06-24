import { motion } from "framer-motion";
import {
  Users,
  MapPin,
  Plane,
  Headphones,
  ShieldCheck,
  Compass,
  Lightbulb,
  Sparkles,
  Rocket,
  BadgeCheck,
} from "lucide-react";

const AboutUs = () => {
  const stats = [
    { label: "Happy Travelers", value: "1M+", icon: Users },
    { label: "Destinations", value: "120+", icon: MapPin },
    { label: "Partner Airlines", value: "300+", icon: Plane },
    { label: "Support 24/7", value: "Yes", icon: Headphones },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Transparency",
      desc: "We show you all the options, hidden fees and all—so you can book with full confidence.",
    },
    {
      icon: Compass,
      title: "Empowerment",
      desc: "We give you the tools to choose the best trip for your style, budget, and timing.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We use smart technology to bring you real-time travel intelligence and deals.",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Curated Experiences",
      desc: "Handpicked itineraries crafted by travel experts to create unforgettable journeys.",
    },
    {
      icon: Rocket,
      title: "Fast Booking",
      desc: "Book your trip in minutes with our easy-to-use and blazing-fast platform.",
    },
    {
      icon: BadgeCheck,
      title: "Trusted Partners",
      desc: "Collaborations with only the most reliable airlines, hotels, and guides.",
    },
  ];

  return (
    <div className="text-[#072450] px-6 sm:px-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Discover the World with Triptide
          </h1>
          <motion.p
            className="text-lg sm:text-xl text-[#E47C47] font-serif mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Making travel simple, beautiful, and unforgettable.
          </motion.p>
          <motion.p
            className="text-md sm:text-lg font-serif text-[#E47C47]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            At Triptide, we don’t just help you get from point A to B — we help you craft experiences that stay with you for a lifetime. Whether you're chasing sunsets, culture, cuisine, or calm, our platform brings the world to your fingertips with trusted partners, real-time insights, and seamless booking.
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://i.pinimg.com/736x/81/37/86/81378668e50748a559443c8d6919701e.jpg"
            alt="Travel Hero"
            className="w-full h-full shadow-lg object-cover rounded-3xl mt-5"
          />
        </motion.div>
      </div>

      {/* Mission & Vision Section */}
      <section className="pt-0 pb-0 px-6 sm:px-12 mt-10 flex flex-col items-center gap-12">
        {/* Mission */}
        <motion.div
          className="w-full max-w-4xl bg-[#A4BD79] text-center py-12 px-8 rounded-[100px] shadow-lg border border-[#E47C47]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[#072450]">Our Mission</h2>
          <p className="text-lg text-gray-700 italic">
            At Triptide, we're passionate about unlocking the joy of travel. We help adventurers and dreamers discover the best deals, routes, and experiences — stress-free.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="w-full max-w-4xl bg-[#A4BD79] mb-10 text-center py-12 px-8 rounded-[100px] shadow-lg border border-[#E47C47]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[#072450]">Our Vision</h2>
          <p className="text-lg text-gray-700 italic">
            To be the world’s most traveler-friendly platform, where planning and booking your dream journey feels as exciting as the destination itself.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="mb-5 bg-[#D16F4C]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-16">
          {stats.map(({ label, value, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <Icon className="w-8 h-8 mx-auto text-[#E47C47] mb-2" />
              <div className="text-3xl font-extrabold text-[#A4BD79]">{value}</div>
              <div className="text-sm font-medium text-[#072450]">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-5 rounded-full bg-[#A4BD79] px-6 sm:px-12">
        <div className="max-w-5xl mx-auto text-center py-16">
          <h2 className="text-3xl font-bold mb-8 font-serif">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {values.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <Icon className="h-8 w-8 text-[#E47C47] mb-2" />
                <h3 className="text-xl font-semibold mb-2 text-[#072450]">{title}</h3>
                <p className="text-gray-700 italic">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#D16F4C] rounded-full text-white sm:px-12 mb-10">
        <div className="max-w-5xl mx-auto text-center py-16">
          <h2 className="text-3xl font-bold font-serif text-[#072450] mb-8">Why Choose Triptide?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {features.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <Icon className="h-8 w-8 text-[#E47C47] mb-2" />
                <h3 className="text-xl font-semibold mb-2 text-[#072450]">{title}</h3>
                <p className="text-[#072450] italic">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
