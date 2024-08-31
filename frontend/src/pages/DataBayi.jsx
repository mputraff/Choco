import imgBayi from "../assets/img/Bayi2.png"
import TabelBayi from "../components/TabelDataBayi"

export default function DataBayi() {
    return (
        <>

            <div className="flex h-3/4 gap-4 mx-10 w-full items-center justify-center">
                {/* img */}
                <div className="flex h-full items-center ml-20">
                    <img src={imgBayi} alt="" className="w-96 h-96" />
                </div>
                {/* Table */}
                <TabelBayi />
            </div>

        </>
    )
}