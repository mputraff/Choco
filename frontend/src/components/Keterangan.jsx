export default function Keterangan({ image, alt, p1, p2 }) {
    return (
        <>
            <div className="flex flex-col h-80 w-44 gap-3 my-5 mx-20 max-sm:items-center max-sm:mx-2 max-sm:my-0 text-white ">
                <div className="flex h-40 max-sm:h-32 max-sm:w-32 ">
                    <img src={image} alt={alt} className="flex " />
                </div>
                <div className="text-center max-sm:text-base">
                    <p>{p1}</p>
                    <p>{p2}</p>
                </div>
            </div>
        </>
    )
}