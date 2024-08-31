// import jwt from "jsonwebtoken";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ComponentProfile from "../components/ComponentProfile";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const [editProfile, setEditProfile] = useState(false);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [handphone_number, setHandphoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const { userInfo } = useAuth();

  console.log(userInfo);

  useEffect(() => {
    const storedUser = window.localStorage.getItem("authState");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log(parsedUser);
        

        setUser(parsedUser);
        setName(parsedUser.name || "");
        setHandphoneNumber(parsedUser.handphoneNumber || "");
        setEmail(parsedUser.email || "");
      } catch (error) {
        console.error("Failed to parse user data:", error);
        setUser({});
      }
    }
  }, []);

  const handleSaveProfile = () => {
    const updatedUser = {
      name,
      handphone_number,
      email,
    };

    window.localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditProfile(false); // Tutup form edit profil setelah menyimpan
  };

  return (
    <>
      <Navbar />
      <section className="w-full h-screen bg-slate-600 flex items-center justify-center">
        <div className="flex flex-col w-5/6 h-5/6 bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] items-center justify-center gap-6">
          {/* img profile */}
          <div className="flex flex-col w-full items-center gap-3">
            <i className="fa-solid fa-user text-5xl p-11 text-center rounded-full text-white bg-slate-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"></i>
            <button
              onClick={() => setEditProfile(!editProfile)}
              className="font-semibold text-xl text-blue-500"
            >
              Edit Profile
            </button>
          </div>
          {/* name, phone, email profile */}
          <div className="w-5/6 flex flex-col h-auto items-center">
            <ComponentProfile
              icon="fa-solid fa-user"
              nameIcon="Name"
              name={user.name}
            />
            <ComponentProfile
              icon="fa-solid fa-phone"
              nameIcon="Phone"
              name={user.handphone_number}
            />
            <ComponentProfile
              icon="fa-solid fa-envelope"
              nameIcon="Email"
              name={user.email}
            />
          </div>
        </div>

        {/* edit profile */}
        {editProfile && (
          <div className="w-7/12 absolute flex-col flex items-center bg-white h-4/6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h3 className="font-semibold text-2xl mt-12 ">Edit Profile</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveProfile();
              }}
              className="flex flex-col w-full gap-5 h-full justify-center"
            >
              <div className="flex w-full gap-24 justify-center">
                <label htmlFor="" className="text-xl font-semibold ">
                  Name :{" "}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex w-3/6 outline-none border border-gray-300 px-2 focus:border-gray-400"
                />
              </div>
              <div className="flex w-full gap-11 justify-center">
                <label htmlFor="" className="text-xl font-semibold ">
                  Handphone :
                </label>
                <input
                  type="text"
                  value={handphone_number}
                  onChange={(e) => setHandphoneNumber(e.target.value)}
                  className="flex w-3/6 outline-none border border-gray-300 px-2 focus:border-gray-400"
                />
              </div>
              <div className="flex w-full gap-24 justify-center">
                <label htmlFor="" className="text-xl font-semibold ">
                  Email :{" "}
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex w-3/6 outline-none border border-gray-300 px-2 focus:border-gray-400"
                />
              </div>
              <div className="flex w-full justify-center mt-6">
                <button
                  type="submit"
                  className="flex items-center text-center justify-center w-2/4 bg-blue-500 text-lg text-white font-semibold px-4 py-2 rounded-xl"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
