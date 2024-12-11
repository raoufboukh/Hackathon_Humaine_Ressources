import { useState } from "react";
import Dashboard from "./Dashboard";

function Profile() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section className="flex bg-lightPurple min-h-screen">
      {/* Sidebar */}
      <Dashboard />

      {/* Main Content */}
      <div className="flex-1 flex justify-center py-10">
        <div className="w-[78%] bg-lightPurple">
          <h1 className="font-black text-3xl text-darkText mb-10">Profile</h1>

          {/* Profile Section */}
          <div className="flex items-center gap-8">
            {/* Profile Picture */}
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full overflow-hidden shadow-md">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="mt-4 text-buttonColor font-semibold hover:underline">
                Change Profile Picture
              </button>
            </div>

            {/* Profile Details */}
            <div className="flex flex-col gap-4 w-full">
              {/* First Name and Last Name */}
              <div className="flex gap-4">
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="flex-1 p-4 bg-white rounded-lg shadow outline-none"
                />

                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="flex-1 p-4 bg-white rounded-lg shadow outline-none"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="p-4 bg-white rounded-lg shadow outline-none"
              />

              {/* Phone Number */}
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="p-4 bg-white rounded-lg shadow outline-none"
              />

              {/* Position */}
              <input
                type="text"
                value="IOT Developer"
                placeholder="Position"
                className="p-4 bg-gray-300 text-gray-600 rounded-lg shadow outline-none"
                readOnly
              />

              {/* Role */}
              <input
                type="text"
                value="Employer"
                placeholder="Role"
                className="p-4 bg-gray-300 text-gray-600 rounded-lg shadow outline-none"
                readOnly
              />

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-6">
                <button className="bg-buttonColor px-5 py-2 rounded-3xl cursor-pointer hover:bg-transparent hover:text-black transition-all duration-300 ease-in-out border-4 border-buttonColor text-white">
                  Save
                </button>
                <button className="border-4 border-buttonColor hover:text-white hover:bg-buttonColor transition-all duration-300 px-5 py-2 rounded-3xl">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
