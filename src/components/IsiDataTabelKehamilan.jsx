export default function IsiDataTabel({trimester, value1, value2, value3, value4, value5, value6, value7, value8, bg}) {
    return (
        <>
            <tr className={`flex h-16 w-full items-center ${bg}  text-black font-light`}>
                <th className="flex items-center text-xl justify-center w-36 mx-2 text-[#5649AB]">{trimester}</th>
                <th className="flex items-center text-lg justify-center w-24">{value1}</th>
                <th className="flex items-center text-lg justify-center w-24 ml-5 ">{value2}</th>
                <th className="flex items-center text-lg justify-center w-28 ml-5">{value3}</th>
                <th className="flex items-center text-lg justify-center w-20 ml-9">{value4}</th>
                <th className="flex items-center text-lg justify-center w-20 ml-10">{value5}</th>
                <th className="flex items-center text-lg justify-center w-24 ml-10">{value6}</th>
                <th className="flex items-center text-lg justify-center w-24 ml-8">{value7}</th>
                <th className="flex items-center text-lg justify-center w-24 ml-6">{value8}</th>
            </tr>
        </>
    )
}