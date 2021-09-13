import * as React from "react"
import '../styles/index.scss'
import Navbar from "../components/Navbar";
import ImageCover from "../components/ImageCover";

const IndexPage = () => {
    return (
        <div className="app">
            <title>Pika Chicken</title>
            <Navbar/>
            <ImageCover/>
        </div>
    )
}

export default IndexPage
