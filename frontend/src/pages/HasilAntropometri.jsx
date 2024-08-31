import HasilDataAntro from "../components/HasilDataAntro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

export default function HasilAntropometri() {
  const { id } = useParams(); // Get the ID from the route parameter
  const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authState } = useAuth();

  const getAnthropometryResult = async (id) => {
    try {
      const { token } = authState;
      if (!token) return;

      const response = await axios.get(
        `https://api-web-stunting.up.railway.app/api/v1/anthropometry/result/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setData(response.data.data); // Assuming the data is in response.data.data
    } catch (error) {
      setError(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (id) {
      getAnthropometryResult(id);
    }
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Navbar />
      <section className="w-full h-auto bg-slate-600 flex flex-col gap-4">
        <HasilDataAntro data={data} />
      </section>
      <Footer />
    </>
  );
}
