import Link from "next/link"
import AnimeList from "./Component/AnimeList"
import Header from "./Component/AnimeList/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs"

 const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recomendationAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recomendationAnime = reproduce(recomendationAnime, 16)

 
  return (
    <>
   <section>
    <Header title="Paling Populer" linkHref="/Populer" linkTitle="Lihat Semua"/>
    <AnimeList api={topAnime}/>
   </section>
   <section>
    <Header title="Rekomendasi Anime"/>
    <AnimeList api={recomendationAnime}/>
   </section> 
    </>
   
  )
}

export default Page