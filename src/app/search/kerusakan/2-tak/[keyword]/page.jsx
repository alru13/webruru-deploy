import Damage from "@/components/Damages/2Tak"
import InputSearch from "@/components/InputSearch/2Tak"
import { getDamageResponse } from "@/libs/api-libs"

const Page = async ({ params }) => {
    const { keyword } = params

    const decodedKeyword = decodeURI(keyword)

    const searchDamage = await getDamageResponse("search/kerusakan/2-tak/", `q=${keyword}`)

    return (
        <>
            <section>
                <div className="grid-cols-1 container mx-auto items-center pt-6 pb-2 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <h1 className="font-semibold text-4xl p-4">Pencarian Kerusakan</h1>
                    <h3 className="font-semibold text-2xl px-4 mb-8">Dengan Gejala... {decodedKeyword}</h3>
                    <InputSearch/>
                    <Damage api={searchDamage} />
                </div>

            </section>
        </>
    )
}

export default Page