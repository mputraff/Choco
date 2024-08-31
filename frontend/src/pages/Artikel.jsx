import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/CardArtikel";
import Search from "../components/Search";
import PictArtikel1 from "../assets/img/artikel_1.jpg";
import PictArtikel2 from "../assets/img/artikel_2.jpg";
import PictArtikel4 from "../assets/img/artikel_4.jpg";

// eslint-disable-next-line react-refresh/only-export-components
export const articles = [
  { id: 1, 
    title: "Ada 4,8 Juta Ibu Hamil Per Tahun", 
    content: `"Ibu-ibu hamil ini, jumlahnya 4,8 juta per tahun.`,
    image: PictArtikel1,
    href: "https://nasional.kompas.com/read/2023/10/24/15275871/ada-48-juta-ibu-hamil-per-tahun-kepala-bkkbn-kalau-dibiarkan-ada-20-persen"
  },
  { id: 2, 
    title: "Ibu Perlu Tahu Berat Badan Ideal sesuai Usia Bayi", 
    content: "Berat badan ideal bayi wajib dipantau setiap bulannya",
    image: PictArtikel2,
    href: "https://www.halodoc.com/artikel/ibu-perlu-tahu-berat-badan-ideal-sesuai-usia-bayi"
  },
  { id: 3, 
    title: "CEGAH STUNTING !! Ibu hamil wajib konsumsi protein hewani", 
    content: "Dengan mendapatkan gizi seimbang",
    image: PictArtikel1,
    href: "https://diskes.badungkab.go.id/artikel/47972-cegah-stunting-ibu-hamil-wajib-konsumsi-protein-hewani#:~:text=Calon%20ibu%20yang%20kurang%20asupan,Stunting%20(anak%20tumbuh%20pendek)"  
  },
  { id: 4, 
    title: "Ketahui Masalah Stunting dan Cara Mengatasi Stunting", 
    content: "Stunting menjadi salah satu problem kesehatan ",
    image: PictArtikel4,
    href: "https://www.nestlehealthscience.co.id/artikel/masalah-stunting-anak"
  },
];

export default function Artikel() {
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleSearch = (searchTerm) => {
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  return (
    <>
      <Navbar />
      <section className="w-full h-auto bg-slate-700">
        <div className="flex flex-col w-full h-full text-white ">
          <Search onSearch={handleSearch} />

          {filteredArticles.map(article => (
            <Card
              key={article.id}
              title={article.title}
              artikel={article.content}
              image={article.image}
              href={article.href}
              rounded={article.id === 1 ? "rounded-t-xl" : article.id === articles.length ? "rounded-b-xl mb-32" : ""}
            />
          ))}

        </div>
      </section>
      <Footer />
    </>
  );
}
