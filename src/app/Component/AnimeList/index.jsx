'use client'

import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const AnimeList = ({api}) => 
{
    return (
        <div className="grid md:grid-cols-4 sm:md-grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
                        <Image src={anime.images.webp.image_url} width={350} height={350} className="w-full max-h-80 w-64"/>
                        <div className="flex justify-between  pt-2  md:text-xl text-md">
                            <h5>{anime.title}</h5>
                            <h5>{anime.type}</h5>
                        </div>
                       {anime.score ?  <div className="flex items-center gap-2">
                            <Star size={16} className=""/>
                            <h5 className="">{anime.score}</h5>
                        </div> : null }
                      
                    </Link>
                )
            })}
       </div>
        
    )
}
export default AnimeList;