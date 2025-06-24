import { Edit3, Lock } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#F5F9F8] p-6 text-[#133352]">
      {/* Profile Card */}
      <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="https://i.pinimg.com/736x/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-[#E47C47] font-serif">Aisha N</h2>
              <p className="text-sm text-[#A4BD79]">@91aishan</p>
            </div>
            <button className="flex items-center text-sm bg-[#C7D9D5] px-3 py-1 rounded hover:bg-[#A4BD79] hover:text-white transition">
              <Edit3 className="w-4 h-4 mr-1" />
              Edit profile
            </button>
          </div>

          <div className="flex gap-6 mt-4 text-sm">
            <div>
              <span className="font-semibold">0</span> Contributions
            </div>
            <div>
              <span className="font-semibold">0</span> Followers
            </div>
            <div>
              <span className="font-semibold">0</span> Following
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Panels */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Achievements */}
        <div className="bg-[#C7D9D5] rounded shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-[#E47C47]">Your Achievements</h3>
          <p className="text-sm text-[#133352] mb-4">Start sharing to unlock</p>

          {/* Locked Milestones */}
          <div className="space-y-4">
            {["Write your first review", "Upload your first photo"].map((label, index) => (
              <div
                key={index}
                className="flex items-center border border-[#A4BD79] rounded p-3 text-sm hover:bg-[#A4BD79]/20 transition"
              >
                <Lock className="w-5 h-5 mr-3 text-[#E47C47]" />
                <div>
                  <p className="font-medium">{label}</p>
                  <p className="text-xs text-[#133352]">
                    Unlock {label.toLowerCase().includes("review") ? "review" : "photo"} milestones
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fill Out Your Profile */}
        <div className="bg-[#C7D9D5] rounded shadow p-6 text-center flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2 text-[#E47C47]">Fill Out Your Profile</h3>
          <p className="text-sm text-[#133352]">
            Add photos and info to your profile so people can find you easily and get to know you better!
          </p>
        </div>
      </div>
    </div>
  );
}
