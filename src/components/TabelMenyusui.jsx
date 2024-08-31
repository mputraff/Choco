import JudulDataKehamilan from "./JudulDataKehamilan"
import IsiDataTabel from "./IsiDataTabelKehamilan"

export default function TabelMenyusui() {
    return (
        <>
            <table className="w-full flex flex-col bg-gray-400 rounded-xl">
                <JudulDataKehamilan />
                <IsiDataTabel
                    bg={"bg-white"}
                    trimester={"0 - 6 Bulan"}
                    value1={"+330 kkal"}
                    value2={"+20 gr"}
                    value3={"+100 mcg"}
                    value4={"+45 mg"}
                    value5={"+0 mg"}
                    value6={"+200 mcg"}
                    value7={"+0.2 gr"}
                    value8={"+2 gr"}
                />

                <IsiDataTabel
                   
                    trimester={"7 - 12 Bulan"}
                    value1={"+400 kkal"}
                    value2={"+15 gr"}
                    value3={"+100 mcg"}
                    value4={"+45 mg"}
                    value5={"+0 mg"}
                    value6={"+200 mcg"}
                    value7={"+0.2 gr"}
                    value8={"+2 gr"}
                />
            </table>
        </>
    )
}

