import "./Hero.css"
function Hero({carModel,videoStatus,setVideoStatus,setImageNumber,imageNumber}){
    return(
        <div className="hero">
            <div className="text">
                <p>{carModel.text1}</p>
                <p>{carModel.text2}</p>
            </div>
            <div className="explore">
                <p>Explore More</p>
                <i className="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div className="dots-and-play">
                <ul className="dots">
                    <li onClick={()=>setImageNumber(1)} className={imageNumber===1?"li red":"li"}></li>
                    <li onClick={()=>setImageNumber(2)} className={imageNumber===2?"li red":"li"}></li>
                    <li onClick={()=>setImageNumber(3)} className={imageNumber===3?"li red":"li"}></li>
                </ul>
                <div className="play-pause">
                    <i className={videoStatus?"fa-solid fa-pause":"fa-solid fa-play"} onClick={()=>setVideoStatus(!videoStatus)}></i>
                    <p>See The Video</p>
                </div>
            </div>
        </div>
    )
}

export default Hero