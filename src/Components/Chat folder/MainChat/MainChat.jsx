import React, { useEffect, useRef, useState } from 'react'
import { addDoc, collection, onSnapshot, query, serverTimestamp, where,orderBy } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import './mainchat.css'
import { useNavigate } from 'react-router-dom'


export const MainChat = ({currentChannel,channelTitle }) => {
  const chatDiv = document.querySelector('.chat__div')
  const [chat , setChat] = useState('');
  const chatRef = collection(db,'chats');
  const [allChat,setAllchat] = useState([]);
  const [users, setUsers] = useState(0);
  const inputRef = useRef(null);
  const usersSet= new Set();


  const navigate = useNavigate()

 

  const handleRef =() =>{
    inputRef.current.focus()
  }


  //Listening to any change in the app
  //onSnapShot listens to changes
  useEffect(()=>{
    //query is a function from firestore that creates a new query instance
    //where allows us to specify certain conditions relating to the query 
    const queries = query(chatRef, where('currentChannel','==', currentChannel), orderBy('timeStamp'))
const subscribe =  onSnapshot(queries,(shot)=>{
      let allMessages =[]; //all messages array
      shot.forEach(element => {
        //element is an object that has a 'data' function 
        allMessages.push({...element.data() , id:element.id})
    
      });
  setAllchat(allMessages)
  setUsers(usersSet.size)
 
    })
    return ()=> subscribe()
  },[users,allChat])

 async function handleSubmit(e){
    e.preventDefault()
    if(chat === '') return
    await addDoc(chatRef,
      {
        user: auth.currentUser.displayName,
        text: chat, //user chat
        timeStamp: serverTimestamp(),
      currentChannel,
      imageUrl:auth.currentUser.photoURL
      

      })
      setChat('');
      chatDiv.scrollTop = chatDiv.scrollHeight;
      
    

  }

  return (

 
    <div className='mainchat__div'>
      <div>
        <h2 classNmae='chat__header'><span className='fav__title'>{channelTitle} </span><span className='fav__channel'> Channel</span></h2>
        <div className='active__users'>
          <p>{users} fav(s) online</p>
        </div>
        <div className='text__div'>
          {allChat.map((msg)=>{
            usersSet.add(msg.user)
            
            //.sort((a,b)=>{ return a.timeStamp - b.timeStamp})
          
            return(
              
              <div  className='chat__div' key={msg.id}>
                
                <div className='displayImg__div'>

                <img className='profile__img' src={msg.imageUrl} alt='dp'/>
                <div className='online'></div>
                </div>
                <div className='chat__info__div'>
                {/* <button className='delete__chat'>delete </button> */}
                  <p className='username'>{msg.user}</p><p className='chat__text' >{msg.text}</p>
                 </div>
                 
              </div>

            ) 

          }
           )}

        </div>
                
       
       
      </div>
      <form onSubmit={handleSubmit} className='chat__form'>
          <input ref={inputRef} onChange={(e)=> setChat(e.target.value)}
          value={chat}
          type='text' className='chat__input' />

          <button onClick={handleRef} type='submit' className='submit__btn'>Send</button>
          
          
        </form> 
        
        <button className='leaveBtn' onClick={()=> navigate(0)}>Leave Room</button>


      </div>

  
  )
}
