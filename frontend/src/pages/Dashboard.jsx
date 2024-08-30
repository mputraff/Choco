import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImgDashboard1 from "../assets/img/PicDashboard_1.png";
import ImgDashboard2 from "../assets/img/PicDashboard_2.png";
import Solusi from "../components/SolusiDataAntro";

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <section className="w-full h-auto ">
                <div className="flex flex-col items-center gap-16 bg-slate-500 h-full pb-10">
                    <h3 className="flex mt-10 w-full justify-center text-white text-3xl font-semibold">INFO GIZI DI INDONESIA</h3>
                    <article className="flex w-8/12 justify-between h-auto">
                        <div className="w-96 h-80 flex">
                            <img src={ImgDashboard1} alt="" />

                        </div>

                        <div className="w-90 h-80 flex">

                            <img src={ImgDashboard2} alt="" />
                        </div>
                    </article>
                    <article className="flex flex-col w-9/12  gap-3">
                        <h3 className="text-3xl ml-5 font-semibold">Data Anak Anda</h3>
                        <div className="flex flex-col w-full h-80 bg-slate-300 rounded-lg">
                            <div className="flex mt-3 mx-5 h-72">
                                <p className="text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia quasi quisquam incidunt fuga quibusdam neque tempora assumenda, voluptate reprehenderit officiis expedita minus, a harum facere tempore, eos dicta nam. Necessitatibus, id aut? At, omnis cum vel accusantium eos nemo hic porro ipsam est assumenda, sint illum quibusdam! Distinctio doloremque optio molestias sit sed. Quisquam, recusandae minima? Cumque corrupti molestias aliquam quod. Laudantium corporis, ipsum nulla aliquid aspernatur excepturi id illum explicabo perferendis vel similique.</p>
                            </div>
                            <div className="flex mx-5 my-1 h-9 justify-end items-center">
                                <Link className="text-[#3B46A9] font-bold text-lg">Selengkapnya <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </article>

                </div>
            </section>
            <Footer />
        </>
    )
}