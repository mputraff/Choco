import { useState } from "react";

export default function Search({onSearch}) {

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
      <div className="w-1/4 m-10 h-10 flex items-center border-2 rounded-2xl">
        <i className="fa-solid fa-magnifying-glass ml-4"></i>
        <input
          className="bg-transparent outline-none ml-2 w-5/6"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Telusuri Artikel Terkait"
        />
      </div>
    </>
  );
}
