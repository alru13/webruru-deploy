import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"

const Page = async () => {
    const user = await authUserSession()

    return (
        <>
            <div className="grid-cols-1 container mx-auto items-center py-6 overflow-hidden rounded-lg shadow transition hover:shadow-lg">

                <h1 className="font-semibold text-4xl p-4">
                Haloo...

                </h1>

                <h3 className="font-semibold text-2xl px-4 mb-8">Selamat datang, {user.name} </h3>

                <Link href={'/users/input'} className="ml-4 rounded-lg p-4 text-white hover:text-color-header bg-color-gray">Input list SDS baru</Link>
            </div>
        </>
    )
}

export default Page