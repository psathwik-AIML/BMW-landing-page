import { useEffect, useState } from "react"
import Background from "./Components/Background/Background"
import Navabar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
function App(){
  const carModels=[
    {text1:"BMW",text2:"9 Series"},
    {text1:"BMW",text2:"4 Series"},
    {text1:"BMW",text2:"7 Series"}
  ]
  // use state to hold car image count 
  const[imageNumber,setImageNumber]=useState(1)
  // use state to hold video status 
  const[videoStatus,setVideoStatus]=useState(false)
  // use effect  
  useEffect(()=>{
    if(videoStatus) return
    let i=setInterval(()=>{
      setImageNumber((prev)=>prev==3?1:prev+1
      )
    },3000)

    return ()=>clearInterval(i)
  },[videoStatus])
  return(
    <>
    <Background videoStatus={videoStatus} imageNumber={imageNumber}/>
    <Navabar/>
    <Hero carModel={carModels[imageNumber-1]} videoStatus={videoStatus} setVideoStatus={setVideoStatus} setImageNumber={setImageNumber} imageNumber={imageNumber}/>
    </>
  )
}
export default App