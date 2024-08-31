/* eslint-disable react/prop-types */
import Solusi from "../components/SolusiDataAntro";
import GrafikAntropometri from "../components/GrafikAntropometri";
import Bayi from "../assets/img/Bayi.png";
import Chart from "../chart/Piechart";
import TabelStandar from "./TabelStandar";

export default function HasilDataAntro({ data }) {
  if (!data) {
    return <p>No data available.</p>;
  }

  // console.log(data);

  return (
    <div className="h-auto flex bg-slate-300 mx-10 rounded-xl my-10">
      <div className="w-full m-10 flex flex-col">
        <title className="flex items-center gap-4">
          <img src={Bayi} alt="" className="w-32" />
          <h3 className="text-2xl w-full font-semibold">
            Hasil Data Antropometri Anak
          </h3>
        </title>
        <div className="w-full h-auto flex items-center">
          <article className="flex flex-col w-full h-full items-center gap-16 mt-24">
            <div className="flex w-8/12 h-96 items-center justify-center">
              <Chart dataset={data.data_gizi} />
            </div>
            <div className=" w-1/3 h-auto flex flex-col gap-5">
              <GrafikAntropometri kategori={"Nama Anak"} data={data.name} />
              <GrafikAntropometri kategori={"Berat Badan"} data={`${data.weight} kg`} />
              <GrafikAntropometri kategori={"Tinggi Badan"} data={`${data.height} cm`} />
              <GrafikAntropometri kategori={"Umur"} data={`${data.age} Bulan`} />
            </div>

            <div className="flex flex-col w-8/12 h-96 max-sm:w-full max-lg:w-full max-md:w-full max-xl:w-full">
              <h3 className="my-4 mx-6 font-bold text-xl">Tabel Standar</h3>
              <div className="flex flex-col items-center gap-4 border border-gray-500 rounded-lg h-full max-lg:w-full">
                <div className="flex bg-[#8DB0D0] border w-full rounded-lg h-12 items-center">
                  <ul className="flex text-xl font-bold gap-24 ml-6  max-sm:text-lg max-lg:gap-10 max-xl:gap-24 max-sm:ml-2 max-sm:gap-4 max-md:gap-6 max-[431px]:gap-2 max-[431px]:text-sm max-md:text-lg">
                    <li>BB/U</li>
                    <li>TB/U</li>
                    <li>BB/TB</li>
                    <li>IMT/U</li>
                    <li>LK/U</li>
                    <li>LLA/U</li>
                  </ul>
                </div>
                <TabelStandar />
                <TabelStandar />
              </div>
            </div>

            <Solusi />
          </article>
        </div>
      </div>
    </div>
  );
}
