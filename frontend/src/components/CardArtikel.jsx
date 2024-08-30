

export default function CardArtikel({ rounded, mb, title, artikel, image, href }) {
  return (
    <>
      <div className={`h-36 flex gap-7 items-center bg-white ml-10 mr-10 ${mb} ${rounded} border-black border-b`}>
        {/* img */}
        <div className="border ml-4 w-32 h-28 rounded-lg ">
          <img src={image} alt="" className="flex rounded-lg object-cover h-full" />
        </div>
        {/* Title */}
        <div className="w-3/4 text-justify gap-2 text-black flex flex-col">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-base">
            {artikel}
          </p>
        </div>
        <a href={href} target="_blank">
          <button className="text-black ml-14 text-xl">
            <i className="fa-solid fa-angle-right ml-2"></i>
          </button>
        </a>
      </div>
    </>
  );
}
