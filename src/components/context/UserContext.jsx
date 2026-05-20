import React, { createContext, useState } from 'react'
import run from "../../gemini";
export const dataContext = createContext() 

function UserContext({children}) {
  
    const [input, setInput] = useState("") 
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompt,setPrevPrompt] = useState([])

    function newChat(){
        setShowResult(false)
        setLoading(false)
    }


    async function send(input) {

        setResultData("")
        setShowResult(true)
        setRecentPrompt(input)
        setLoading(true)
        setPrevPrompt(prev=>[...prev,input])
        //let response = await run(input)
        // setResultData(response.split("**")&&response.split("*"))
        // setLoading(false)
        // setInput("") 

    try {

            let response = await run(input)

            // API failed
            if (!response) {
                setResultData("No response from server")
                return
            }

            // formatting response
            let formattedResponse = response
                .replace(/\*\*(.*?)\*\*/g, "$1")
                .replace(/\*/g, "")

            setResultData(formattedResponse)

        } catch (error) {

            console.log(error)
            setResultData("Something went wrong")

        } finally {

            setLoading(false)
            setInput("")
        }
    }
  
    const data= {
    input,
    setInput,
    send,
    loading,
    setLoading,
    showResult,
    setShowResult,
    resultData,
    setResultData,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    newChat
    }

    return (
    <>
    <dataContext.Provider value={data}>
        {children}
    </dataContext.Provider>
    </>
  )
}

export default UserContext
