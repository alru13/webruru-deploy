import Link from "next/link"

const Page = () => {
    return (
        <>
        <div className="flex my-20 h-32 items-center justify-center container mx-auto overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <h3 className="flex items-center justify-center font-semibold text-xl p-4 ">Silahkan Pilih Tipe Mesin Berdasarkan Jumlah Langkah Dalam Satu Siklus Kerja :</h3>

        </div>
        <div className="flex items-center justify-center h-10">
            <Link href={'/search/kerusakan/2-tak'} className=" rounded-lg px-4 py-3 text-white hover:text-color-header bg-color-gray mx-3 items-center justify-between">Mesin 2 Tak</Link>
            <Link href={'/search/kerusakan/4-tak'} className= "rounded-lg px-4 py-3 text-white hover:text-color-header bg-color-gray mx-3 items-center justify-between">Mesin 4 Tak</Link>

        </div>

        </>
    )
}

export default Page