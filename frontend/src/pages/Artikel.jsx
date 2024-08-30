import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/CardArtikel";
import Search from "../components/Search";
import PictArtikel1 from "../assets/img/artikel_1.jpg";
import PictArtikel2 from "../assets/img/artikel_2.jpg";
import PictArtikel4 from "../assets/img/artikel_4.jpg";

const articles = [
  { id: 1, 
    title: "Ada 4,8 Juta Ibu Hamil Per Tahun", 
    content: `"Ibu-ibu hamil ini, jumlahnya 4,8 juta per tahun. Kalau kita biarkan ada sekitar 21 persen atau 20 persennya melahirkan anak stunting. Sehingga 20 persen dari 4,8 juta itu kira-kira 1,2 juta kurang lebih (stunting),"`,
    image: PictArtikel1,
    href: "https://nasional.kompas.com/read/2023/10/24/15275871/ada-48-juta-ibu-hamil-per-tahun-kepala-bkkbn-kalau-dibiarkan-ada-20-persen"
  },
  { id: 2, 
    title: "Ibu Perlu Tahu Berat Badan Ideal sesuai Usia Bayi", 
    content: "Berat badan ideal bayi wajib dipantau setiap bulannya untuk memastikan ia tumbuh dengan baik. Bayi yang memiliki berat badan di bawah standar bisa mengindikasikan gizi yang tidak adekuat dan jika dibiarkan dapat berkembang menjadi stunting.",
    image: PictArtikel2,
    href: "https://www.halodoc.com/artikel/ibu-perlu-tahu-berat-badan-ideal-sesuai-usia-bayi"
  },
  { id: 3, 
    title: "CEGAH STUNTING !! IBU HAMIL WAJIB KONSUMSI PROTEIN HEWANI", 
    content: "Dengan mendapatkan gizi seimbang, ibu dan janin yang dikandung akan terhindar dari risiko kesehatan yang juga mempengaruhi kulaitas hidup generasi selanjutnya. Seiring proses kehamilan, kebutuhan gizi pun akan terus meningkat.",
    image: PictArtikel1,
    href: "https://diskes.badungkab.go.id/artikel/47972-cegah-stunting-ibu-hamil-wajib-konsumsi-protein-hewani#:~:text=Calon%20ibu%20yang%20kurang%20asupan,Stunting%20(anak%20tumbuh%20pendek)"  
  },
  { id: 4, 
    title: "Ketahui Masalah Stunting dan Cara Mengatasi Stunting", 
    content: "Stunting menjadi salah satu problem kesehatan yang masih menggejala di Indonesia. Masalah stunting bahkan menjadi perhatian khusus Kementerian Kesehatan lewat sejumlah kampanyenya.",
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
