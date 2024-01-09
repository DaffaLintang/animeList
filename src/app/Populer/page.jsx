'use client'

import React ,{ useEffect, useState } from "react"
import AnimeList from "../Component/AnimeList"
import HeaderMenu from "../Component/Utilities/HeaderMenu"
import Pagination from "../Component/Utilities/Pagination"
import { getAnimeResponse } from "../../libs/api-libs"

const Page = () =>  {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    
    const fetchData = async() => {
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(popularAnime)
    }

    useEffect(()=>{
        fetchData()
    }, [page])
    
    return (
        <>
        <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
        <AnimeList api={topAnime}/>
        <Pagination page={page}  lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}

export default Page