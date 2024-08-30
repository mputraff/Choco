export default function GrafikAntropometri({ kategori, data }) {
  return (
    <>
      <ul className="flex justify-between w-full font-semibold text-xl">
        <li>{kategori}</li>
        <li>{data}</li>
      </ul>
    </>
  );
}
