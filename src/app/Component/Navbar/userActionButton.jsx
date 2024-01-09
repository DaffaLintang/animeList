import Link from "next/link"
import { authUserSession } from "@/libs/authLibs"

const UserActionButton = async() => {
    const user = await authUserSession();
    console.log(user)

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex gap-2 justify-between">
           {
            user?  <Link href="/users/dashboard" className="p-1 text-blue-500">Dashboard</Link>:null
           }
            <Link href={actionUrl} className="bg-color-dark text-color-accent p-1 rounded px-5">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton