import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imgIbuHamil from "../assets/img/IbuHamil.png";
import imgIbuMenyusui from "../assets/img/IbuMenyusui.png";
import imgDataHamil from "../assets/img/image.png";
import imgDataMenyusui from "../assets/img/DataMenyusui.png";
import TabelKehamilan from "../components/TabelKehamilan";
import TabelMenyusui from "../components/TabelMenyusui";
import GambarKet1 from "../assets/img/Ket_1.png";
import GambarKet2 from "../assets/img/Ket_2.png";
import GambarKet3 from "../assets/img/Ket_3.png";
import GambarKet4 from "../assets/img/Ket_4.png";
import GambarKet5 from "../assets/img/Ket_5.png";
import GambarKet6 from "../assets/img/Ket_6.png";
import GambarKet7 from "../assets/img/Ket_7.png";
import GambarKet8 from "../assets/img/Ket_8.png";
import Keterangan from "../components/Keterangan";

export default function DataKehamilan() {
  return (
    <>
      <Navbar />
      <section className="h-auto flex bg-slate-700">
        <div className="w-full flex h-full flex-col">
          <h3 className="mx-20 my-10 text-2xl max-sm:text-center text-white font-semibold">KEBUTUHAN GIZI</h3>
          {/* Ibu Menyusui */}
          <div className="h-1/2 flex mx-10 gap-3 mt-5 items-center max-sm:flex-col max-md:flex-col justify-center">
            {/* img */}
            <div className="flex  flex-col gap-3 text-center text-white justify-center">
              <img src={imgIbuHamil} alt="imgIbuMenyusui" className="max-sm:w-full max-md:w-full" />
              <p className="font-semibold text-xl ">Ibu Hamil</p>
            </div>
            {/* table */}
            <div className="flex w-10/12 h-80 max-sm:w-full max-md:w-full">
              {/* ketika max-sm && max-md dia memakai <img src={imgDataHamil} alt="" className=""/> */}
              <img src={imgDataHamil} alt="" className="lock max-sm:block max-md:block lg:hidden"/>
              <div className="hidden lg:flex w-full">
                <TabelKehamilan />
              </div>
              
            </div>
          </div>


          {/* Ibu Menyusui */}
          <div className="h-1/2 flex mx-10 gap-3 items-center my-20 max-sm:flex-col max-md:flex-col">
            {/* img */}
            <div className="flex flex-col text-center text-white justify-center">
              <img src={imgIbuMenyusui} alt="imgIbuMenyusui" />
              <p className="font-semibold text-xl">Ibu Menyusui</p>
            </div>
            {/* table */}
            <div className="flex w-10/12 h-80">
            <img src={imgDataMenyusui} alt="" className="lock max-sm:block max-md:block lg:hidden"/>
              <div className="hidden lg:flex w-full">
              <TabelMenyusui />
              </div>
            </div>
          </div>

          <div className="my-14 flex flex-col w-full items-center h-1/2">
            <h2 className="text-3xl flex w-9/12 ml-5 text-white font-semibold">Keterangan</h2>

            <div className="flex w-10/12 h-auto mt-10 justify-center flex-wrap">
              <Keterangan
                image={GambarKet1}
                alt="GambarKet1"
                p1="130 gram nasi putih (204 kalori)"
                p2="1 porsi telur dadar (93 kalori)"
              />

              <Keterangan
                image={GambarKet2}
                alt="GambarKet2"
                p1="100 gram Daging Sapi Tanpa Lemak (26 protein)"
              />

              <Keterangan
                image={GambarKet3}
                alt="GambarKet3"
                p1="1/2 cangkir Kacang Lentil (179 mcg)"
                p2="1 Buah Jeruk (30 mcg)"
              />

              <Keterangan
                image={GambarKet4}
                alt="GambarKet3"
                p1="60 gram tomat (10mg Vit C)"
              />

              <Keterangan
                image={GambarKet5}
                alt="GambarKet1"
                p1="75 gram hati ayam"
                p2="(8.25 mg zat besi)"
              />

              <Keterangan
                image={GambarKet5}
                alt="GambarKet1"
                p1="75 gram hati ayam"
                p2="(8.25 mg zat besi)"
              />

              <Keterangan
                image={GambarKet6}
                alt="GambarKet2"
                p1="1 cangkir susu almond"
                p2="(200 mg kalsium)"
              />

              <Keterangan
                image={GambarKet7}
                alt="GambarKet3"
                p1="25 gram ikan salmon"
                p2="(0.3 gram omega 3)"
              />

            </div>

          </div>
        </div>


      </section>
      <Footer />
    </>
  );
}
