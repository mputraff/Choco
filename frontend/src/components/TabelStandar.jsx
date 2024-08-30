export default function TabelStandar() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-lg w-full text-center font-semibold mb-3">Berat Badan (Kg)</h3>
                <ul className="flex text-lg font-semibold border-black border-t border-b">
                    <li className="w-20 text-center border-r border-black">-3 SD</li>
                    <li className="w-20 text-center border-r border-black">-2 SD</li>
                    <li className="w-20 text-center border-r border-black">-1 SD</li>
                    <li className="w-24 text-center border-r border-black">Median</li>
                    <li className="w-20 text-center border-r border-black">+1 SD</li>
                    <li className="w-20 text-center border-r border-black">+2 SD</li>
                    <li className="w-20 text-center  border-black">+3 SD</li>
                </ul>

                <ul className="flex text-lg font-semibold border-black  border-b">
                    <li className="w-20 text-center border-r border-black bg-red-600 text-white">2.1</li>
                    <li className="w-20 text-center border-r border-black bg-red-600 text-white">2.5</li>
                    <li className="w-20 text-center border-r border-black bg-yellow-300">2.9</li>
                    <li className="w-24 text-center border-r border-black bg-green-500 ">3.3</li>
                    <li className="w-20 text-center border-r border-black bg-yellow-300">3.9</li>
                    <li className="w-20 text-center border-r border-black bg-red-600">4.4</li>
                    <li className="w-20 text-center  border-black bg-red-600">5.0</li>
                </ul>
                
            </div>
        </>
    )
}