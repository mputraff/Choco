export default function GrafikAntropometri({ kategori, data }) {
  return (
    <>
      <ul className="flex justify-between w-full font-semibold text-xl max-sm:text-base max-md:text-base">
        <li>{kategori}</li>
        <li>{data}</li>
      </ul>
    </>
  );
}
