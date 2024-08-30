export default function Keterangan({ image, alt, p1, p2 }) {
    return (
        <>
            <div className="flex flex-col h-80 w-44 gap-3 text-white ">
                <div className="flex h-40">
                    <img src={image} alt={alt} className="flex " />
                </div>
                <div className="text-center">
                    <p>{p1}</p>
                    <p>{p2}</p>
                </div>
            </div>
        </>
    )
}