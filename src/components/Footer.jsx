export default function Footer() {
  return (
    <footer className="w-full h-80 max-sm:h-auto bg-slate-300 ">
      {/* Pembungkus */}
      <div className="w-full h-full flex gap-28 max-sm:flex-col max-sm:gap-0">
        {/* address */}
        <div className="flex flex-col w-1/4 ml-10 gap-5 mt-7 max-sm:w-2/3">
          <h2 className="text-2xl font-semibold w-full ">Information</h2>
          <p className="text-justify">
            Jl. A.H. Nasution No.105, Cipadung Wetan, Kec. Cibiru, Kota Bandung,
            Jawa Barat 40614
          </p>
          <p>Email : webantistunting@gmail.com</p>
          <p>Phone : +62 823 - 2425 - 2627</p>
        </div>

        {/* contact */}
        <div className="flex flex-col gap-5 mt-7 max-sm:ml-10">
          <h2 className="text-2xl font-semibold w-full ">More to Explore</h2>
          <ul className="flex flex-col gap-3">
            <li>About Us</li>
            <li>Our Services</li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div className="flex flex-col gap-5 mt-7 max-sm:ml-10 max-sm:mb-10">
          <h2 className="text-2xl font-semibold w-full ">Our Social Media</h2>
          <ul className="flex gap-4">
            <li>
              <i className="fa-brands fa-facebook text-lg cursor-pointer"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter text-lg cursor-pointer"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram text-lg cursor-pointer"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
