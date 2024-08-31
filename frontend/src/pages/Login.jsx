import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import loginImg from "../assets/img/Login.png";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
import ButtonSign from "../components/ButtonSign.jsx";
import Loading from "../components/Loading"; // Import Loading

import { useAuth } from "../hooks/useAuth.jsx";

export default function Login() {
  const [SignInOrSignUp, setSignInOrSignUp] = useState("Sign In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [handphone_number, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State untuk Loading

  const { login } = useAuth();
  
  const navigate = useNavigate();
  
  const handleClickSignInorSignUp = (name) => {
    setSignInOrSignUp(name);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api-web-stunting.up.railway.app/api/v1/auth/register", {
        name,
        email,
        password,
        handphone_number,
      });
      console.log(response.data);
      alert("Sign Up Success");

      window.localStorage.setItem("user", JSON.stringify({
        name,
        email,
        handphone_number,
      }));

    } catch (error) {
      console.error("Error during sign up", error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api-web-stunting.up.railway.app/api/v1/auth/login", {
        email,
        password,
      });

      // console.log(response.data.data);

      login(response.data.data);
    
      setIsLoading(true); // Tampilkan loading saat login berhasil

      // window.localStorage.setItem("user", JSON.stringify(response.data.data))

      setTimeout(() => {
        setIsLoading(false); // Sembunyikan loading setelah 3 detik
        navigate('/'); // Navigasi ke halaman utama setelah loading selesai
      }, 3000); // 3000 ms = 3 detik

    } catch (error) {
      console.error("Error during sign in", error);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0 z-50">
          <Loading /> {/* Tampilkan komponen Loading di tengah-tengah layar */}
        </div>
      )}
      {!isLoading && (
        <div className="container-login h-screen w-full">
          <nav className="bg-white w-full h-16 justify-between flex items-center p-6 text-black border-b border-black">
            <div className="flex gap-5">
              <h3>Logo</h3>
              <h2>Nama apk</h2>
            </div>
            <Link to={"/"} className="bg-indigo-400 px-6 py-1 border-white rounded-xl">
              Back
            </Link>
          </nav>

          <div className="box-login w-full flex h-screen bg-slate-800 justify-center items-center">
            <div className="form-login w-1/2 flex flex-col justify-center text-white items-center max-lg:w-2/4">
              {SignInOrSignUp === "Sign In" && (
                <h3 className="text-3xl  max-lg:flex max-sm:text-2xl">Silahkan Login Akun!</h3>
              )}

              {SignInOrSignUp === "Sign Up" && (
                <h3 className="text-3xl max-sm:text-2xl">Silahkan Daftar Akun!</h3>
              )}
              <div className="Sign flex gap-8 mt-4 mb-3">
                <Button
                  name="Sign In"
                  onclick={() => handleClickSignInorSignUp("Sign In")}
                />
                <Button
                  name="Sign Up"
                  onclick={() => handleClickSignInorSignUp("Sign Up")}
                />
              </div>
              {SignInOrSignUp === "Sign In" && (
                <form onSubmit={handleSignIn} className="SignIn w-1/2 text-center max-lg:w-full">
                  <Input
                    type="email"
                    icon="fa-solid fa-envelope"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    icon="fa-solid fa-key"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="w-full text-sm mt-2">Lupa Password?</button>
                  
                  <ButtonSign child="Sign In" width={"w-full"}  type={"submit"}/>
                </form>
              )}

              {SignInOrSignUp === "Sign Up" && (
                <form onSubmit={handleSignUp} className="SignUp w-1/2 max-lg:w-full ">
                  <label htmlFor="" className="ml-4">
                    Nama Lengkap
                  </label>
                  <Input
                    icon="fa-solid fa-user"
                    placeholder="Username"
                    type={"text"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="" className="ml-4">
                    No Telp
                  </label>
                  <Input
                    icon="fa-solid fa-phone"
                    placeholder="Nomor Handphone"
                    type={"text"}
                    value={handphone_number}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label htmlFor="" className="ml-4">
                    Email
                  </label>
                  <Input
                    icon="fa-solid fa-envelope"
                    placeholder="Email"
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="" className="ml-4">
                    Password
                  </label>
                  <Input
                    icon="fa-solid fa-key"
                    placeholder="Password"
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <ButtonSign child="Sign Up" width={"w-full"} type={"submit"}/>
                </form>
              )}
            </div>

            <div className="img-login h-4/6 flex max-lg:hidden">
              <img className="" src={loginImg} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
