import JudulDataTabel from "./JudulDataTabel"
import IsiDataTabel from "./IsiDataTabel"

export default function TabelDataBayi() {
    return (
        <>
            <div className="flex w-10/12 h-auto ">
                <table className="w-auto flex flex-col bg-gray-400 rounded-xl">
                    <JudulDataTabel
                        transparent={"text-transparent"}
                        data1={"Transparen"}
                        data2={"Berat Badan (kg)"}
                        data3={"Tinggi Badan (cm)"}
                        data4={"Lingkar Kepala (cm)"}
                        data5={"Lingkar Lengan Atas (cm)"}
                    />

                    <IsiDataTabel
                        bg={"bg-white"}
                        data1={"Baru Lahir"}
                        data2={"2.7 - 3.9"}
                        data3={"47.5 - 52"}
                        data4={"34 - 40.5"}
                        data5={"9.0 - 10.0"}
                    />

                    <IsiDataTabel
                        data1={"4 Bulan"}
                        data2={"6.1 - 7.7"}
                        data3={"61.5 - 66"}
                        data4={"39 - 43"}
                        data5={"11.5 - 13.0"}
                    />

                    <IsiDataTabel
                        bg={"bg-white"}
                        data1={"6 Bulan"}
                        data2={"6.1 - 7.7"}
                        data3={"61.5 - 66"}
                        data4={"39 - 43"}
                        data5={"12.5 - 14.0"}
                    />

                    <IsiDataTabel
                        data1={"8 Bulan"}
                        data2={"7.6 - 9.5"}
                        data3={"68.1 - 73"}
                        data4={"42 - 46"}
                        data5={"13.0 - 14.5"}
                    />

                    <IsiDataTabel
                        bg={"bg-white"}
                        data1={"1 Tahun"}
                        data2={"8.6 - 10.7"}
                        data3={"72.6 - 77.7"}
                        data4={"45 - 47.6"}
                        data5={"13.5 - 15.5"}
                    />

                    <IsiDataTabel
                        data1={"16 Bulan"}
                        data2={"9.3 - 11.8"}
                        data3={"77.2 - 82.6"}
                        data4={"45.5 - 48"}
                        data5={"14.0 - 15.5"}
                    />

                    <IsiDataTabel
                        bg={"bg-white"}
                        data1={"18 Bulan"}
                        data2={"9.8 - 12.8"}
                        data3={"79.2 - 87.1"}
                        data4={"45.8 - 48.3"}
                        data5={"14.0 - 15.5"}
                    />

                    <IsiDataTabel
                        data1={"22 Bulan"}
                        data2={"10.4 - 13.2"}
                        data3={"82.6 - 88.6"}
                        data4={"46.2 - 48.7"}
                        data5={"14.5 - 16.0"}
                    />

                    <IsiDataTabel
                        bg={"bg-white"}
                        rounded={"rounded-b-xl"}
                        data1={"2 Tahun"}
                        data2={"10.6 - 13.2"}
                        data3={"84.6 - 99.1"}
                        data4={"46.3 - 48.8"}
                        data5={"14.5 - 16.5"}
                    />
                </table>
            </div>
        </>
    )
}