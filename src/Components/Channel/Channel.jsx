import React from 'react'
import { useState } from 'react'
import './channel.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
//import { MainChat } from '../Chat folder/MainChat/MainChat'


export const Channel = () => {
// const navigate = useNavigate()
 const [channel, setChannel] = useState(null)
  const inputRef = useRef(null)

    function enterChat(e){
      e.preventDefault()
      setChannel(inputRef.current.value)
   
      

    
  }
  return (
    <div>
        <div>
        <h2>Enter Channel Name</h2>
        <div>
            <h3>Trending channels</h3>
            <span>Finance 101</span><span>AI Room</span><span>Tech trends</span>
            <span>Apple Family</span>
        </div>
        <div>
          

       
            <div>
            <input ref={inputRef} type='text' className='channel_input'/>
            <button onClick={enterChat} className='enter__chat'>Enter</button>

            </div>

  
           
        </div>


        </div>


    </div>
  )
}
