export default function Input({ icon, placeholder, type, value, onChange }) {
  return (
    <div className="flex border-2 rounded-3xl p-2 my-2 items-center w-full">
      <i className={`ml-2 ${icon}`}></i>
      <input
        type={type}
        className="bg-transparent outline-none ml-4 w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
