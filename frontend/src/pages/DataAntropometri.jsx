import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputData from "../components/InputData";
import Button from "../components/ButtonSign";
import HasilData from "../components/HasilDataAntro";

import { useState } from "react";

export default function DataAntropometri() {

  const [hasilData, setHasilData] = useState(false);

  const handleClickHasilData = (event) => {
    event.preventDefault();
    setHasilData(true);
  }

  return (
    <>
      <Navbar />
      <section className="w-full h-auto bg-slate-600 flex flex-col gap-4">
        { !hasilData ? (
          <>
          <h2 className="flex ml-16 mt-10 text-3xl max-sm:text-2xl font-semibold text-white">
          Periksa Data Antropometri Anak
        </h2>
        <div className="h-auto flex bg-slate-300 mx-10 rounded-xl mb-10">
          <div className="w-full m-10 flex ">
            <form action="" className="w-full flex flex-col gap-2 items-center">
              <InputData
                name={"Nama Anak"}
                type={"text"}
                placeholder={"Masukan Nama Lengkap"}
              />

              <InputData
                name={"Tanggal Pengukuran"}
                type={"date"}
                placeholder={"Masukan Tanggal"}
              />

              <InputData
                name={"Tanggal Lahir"}
                type={"date"}
                placeholder={"Masukan Tanggal"}
              />

              <InputData
                name={"Jenis Kelamin"}
                type={"text"}
                placeholder={"Masukan Jenis Kelamin"}
              />

              <div className="flex w-full h-auto justify-between mt-2 gap-20 max-sm:flex-col max-sm:gap-4">
                <InputData
                  name={"Berat Badan (kg)"}
                  type={"text"}
                  placeholder={"Masukan Berat Badan"}
                />

                <InputData
                  name={"Tinggi Badan (cm)"}
                  type={"text"}
                  placeholder={"Masukan Tinggi Badan"}
                />
              </div>

              <div className="flex  w-full h-auto justify-between mt-2 gap-20 max-sm:flex-col max-sm:gap-4">
                <InputData
                  name={"Lingkar Lengan (kg)"}
                  type={"text"}
                  placeholder={"Masukan Lingkar Lengan"}
                />

                <InputData
                  name={"Lingkar Kepala (cm)"}
                  type={"text"}
                  placeholder={"Masukan Lingkar Kepala"}
                />
              </div>

              <Button child={"Cek"} width={"w-1/6"} onClick={handleClickHasilData} />
            </form>
          </div>
        </div> 
        </>) : (
          <HasilData />
        )}
        
      </section>
      <Footer />
    </>
  );
}
