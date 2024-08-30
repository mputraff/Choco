/* eslint-disable react/prop-types */
export default function InputData({
  name,
  placeholder,
  type,
  width,
  options,
  value,
  onChange,
  label
}) {
  if (type === "select") {
    return (
      <div className="flex flex-col w-full">
        <div className="w-full flex gap-2">
          <label htmlFor={name} className="font-semibold text-lg flex">
            {label}
          </label>
          <p className="text-2xl text-red-600">*</p>
        </div>
        <select
          id={name}
          name={name}
          className={`bg-transparent outline-none border-gray-400 border rounded-xl p-3 text-base font-semibold ${width} max-sm:w-11/12`}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex gap-2">
        <label htmlFor={name} className="font-semibold text-lg flex">
          {label}
        </label>
        <p className="text-2xl text-red-600">*</p>
      </div>
      <input
        id={name}
        name={name}
        type={type}
        className={`bg-transparent outline-none border-gray-400 border rounded-xl p-3 text-base font-semibold ${width} max-sm:w-11/12`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
