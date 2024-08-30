import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const clickLogin = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/login");
    }, 1100);
  };

  // Cek status login saat komponen dimuat
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Hapus data user dari localStorage
    setIsLoggedIn(false); // Set status login menjadi false
    navigate("/login"); // Arahkan ke halaman login
  };

  const items = [
    {
      label: (
        <span>
          <Link to={"/profile"}>Profile</Link>
        </span>
      ),
      key: "1",
    },
    {
      label: (
        <span>
          <Link to={"/dashboard"}>Dashboard</Link>
        </span>
      ),
      key: "2",
    },
    {
      label: <span onClick={handleLogout}>Logout</span>,
      key: "3",
    },
  ];

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleShopDropdown = () => {
    setShopDropdown(!shopDropdown);
  };

  return (
    <header className="w-full h-16 bg-slate-700">
      <nav className="w-full h-full flex items-center justify-between">
        <div className="flex gap-4 ml-10 text-white">
          <h3>Logo</h3>
          <h3>nama apk</h3>
        </div>
        <div className="flex mr-6 items-center">
          <ul className="flex items-center gap-5 mr-6 text-white max-sm:hidden">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer" onClick={handleDropdown}>
              Data <i className="fa-solid fa-angle-down"></i>
              {dropdown && (
                <ul className="bg-slate-700 absolute top-16 p-2 text-base right-32 text-white flex flex-col gap-2 shadow-[7px_12px_11px_0px_#00000024]">
                  <Link to={"/data-antropometri"}>Data Antropometri</Link>
                  <Link to={"/data-bayi"}>Data Bayi</Link>
                  <Link to={"/data-kehamilan"}>Data Kehamilan</Link>
                </ul>
              )}
            </li>
            <li>
              <Link to={"/artikel"}>Artikel</Link>
            </li>
            <li>
              {isLoggedIn ? (
                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <i className="fa-solid fa-user"></i> Profile
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              ) : (
                <button
                  onClick={clickLogin}
                  className="bg-indigo-400 px-3 py-1 border-white rounded-xl mr-2"
                >
                  Login
                </button>
              )}
            </li>
          </ul>

          {!isLoggedIn && (
            <Link
              to="/login"
              className="bg-indigo-400 px-3 py-1 hidden border-white max-2xl:hidden max-sm:flex rounded-xl mr-2 cursor-pointer"
            >
              Login
            </Link>
          )}
          <button onClick={handleShopDropdown}>
            <i className="fa-solid fa-bars text-white max-2xl:hidden max-sm:flex hidden text-lg"></i>
          </button>
        </div>
      </nav>

      <div
        className={`max-sm:top-16 max-sm:absolute max-sm:bg-slate-700 max-sm:w-full max-sm:h-auto transition-all duration-500 ease-out transform ${
          shopDropdown
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0"
        }`}
      >
        <ul className="max-sm:flex flex-col lg:hidden max-sm:mx-8 max-sm:my-2 max-sm:gap-4 text-white">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer" onClick={handleDropdown}>
            Data <i className="fa-solid fa-angle-down"></i>
            {dropdown && (
              <ul className="bg-slate-700 absolute max-sm:top-20 max-sm:w-full max-sm:p-2 max-sm:px-14 text-base max-sm:left-0 text-white flex flex-col gap-2 shadow-[7px_12px_11px_0px_#00000024]">
                <Link to={"/data-antropometri"}>Data Antropometri</Link>
                <Link to={"/data-bayi"}>Data Bayi</Link>
                <Link to={"/data-kehamilan"}>Data Kehamilan</Link>
              </ul>
            )}
          </li>
          <li>
            <Link to={"/artikel"}>Artikel</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
