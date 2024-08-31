import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImgDashboard1 from "../assets/img/PicDashboard_1.png";
import ImgDashboard2 from "../assets/img/PicDashboard_2.png";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const [results, setResults] = useState([]);
  const { authState } = useAuth();

  const getAnthropromerties = async () => {
    try {
      const { token } = authState;
      if (!token) return;

      const response = await axios.get(
        "https://api-web-stunting.up.railway.app/api/v1/anthropometry/result",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        console.log(response.data.data);

        // Set data yang sudah diurutkan ke state
        setResults(response.data.data);
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (authState.token) {
      getAnthropromerties();
    }
  }, [authState]);
  console.log(results);
  

  return (
    <>
      <Navbar />
      <section className="w-full h-auto ">
        <div className="flex flex-col items-center gap-16 bg-slate-500 h-full pb-10">
          <h3 className="flex mt-10 w-full justify-center text-white text-3xl font-semibold">
            INFO GIZI DI INDONESIA
          </h3>
          <article className="flex w-8/12 max-lg:w-9/12 max-md:w-9/12 max-sm:w-9/12 justify-between h-auto">
            <div className="w-96 h-80 flex max-md:h-60 max-md:w-60 max-sm:h-52 max-sm:w-52">
              <img src={ImgDashboard1} alt="" />
            </div>

            <div className="w-90 h-80 flex max-md:h-60 max-md:w-60 max-sm:h-52 max-sm:w-52">
              <img src={ImgDashboard2} alt="" />
            </div>
          </article>
          <article className="flex flex-col w-9/12  gap-3">
            <h3 className="text-3xl ml-5 font-semibold">Data Anak Anda</h3>
            <div className="flex flex-col w-full h-auto bg-slate-300 rounded-lg">
              {results.map((res) => (
                <Link to={`/hasil-antropometri/${res.id}`} key={res.id}>
                  <div className="grid grid-cols-4 my-10">
                    <div className="col-span-2 ms-5">
                      <p className="font-semibold text-xl">{res.name}</p>
                      <p className="text-lg">Umur : {res.ageInMonths} Bulan</p>
                      <p className="text-lg">BB: {res.weight} Kg</p>
                      <p className="text-lg">TB: {res.height} cm</p>
                    </div>
                    <div className="col content-center">
                      Status gizi: {res.category}
                    </div>
                    <div className="flex justify-end my-auto me-5">
                      <i className="fa-arrow-circle-right"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
