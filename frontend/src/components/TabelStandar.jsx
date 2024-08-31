/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function TabelStandar({ option, dataBbU, dataImtU, dataTbU }) {
  const [dataTable, setDataTable] = useState({
    minus_3_sd: null,
    minus_2_sd: null,
    minus_1_sd: null,
    median: null,
    plus_1_sd: null,
    plus_2_sd: null,
    plus_3_sd: null,
  });

  useEffect(() => {
    if (option === "BB/U") {
      setDataTable(dataBbU);
    } else if (option === "TB/U") {
      setDataTable(dataTbU);
    } else if (option === "IMT/U") {
      setDataTable(dataImtU);
    } else {
      setDataTable([]);
    }
  }, [option, dataBbU, dataImtU, dataTbU]);

  console.log(dataTable);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-lg w-full text-center font-semibold mb-3 max-[431px]:text-base">
          {option}
        </h3>
        <ul className="flex text-lg font-semibold border-black border-t border-b">
          <li className="w-20 text-center border-r border-black max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            -3 SD
          </li>
          <li className="w-20 text-center border-r border-black max-md:w-16 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            -2 SD
          </li>
          <li className="w-20 text-center border-r border-black max-md:w-16 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            -1 SD
          </li>
          <li className="w-24 text-center border-r border-black max-md:w-20 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-12">
            Median
          </li>
          <li className="w-20 text-center border-r border-black max-md:w-16 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            +1 SD
          </li>
          <li className="w-20 text-center border-r border-black max-md:w-20 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            +2 SD
          </li>
          <li className="w-20 text-center  border-black max-md:w-16 max-md:text-base max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            +3 SD
          </li>
        </ul>

        <ul className="flex text-lg font-semibold border-black  border-b">
          <li className="w-20 text-center border-r border-black bg-red-600 text-white max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            {dataTable.minus_3_sd}
          </li>
          <li className="w-20 text-center border-r border-black bg-red-600 text-white max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            {dataTable.minus_2_sd}
          </li>
          <li className="w-20 text-center border-r border-black bg-yellow-300 max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            {dataTable.minus_1_sd}
          </li>
          <li className="w-24 text-center border-r border-black bg-green-500 max-md:w-20 max-md:text-base max-sm:w-16 max-sm:text-base max-[431px]:text-xs max-[431px]:w-12">
            {dataTable.median}
          </li>
          <li className="w-20 text-center border-r border-black bg-yellow-300 max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            {dataTable.plus_1_sd}
          </li>
          <li className="w-20 text-center border-r border-black bg-red-600 max-md:w-20 max-md:text-base  max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            {dataTable.plus_2_sd}
          </li>
          <li className="w-20 text-center  border-black bg-red-600 max-md:w-16 max-md:text-base max-sm:w-14 max-sm:text-base max-[431px]:text-xs max-[431px]:w-10">
            {dataTable.plus_3_sd}
          </li>
        </ul>
      </div>
    </>
  );
}
