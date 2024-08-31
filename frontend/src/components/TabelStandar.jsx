export default function TabelStandar() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-lg w-full text-center font-semibold mb-3 max-[431px]:text-base">Berat Badan (Kg)</h3>
                <ul className="flex text-lg font-semibold border-black border-t border-b">
                    <li className="w-20 text-center border-r border-black max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">-3 SD</li>
                    <li className="w-20 text-center border-r border-black max-md:w-16 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">-2 SD</li>
                    <li className="w-20 text-center border-r border-black max-md:w-16 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">-1 SD</li>
                    <li className="w-24 text-center border-r border-black max-md:w-20 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-12">Median</li>
                    <li className="w-20 text-center border-r border-black max-md:w-16 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">+1 SD</li>
                    <li className="w-20 text-center border-r border-black max-md:w-20 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">+2 SD</li>
                    <li className="w-20 text-center  border-black max-md:w-16 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">+3 SD</li>
                </ul>

                <ul className="flex text-lg font-semibold border-black  border-b">
                    <li className="w-20 text-center border-r border-black bg-red-600 text-white max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">2.1</li>
                    <li className="w-20 text-center border-r border-black bg-red-600 text-white max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">2.5</li>
                    <li className="w-20 text-center border-r border-black bg-yellow-300 max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">2.9</li>
                    <li className="w-24 text-center border-r border-black bg-green-500 max-md:w-20 max-md:text-base max-sm:w-16 max-sm:text-base max-[431px]:text-xs max-[431px]:w-12">3.3</li>
                    <li className="w-20 text-center border-r border-black bg-yellow-300 max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">3.9</li>
                    <li className="w-20 text-center border-r border-black bg-red-600 max-md:w-20 max-md:text-base  max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">4.4</li>
                    <li className="w-20 text-center  border-black bg-red-600 max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">5.0</li>
                </ul>
                
            </div>
        </>
    )
}