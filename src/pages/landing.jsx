import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-16 py-10 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/photos/airplane.jpg')" }}
    >
      {/* Top Section - Title and Subtitle */}
      <div className="mt-10 text-center sm:mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight font-serif drop-shadow break-words">
          Discover the World with{" "}
          <span className="text-[#FFBD00]">TripTide</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#00366D] font-serif font-semibold drop-shadow max-w-2xl mx-auto">
          Plan, book, and explore your dream destinations. Seamless travel starts here.
        </p>
      </div>

      {/* Bottom Section - Button */}
      <div className="text-center mb-10 sm:mb-16">
        <Link
          to="/login"
          className="bg-yellow-300 text-blue-900 font-bold py-3 px-8 text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:bg-yellow-400 transition"
        >
          Login to Get Started
        </Link>
      </div>
    </section>
  );
}

export default Home;
