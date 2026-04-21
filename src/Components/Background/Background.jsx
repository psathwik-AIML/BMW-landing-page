import "./Background.css"
import video from "../../assets/video.mp4"
import car1 from "../../assets/car1.jpg"
import car2 from "../../assets/car2.jpg"
import car3 from "../../assets/car3.jpg"
function Background({videoStatus,imageNumber}){
    if(videoStatus){
        return(
            <video className="background" autoPlay loop muted>
                <source  src={video}/>
            </video>
        )
    }
    else if(imageNumber===1){
        return(
            <img src={car1} className="background"/>
        )
    }
    else if(imageNumber===2){
        return(
            <img src={car2} className="background"/>
        )
    }
    else if(imageNumber===3){
        return(
            <img src={car3} className="background"/>
        )
    }
}
export default Background