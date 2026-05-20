import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import "./Sidebar.css"
import { dataContext } from '../context/UserContext';

function Sidebar() {

  const[extend, setExtend] = useState(false)
  const {send, prevPrompt,newChat} = useContext(dataContext)

  async function loadPrevPrompt(prompt) {
    send(prompt)
  }

  return (
    <div className='sidebar'>

        <GiHamburgerMenu id="ham" onClick={()=>{
          setExtend(prev=> !prev)
        }}/>

        <div className="newchat" onClick={()=>{
          newChat()
        }}>
            <FaPlus />
           {extend? <p>New Chat</p>: null}
        </div>

        {prevPrompt?.map((item,index)=>{
          return(
          <div className="recent" key={index} onClick={()=>{
            loadPrevPrompt(item)
          }}>
            <MdMessage />
            {extend? <p>{item.slice(0,10) + "..."}</p>: null}
          </div>
        )   
        })}
    </div>
  )
}

export default Sidebar
