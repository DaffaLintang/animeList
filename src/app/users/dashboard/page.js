import {authUserSession} from "@/libs/authLibs"
import Image from "next/image"
import Link from "next/link"

const Page = async() =>{
    const user = await authUserSession()
    return (
        <div className="text-color-primary flex justify-center flex-col items-center mt-8 gap-2">
        <h5 className="text-2xl font-bold">Welcome,{user?.name}</h5>
        <Image src={user?.image} alt="..." width={250} height={250}/>
        <div className="py-8 flex gap-4 flex-wrap">
            <Link href="/users/dashboard/collection" className="bg-color-accent text-color-dark py-2 px-3 text-xl font-bold rounded">My Collection</Link>
            <Link href="/users/dashboard/Comment" className="bg-color-accent text-color-dark py-2 px-3 text-xl font-bold rounded">My Comment</Link>
        </div>
        </div>
    )
}

export default Page