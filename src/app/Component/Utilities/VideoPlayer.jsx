"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVidoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const options = {
        width: "300",
        height: "250" 
    }

    const Player = () => {
       return <div className="fixed bottom-2 right-2">
            <button
            onClick={handleVidoPlayer} 
            className="text-color-primary float-right bg-color-secondary px-3 mb-1">
              X
            </button>
            <YouTube 
            videoId={youtubeId} 
            onReady={(e) => e.target.pauseVideo()}
            opts={options}
            />
        </div>
    }

    const Trailer = () => {
        return <button className="rounded fixed bottom-3 right-3 w-32 bg-color-primary text-color-dark hover:bg-color-accent transition-all shadow-xl " onClick={handleVidoPlayer}>Tampilkan Trailer</button>
    }
    return isOpen ? <Player /> : <Trailer/>
}

export default VideoPlayer