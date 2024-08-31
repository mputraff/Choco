export default function ButtonSign({ child , width, onClick, type, md}) {
  return (
    <button type={type} onClick={onClick} className={`bg-indigo-400 py-1 border-white rounded-2xl mt-4 ${width} ${md} shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
      {child}
    </button>
  );
}
