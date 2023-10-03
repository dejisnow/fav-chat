import React from 'react'
import './login.css'
//import { auth, googleProvider } from '../firebase'
//import { signInWithPopup } from 'firebase/auth'
//import Cookies from 'universal-cookie'

//const cookie = new Cookies()
export const Register = () => {
//const [username, setUsername] = useState(null)

  const googleSignin = async ()=>{
    try{
     //const userInfo =  await signInWithPopup(auth, googleProvider)


    }
    catch(err){
      console.log(err)
    }
 
  }
  return (
    <div className='register__main'>
        <div className='register__div'>
  
          
                <div className='register__gg__div' >
                <button onClick={googleSignin} className='gg__register__btn'>Sign up with google</button>

                </div>
                <p className='or__text'>or</p>
            
            <form>
                <label htmlFor="regemail">
                    <span>Email</span>
                    <input type='email'  className='reg__email' />
                </label>
                 <label htmlFor="regUname">
                    <span>Create Username</span>
                    <input type='text'  className='reg__uname' />
                </label>

                <label htmlFor="password">
                    <span>Create Password</span>
                    <input type='password' className='reg__password' />
                </label>
                <button>Signup</button>
            </form>

            <div>
      <p>Already have an account ? <span>Log in</span></p>
    </div>
                
    </div>


    </div>
  )
}
