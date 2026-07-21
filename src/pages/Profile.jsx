import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Camera, User } from "lucide-react";

const defaultProfile = {
  name: "",
  email: "",
  phone: "",
  location: "",
  occupation: "",
  company: "",
  website: "",
  bio: "",
  avatar: "",
};

const Profile = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("flowdesk-profile");

    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile((prev) => ({
        ...prev,
        avatar: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem(
      "flowdesk-profile",
      JSON.stringify(profile)
    );

    toast.success("Profile updated successfully!");
  };

  const fields = [
    profile.name,
    profile.email,
    profile.phone,
    profile.location,
    profile.occupation,
    profile.company,
    profile.website,
    profile.bio,
  ];

  const completed = fields.filter(
  (item) => (item ?? "").trim() !== ""
).length;

  const percentage = Math.round(
    (completed / fields.length) * 100
  );

  return (
    <div className="max-w-5xl mx-auto p-6">

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your personal information.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-8">

        <div className="flex flex-col items-center">

          <div
            onClick={() => fileInputRef.current.click()}
            className="relative cursor-pointer group"
          >
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500"
              />
            ) : (
              <div className="w-36 h-36 rounded-full bg-slate-200 flex items-center justify-center">
                <User size={70} />
              </div>
            )}

            <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <Camera className="text-white" size={34} />
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept="image/*"
            onChange={handleImage}
          />

          <p className="mt-3 text-sm text-slate-500">
            Click photo to change
          </p>

        </div>

        <div className="mt-10">

          <div className="flex justify-between mb-2">
            <span className="font-medium">
              Profile Completion
            </span>

            <span>{percentage}%</span>
          </div>

          <div className="h-3 bg-slate-200 rounded-full">
            <div
              className="h-3 bg-indigo-600 rounded-full"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-10">

          <input
            className="border rounded-lg p-3"
            placeholder="Full Name"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />

          <input
            className="border rounded-lg p-3"
            placeholder="Email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />

          <input
            className="border rounded-lg p-3"
            placeholder="Phone"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />

          <input
            className="border rounded-lg p-3"
            placeholder="Location"
            name="location"
            value={profile.location}
            onChange={handleChange}
          />

          <input
            className="border rounded-lg p-3"
            placeholder="Occupation"
            name="occupation"
            value={profile.occupation}
            onChange={handleChange}
          />

          <input
            className="border rounded-lg p-3"
            placeholder="Company"
            name="company"
            value={profile.company}
            onChange={handleChange}
          />

          <input
            className="border rounded-lg p-3 md:col-span-2"
            placeholder="Website"
            name="website"
            value={profile.website}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            className="border rounded-lg p-3 md:col-span-2"
            placeholder="Tell us about yourself..."
            name="bio"
            value={profile.bio}
            onChange={handleChange}
          />

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={handleSave}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium"
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;