import imgBayi from "../assets/img/Bayi2.png"
import TabelBayi from "../components/TabelDataBayi"
import imgDataBayi from "../assets/img/DataBayi.png"

export default function DataBayi() {
    return (
        <>

            <div className="flex h-3/4 gap-4 mx-10 w-full items-center justify-center max-md:flex-col max-md:my-6">
                {/* img */}
                <div className="flex h-full items-center ml-20 max-md:ml-0">
                    <img src={imgBayi} alt="" className="w-96 h-96 max-md:h-64 max-md:w-64 " />
                </div>
                {/* Table */}
                <img src={imgDataBayi} alt="" className="lock max-sm:block max-md:block lg:hidden" />
                <div className="hidden lg:flex w-full">
                    <TabelBayi />
                </div>
            </div>

        </>
    )
}