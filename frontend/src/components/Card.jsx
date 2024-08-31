/* eslint-disable react/prop-types */
export default function Card({ color, ml, mt, mb, mr, title, image, link }) {
  return (
    <div
      className={`w-full max-sm:ml-0 max-sm:mr-0 max-sm:w-10/12 max-md:ml-0 max-md:mr-0 max-md:w-10/12 h-52 ${color} ${ml} ${mt} ${mb} ${mr} rounded-xl flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}
    >
      <div className="flex gap-2 items-center mt-5 ">
        {/* img artikel */}
        <div className="border-none ml-4 w-24 h-32 content-center rounded-lg">
          <img src={image} alt="" />
        </div>
        <div className="w-1/2 text-justify">
          <h3 className="font-semibold mb-2">{title}</h3>
        </div>
      </div>
      <button className="text-xs text-right mr-5 mt-4 text-black">
        <a href={link}>
          Baca selengkapnya
          <i className="fa-solid fa-angle-right ml-2"></i>
        </a>
      </button>
    </div>
  );
}
