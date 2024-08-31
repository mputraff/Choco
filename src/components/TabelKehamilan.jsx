import JudulDataKehamilan from "./JudulDataKehamilan";
import IsiDataTabel from "./IsiDataTabelKehamilan";

export default function TabelKehamilan() {
  return (
    <>
      <table className="w-full flex flex-col bg-gray-400 rounded-xl">
        <JudulDataKehamilan />

        <IsiDataTabel
          bg={"bg-white"}
          trimester={"Trimester 1"}
          value1={"+180 kkal"}
          value2={"+1 gr"}
          value3={"+200 mcg"}
          value4={"+10 mg"}
          value5={"+0 mg"}
          value6={"+200 mcg"}
          value7={"+0.3 gr"}
          value8={"+2 gr"}
        />

        <IsiDataTabel

          trimester={"Trimester 2"}
          value1={"+300 kkal"}
          value2={"+10 gr"}
          value3={"+200 mcg"}
          value4={"+10 mg"}
          value5={"+9 mg"}
          value6={"+200 mcg"}
          value7={"+0.3 gr"}
          value8={"+2 gr"}
        />

        <IsiDataTabel
          bg={"bg-white"}
          trimester={"Trimester 3"}
          value1={"+300 kkal"}
          value2={"+30 gr"}
          value3={"+200 mcg"}
          value4={"+10 mg"}
          value5={"+9 mg"}
          value6={"+200 mcg"}
          value7={"+0.3 gr"}
          value8={"+2 gr"}
        />

      </table>
    </>
  );
}
