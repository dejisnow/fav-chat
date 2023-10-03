import React, { useState } from 'react'
import { auth, googleProvider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
//svg
import loginSvg from '../svg files/undraw_texting_re_l11n.svg'
import './login.css'


 export const cookie = new Cookies()
 
export const Login = ({authCheck}) => {
  const [username, setUsername] = useState(null)

const googleSignin = async ()=>{
    try{
  const  userInfo = await  signInWithPopup(auth, googleProvider)
  cookie.set('user-token',userInfo.user.refreshToken)
  authCheck(true)
     
setUsername(userInfo.user.displayName)

    }
    catch(err){
      console.log(err)
    }
 
  }
  return (
 
    
    <div className='login__main'>
      <div className='blob__one'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#ff7f51" d="M51.3,-18.5C56.6,-0.5,44,21.4,23.8,37.1C3.6,52.8,-24.3,62.3,-39.5,51.9C-54.6,41.5,-57,11.1,-48.3,-11.6C-39.6,-34.3,-19.8,-49.4,1.6,-49.9C23,-50.4,46.1,-36.5,51.3,-18.5Z" transform="translate(100 100)" />
</svg>
</div>
      <div className='login__header'>
        <h1><span className='fav'>Fav</span><span>Chat</span></h1>

    <p className='welcome__text'>Welcome to the <span style={{color:' #ff7f51'}}>Fav</span>  <span style={{color:'aqua'}}>chat </span> where conversations come alive!</p>
      <p className='slogan'> <span style={{color:' #ff7f51'}}>  Connect </span><i class='fa fa-circle'></i>  <span style={{color:'aqua'}}>  Share </span> <i class='fa fa-circle'></i>  <span style={{color:'#ff7f51'}}> Explore</span></p>
        </div>

       
          <div className='blob__two'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#ff7f51" d="M51.3,-18.5C56.6,-0.5,44,21.4,23.8,37.1C3.6,52.8,-24.3,62.3,-39.5,51.9C-54.6,41.5,-57,11.1,-48.3,-11.6C-39.6,-34.3,-19.8,-49.4,1.6,-49.9C23,-50.4,46.1,-36.5,51.3,-18.5Z" transform="translate(100 100)" />
</svg>
</div>
  
      <div className='signin__container'> 
      </div> 

      <div className='signin__main'>

            
            
            <form>
              <div className='form__div'>
              <label htmlFor="email">
                    <p>Username</p>
                    <input type='email' className='user__email' />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input type='password' className='password' />
                </label>

              </div>
              

                <div className='join__btn__div'>
                <button  className='join__btn'>Sign in</button>

                </div>
                <div>
                  <div></div>
      <p>Don't have an account ? <Link to='/'>Sign up</Link></p>
   
     
    </div>
                
               
            </form>
            <div><p>OR</p></div>
            <div className='signin__div' >
                <button onClick={googleSignin} className='gg__signin'>Sign in with <i class="fa fa-google">oogle</i></button>

                </div>
            </div>
            <img className='login__svg' src={loginSvg} />
  
   
                
    </div>

  
    
   
  )
}
