export default function IsiDataTabel({ data1, data2, data3, data4, bg, rounded, data5 }) {
    return (
        <>
            <tr className={`flex h-12 items-center text-lg ${bg} font-light ${rounded}`}>
                <th className="w-32 ml-2 mr-1">{data1}</th>
                <th className="w-40 ml-1">{data2}</th>
                <th className="w-40 ml-2">{data3}</th>
                <th className="w-44 ml-4 ">{data4}</th>
                <th className="w-44 ml-4 ">{data5}</th>
            </tr>
        </>
    )
}