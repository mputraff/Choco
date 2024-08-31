import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputData from "../components/InputData";
import Button from "../components/ButtonSign";
import HasilData from "../components/HasilDataAntro";

import { useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

export default function DataAntropometri() {
  const [hasilData, setHasilData] = useState(false);
  const { authState } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    measurement_date: "",
    birth_date: "",
    gender: "",
    weight: 0,
    height: 0,
    arm_circumference: 0,
    head_circumference: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleClickHasilData = async (event) => {
    event.preventDefault();

    try {
      console.log(formData);
      
      const res = await axios.post(
        "https://api-web-stunting.up.railway.app/api/v1/anthropometry",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          }
        }
      );

      console.log(res.data);
    } catch (error) {
      console.error(error.response.data.message);
    }

    setHasilData(true);
  };

  const genderOptions = [
    { name: "Laki-laki", value: "Laki-laki" },
    { name: "Perempuan", value: "Perempuan" },
  ];

  return (
    <>
      <Navbar />
      <section className="w-full h-auto bg-slate-600 flex flex-col gap-4">
        {!hasilData ? (
          <>
            <h2 className="flex ml-16 mt-10 text-3xl max-sm:text-2xl font-semibold text-white">
              Periksa Data Antropometri Anak
            </h2>
            <div className="h-auto flex bg-slate-300 mx-10 rounded-xl mb-10">
              <div className="w-full m-10 flex ">
                <form
                  action=""
                  className="w-full flex flex-col gap-2 items-center"
                >
                  <InputData
                    label="Nama Anak"
                    name="name"
                    type="text"
                    placeholder="Masukan Nama Lengkap"
                    value={formData.name}
                    onChange={handleInputChange}
                    width="w-full"
                  />

                  <InputData
                    label="Tanggal Pengukuran"
                    name="measurement_date"
                    type="date"
                    placeholder="Masukan Tanggal"
                    value={formData.measurement_date}
                    onChange={handleInputChange}
                    width="w-full"
                  />

                  <InputData
                    label="Tanggal Lahir"
                    name="birth_date"
                    type="date"
                    placeholder="Masukan Tanggal"
                    value={formData.birth_date}
                    onChange={handleInputChange}
                    width="w-full"
                  />

                  <InputData
                    label="Jenis Kelamin"
                    name="gender"
                    type="select"
                    options={genderOptions}
                    value={genderOptions.value}
                    onChange={handleInputChange}
                    width="w-full"
                  />

                  <div className="flex w-full h-auto justify-between mt-2 gap-20 max-sm:flex-col max-sm:gap-4">
                    <InputData
                      label="Berat Badan(kg)"
                      name="weight"
                      type="number"
                      placeholder="Masukan Berat Badan"
                      value={formData.weight}
                      onChange={handleInputChange}
                      width="w-full"
                    />

                    <InputData
                      label="Tinggi Badan (cm)"
                      name="height"
                      type="number"
                      placeholder="Masukan Tinggi Badan"
                      value={formData.height}
                      onChange={handleInputChange}
                      width="w-full"
                    />
                  </div>

                  <div className="flex w-full h-auto justify-between mt-2 gap-20 max-sm:flex-col max-sm:gap-4">
                    <InputData
                      label="Lingkar Lengan(cm)"
                      name="arm_circumference"
                      type="number"
                      placeholder="Masukan Lingkar Lengan"
                      value={formData.arm_circumference}
                      onChange={handleInputChange}
                      width="w-full"
                    />

                    <InputData
                      label="Lingkar Kepala(cm)"
                      name="head_circumference"
                      type="number"
                      placeholder="Masukan Lingkar Kepala"
                      value={formData.head_circumference}
                      onChange={handleInputChange}
                      width="w-full"
                    />
                  </div>

                  <Button
                    child="Cek"
                    width="w-1/6"
                    md={"max-lg:w-2/3"}
                    onClick={handleClickHasilData}
                  />
                </form>
              </div>
            </div>
          </>
        ) : (
          <HasilData />
        )}
      </section>
      <Footer />
    </>
  );
}
