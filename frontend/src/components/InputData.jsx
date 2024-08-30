export default function InputData({ name, placeholder, type, width }) {
  return (
    <>
      <div className="flex flex-col w-full">
      <div className="w-full flex gap-2">
        <label htmlFor="" className="font-semibold text-lg flex">
          {name}
        </label>
        <p className="text-2xl text-red-600">*</p>
      </div>
      <input
        type={type}
        className={`bg-transparent outline-none border-gray-400 border rounded-xl p-3 text-base font-semibold ${width} max-sm:w-11/12`}
        placeholder={placeholder}
      />
      </div>
    </>
  );
}
