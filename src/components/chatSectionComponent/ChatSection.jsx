import React, { useContext } from 'react'
import "./ChatSection.css"
import Darkmode from '../darkmode/Darkmode'
import { IoSend } from "react-icons/io5";
import { dataContext } from "../context/UserContext";
import user from "../../assets/user.jpeg";
import Ai from "../../assets/Ai.png"

function ChatSection() {

  let {send,input,setInput,showResult,resultData,recentPrompt,loading} = useContext(dataContext)

  return (
    <div className='chatSection'>
      <div className="topsection">
{!showResult?<div className="headings">
  <span>Hello Naman,</span>
  <span>I'm Your Own Assistant,</span>
  <span>What can I do for you..?,</span>
  
</div>:<div className='result'>
    <div className="userbox">
      <img src={user} alt="" width="60px" /> 
      <p>{recentPrompt}</p>
    </div>
    <div className="aibox">
      <img src={Ai} alt="" width="60px"/> 
      {loading?<div className='loader'>
        <hr />
        <hr />
        <hr />  
      </div>
      :
      <p>{resultData}</p>}
    
    </div> 
  </div>}
      </div>
      <div className="bottomsection">
        <input onChange={(e)=>setInput(e.target.value)} type="text"
         placeholder='Enter the prompt'  value={input}/>
{input? <button id='sendbtn' onClick={()=>{
          send(input)
        }}><IoSend /></button>:null}
        
      <Darkmode/>
      </div>
    </div>
  )
}
export default ChatSection
