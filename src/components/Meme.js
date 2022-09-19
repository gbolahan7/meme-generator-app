import React from "react";
import memesData from "../memesData";


function Meme() {

    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage() {
        // console.log("image clicked");
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // const url = memesArray[randomNumber].url
        setMemeImage( memesArray[randomNumber].url)

    }
    return (
        <main>
        <div className="form">
            <input type="text" placeholder="Top Text" className="form--input" />
            <input type="text" placeholder="Bottom Text" className="form--input" />
            <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
        </div>
        <img src={memeImage} className="meme--image"></img>
    </main>
    )
}



export default Meme;