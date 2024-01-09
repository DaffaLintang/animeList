import CollectionButton from "@/app/Component/AnimeList/CollectionButton"
import VideoPlayer from "@/app/Component/Utilities/videoPlayer"
import { getAnimeResponse } from "@/libs/api-libs"
import { authUserSession } from "@/libs/authLibs"
import prisma from "@/libs/prisma"
import Image from "next/image"

const Page = async({params: {mal_id}}) => {
    const anime = await getAnimeResponse(`anime/${mal_id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: {user_email : user?.email, anime_mal_id: mal_id}
    })
    return (
        <>
        <div className="pt-4 px-4">
            <h3 className="text-2xl text-color-primary">{anime.data.title} - {anime.data.year}</h3>
            {!collection && user &&  <CollectionButton anime_mal_id={mal_id} user_email={user?.email} image_url={anime.data.images.webp.image_url} anime_title={anime.data.title}/>}
           
        </div>
        <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Rank</h3>
                <p>{anime.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Score</h3>
                <p>{anime.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Members</h3>
                <p>{anime.data.members}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Favorites</h3>
                <p>{anime.data.favorites}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Type</h3>
                <p>{anime.data.type}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Source</h3>
                <p>{anime.data.source}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Episodes</h3>
                <p>{anime.data.episodes}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2 text-center">
                <h3>Status</h3>
                <p>{anime.data.status}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>Duration</h3>
                <p>{anime.data.duration}</p>
            </div>
        </div>
        <div className="pt-4 px-4 text-color-primary flex md:flex-nowrap sm:flex-nowrap flex-wrap gap-2">
            <Image src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-full rounded object-cover"/>
            <p className="text-justify text-xl">{anime.data.synopsis}</p>
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
        </>
            )
}

export default Page