import * as React from "react"
import '../styles/index.scss'
import Navbar from "../components/Navbar";
import HomeVideo from '../videos/home.mp4';
import ReactPlayer from "react-player";

const IndexPage = () => {
    return (
        <div className="app">
            <Navbar/>
            <div className="home-video__container">
                <div className="player__container">
                    <ReactPlayer url={HomeVideo} playing={true} muted={true} loop={true} width={1000} height={500}/>
                </div>
            </div>
        </div>
    )
}

export default IndexPage
