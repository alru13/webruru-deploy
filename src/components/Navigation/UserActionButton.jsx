import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"


const UserActionButton = async () => {
    const user = await authUserSession()
    const actionLabel = user ? 'Keluar' : 'Masuk'
    // masuk dari luar homepage masih bermasalah!!!
    const actionURL = user ? "/api/auth/signout" : 'api/auth/signin'

    return (
        <div className="space-x-3 ">
            {
                user ? <Link href={"/users/dashboard"} className="rounded-lg px-2 text-white hover:text-color-header hover:bg-color-gray">Dashboard</Link> : null
            }
            <Link href={actionURL} className="rounded-lg px-2 text-white hover:text-color-header hover:bg-color-gray">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton