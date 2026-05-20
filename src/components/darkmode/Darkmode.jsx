import React, { useEffect, useState } from 'react'
import { HiSun } from "react-icons/hi";
import "./Darkmode.css"
import { FaMoon } from "react-icons/fa";

function Darkmode() {

    const[mode, setMode] = useState("darkmode")
    function toggle(){
        if(mode === "darkmode"){
            setMode("lightmode")
        }else{
            setMode("darkmode")
        }
    }

    useEffect(()=>{
        document.body.className = mode
    },[mode])

    return (
     <button className="darkmodebtn" onClick={()=>{
        toggle()
        console.log(mode);
     }}>{mode==="darkmode"?<HiSun />:<FaMoon />}</button>
  )
}

export default Darkmode
