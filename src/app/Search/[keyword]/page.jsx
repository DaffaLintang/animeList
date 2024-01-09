import AnimeList from "@/app/Component/AnimeList"
import Header from "@/app/Component/AnimeList/Header"
import { getAnimeResponse } from "@/libs/api-libs"
 const Page = async ({params}) => {
   const { keyword } = params 
  const decodeKeyword = decodeURI(keyword)
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`)
  // const searchAnime = await response.json()
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)

  return (
   <section>
    <Header title={`Pencarian Untuk ${decodeKeyword}...`} />
    <AnimeList api={searchAnime}/>
   </section>
  )
}

export default Page