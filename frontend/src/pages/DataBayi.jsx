import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import imgBayi from "../assets/img/Bayi2.png"
import TabelBayi from "../components/TabelDataBayi"

export default function DataBayi() {
    return (
        <>
            <Navbar />
            <section className="w-full h-screen bg-slate-700 flex items-center">
                <div className="flex h-3/4 mx-10 w-full">
                    {/* img */}
                    <div className="flex h-full items-center">
                        <img src={imgBayi} alt="" className="w-72 h-72" />
                    </div>
                    {/* Table */}
                    <TabelBayi />
                </div>
            </section>
            <Footer />        
        </>
    )
}