import Solusi from "../components/SolusiDataAntro";
import GrafikAntropometri from "../components/GrafikAntropometri";
import Bayi from "../assets/img/Bayi.png";
import Chart from "../chart/Piechart";
import TabelStandar from "./TabelStandar";

export default function HasilDataAntro() {
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
              <Chart />
            </div>
            <div className=" w-1/3 h-auto flex flex-col gap-5">
              <GrafikAntropometri kategori={"Nama Anak"} data={"Citra"} />
              <GrafikAntropometri kategori={"Berat Badan"} data={"13 Kg"} />
              <GrafikAntropometri kategori={"Tinggi Badan"} data={"109 cm"} />
              <GrafikAntropometri kategori={"Umur"} data={"7 Tahun"} />
            </div>

            <div className="flex flex-col w-8/12 h-96 ">
              <h3 className="my-4 mx-6 font-bold text-xl">Tabel Standar</h3>
              <div className="flex flex-col items-center gap-4 border border-gray-500 rounded-lg h-full">
                <div className="flex bg-[#8DB0D0] w-full rounded-lg h-12 items-center">
                  <ul className="flex text-xl font-bold gap-24 ml-6">
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
