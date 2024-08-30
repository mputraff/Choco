export default function JudulDataTabel({data1,data2,data3,data4,data5,transparent}) {
    return (
        <>
            <tr className={`flex h-11 w-full items-center text-lg text-white font-light`}>
                <th className={`${transparent} px-5`}>{data1}</th>
                <th className="p-2 bg-pink-600 ">{data2}</th>
                <th className="p-2 bg-gray-600">{data3}</th>
                <th className="p-2 bg-gray-600">{data4}</th>
                <th className="p-2 bg-gray-600 rounded-tr-lg">{data5}</th>
            </tr>
        </>
    )
} 