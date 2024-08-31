export default function Card({ color, ml, mt, mb, mr }) {
  return (
    <div
      className={`w-full max-sm:ml-0 max-sm:mr-0 max-sm:w-10/12 max-md:ml-0 max-md:mr-0 max-md:w-10/12 h-44 ${color} ${ml} ${mt} ${mb} ${mr} rounded-xl flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}
    >
      <div className="flex gap-2 items-center mt-5 ">
        {/* img artikel */}
        <div className="border ml-4 w-24 h-28 rounded-lg"></div>
        <div className="w-1/2 text-justify">
          <h3 className="text-2xl font-semibold mb-5">Title</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <button className="text-xs text-right mr-5 mt-4 text-black">Baca selengkapnya
      <i className="fa-solid fa-angle-right ml-2"></i>
      </button>
    </div>
  );
}
