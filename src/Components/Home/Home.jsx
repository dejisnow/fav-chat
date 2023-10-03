import React, { useState, useRef } from 'react'
import './home.css'
import Cookies from 'universal-cookie'
import { Login } from '../Register and Login/Login'
import { MainChat } from '../Chat folder/MainChat/MainChat'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

//Svg
import svgChat from '../svg files/undraw_group_chat_re_frmo.svg'
import svgMsg from '../svg files/undraw_chatting_re_j55r.svg'

const cookie = new Cookies()


export const Home = () => {
  const [userAuth ,setUserAuth] = useState(cookie.get('user-token'))
  const [channel, setChannel] = useState(null)
  const inputRef = useRef(null)
  function enterChat(e){
    e.preventDefault()
    setChannel(inputRef.current.value)

  
}
const signout = async ()=>{
  await signOut(auth);
  cookie.remove('user-token');
  setUserAuth(false);
  setChannel(null);
}

  if(!userAuth){
   return <Login authCheck={setUserAuth}
   />
  }else{
return(
  channel ? <MainChat currentChannel={ channel}
  channelTitle={channel} 
  handleSignout= {signOut} /> :
  <div>
    <div className='gateway__div'>
   
    <div className='filter__div1'>

    </div>
    <img className='svg__chat' src={svgChat} />
    <div className='filter__div2'>
    </div>
    <img className='svg__msg' src={svgMsg} />
    <div className='gateway__input'>
      <div className='gateway__header'>
      <h2>Enter Channel Name</h2>
      </div>
   
        <div className='input__div'>
        <input ref={inputRef} type='text' className='channel_input'/>
       

        </div>
        <div className='gateway__btn'>
        <button onClick={enterChat} className='enter__chat'>Enter Channel</button>

        </div>
       
      </div>
     </div>
     <button className='gatewaySignoutBtn' onClick={signout}>Sign out</button>
    </div>
  )

  
}
}