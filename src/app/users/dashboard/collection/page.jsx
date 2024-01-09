import Header from "@/app/Component/Dashboard/Header"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"
import { authUserSession } from "@/libs/authLibs"

const Page = async () => {
    const user = await authUserSession()
    const collection = await prisma.collection.findMany({where: {user_email: user.email}})

    console.log(collection)
 
    return(
        <section className="mt-4 px-4 w-full">
            <Header title={"My Collection"}/>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {collection.map((collect, index) => {
                    return  <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="border-2 border-color-accent relative">
                                <Image src="" width={350} height={350} alt="" className="w-full"/>
                                    <div className="w-full bg-color-accent absolute bottom-0 flex justify-center items-center h-16">
                                        <h5 className="text-xl text-center">Judul</h5>
                                     </div>
                                </Link>
                })}
            </div>
        </section>
    )
}

export default Page