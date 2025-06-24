import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="fixed inset-0 bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/photos/login.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white/20 border border-white/30 backdrop-blur-3xl shadow-2xl p-10 rounded-3xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#C5601A] drop-shadow mb-6">
          Join TripTide
        </h2>

        {error && <p className="text-red-300 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5 text-white">
          <div className="text-[#102d0b] font-medium space-y-4">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 rounded-xl bg-white/10 text-[#485361] border border-[#E47C47] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 rounded-xl bg-white/10 text-[#485361]  border border-[#E47C47] focus:outline-none focus:ring-2 focus:ring-[#F4A261] pr-10"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-[#102D0B]"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>
          </div>

          <a
            href="/hotels"
            className="w-full bg-[#F4A261]/90 hover:bg-[#F4A261] text-[#054457] py-2 rounded-xl font-semibold transition inline-block text-center"
          >
            Login
          </a>
        </form>

        <p className="mt-4 text-center text-sm text-[#102D0B]">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#054457] hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
