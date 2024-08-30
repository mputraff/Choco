// import Button from "../components/Button";
// import { Link } from "react-router-dom";
// import { useState } from "react";
import imgHome from "../assets/img/Home.png";
import imgData from "../assets/img/Data.png";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <>
      <Navbar />
      <section id="Home" className="w-full h-svh bg-slate-600">
        <div className="w-full h-full flex items-center gap-24 justify-center max-sm:flex-col max-sm:gap-0">
          <div className=" h-3/5 flex max-sm:hidden">
            <img src={imgHome} alt="imgHome" className="max-sm:w-64 max-sm:mt-8"/>
          </div>
          <div className="w-1/2 text-justify flex flex-col gap-9 max-sm:w-3/4 ">
            <h2 className="text-white text-5xl font-semibold max-sm:text-3xl  ">Bersama Cegah Stunting untuk Masa Depan yang Lebih Sehat</h2>
            <p className="text-white text-2xl max-sm:text-xl"><b>Apa itu stunting?</b></p>
            <p className="text-white text-xl max-sm:text-lg">Stunting adalah masalah serius yang mengancam perkembangan anak-anak kita. Mari bergandengan tangan untuk memastikan setiap anak mendapatkan nutrisi dan perawatan yang mereka butuhkan agar tumbuh sehat dan kuat. Dengan informasi, dukungan, dan tindakan nyata, kita bisa mengubah masa depan generasi mendatang.</p>
          </div>
        </div>      
      </section>

      <section id="About" className="w-full h-svh max-sm:h-auto">
        <div className="w-full h-full flex items-center gap-14 justify-center max-sm:flex-col-reverse max-sm:my-8 ">
          <div className="w-5/12 text-justify flex flex-col gap-10 ml-10 text-black max-sm:w-9/12 max-sm:ml-0 ">
            <h2 className="text-5xl font-semibold max-sm:text-3xl ">Grafik Stunting</h2>
            <p className="text-lg ">Grafik ini menunjukkan tren peningkatan angka stunting di Indonesia selama tahun 2023. Terlihat adanya kenaikan persentase anak-anak di bawah usia lima tahun yang mengalami stunting, yang mengindikasikan permasalahan gizi dan kesehatan yang perlu segera ditangani</p>
            <p className="text-lg">Untuk mencegah stunting, kita perlu mengambil langkah-langkah berikut: Peningkatan gizi ibu hamil untuk memastikan nutrisi yang cukup dan seimbang selama kehamilan, pemberian Air Susu Ibu (ASI) eksklusif selama enam bulan pertama kehidupan bayi karena ASI mengandung semua nutrisi yang dibutuhkan untuk pertumbuhan optimal, dan pemberian makanan pendamping ASI yang kaya akan zat gizi setelah enam bulan untuk memenuhi kebutuhan nutrisi anak.</p>
          </div>
          
          <div className="w-auto h-2/4 max-sm:w-3/4 flex border-black border">
            <img src={imgData} alt="imgData"  />
          </div>
        </div>      
      </section>

      <section id="Artikel" className="w-full h-auto ">
        <div className="w-full h-full flex flex-col gap-10">
          <h2 className="text-4xl font-semibold w-full text-center">Artikel Terkini</h2>
          {/* Card */}
          <div className="w-full flex gap-10  2xl:h-72 max-sm:h-auto items-center bg-slate-600 max-sm:flex-col max-sm:items-center ">
              <Card color="bg-slate-500" ml={"ml-8"} mt={"max-sm:mt-8"}/>
              <Card color="bg-slate-500" />
              <Card color="bg-slate-500" />
              <Card color="bg-slate-500" mr={"mr-8"} mb={"max-sm:mb-8"}/>
          </div>
        </div>         
      </section>
      
      <Footer />
      
    </>
  );
}
