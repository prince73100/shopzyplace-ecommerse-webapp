import React, { useRef, useState } from 'react'
import './CSS/loginsignup.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function LoginSignup() {
  const [state, setstate] = useState('login')
  const nameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')

  const navigate   = useNavigate()

  const signUp = async () => {
    const userinfo = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    let resp;
    try {
      const userInfo = JSON.stringify(userinfo)
      resp = await axios.post("http://localhost:8080/user/signupuser", userInfo, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (resp) {
        alert(resp.data.message)
      }
      else {
        alert("Try again")
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }


  const login = async () => {
    const userInp = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    try {
      const userInf = JSON.stringify(userInp)
      const responsed = await axios.post("http://localhost:8080/user/login", userInf, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (responsed) {
        localStorage.setItem('token', responsed.data.token)
        navigate('/')
      }
      else {
        alert("Try again later")
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-failed">
          {state === 'Sign Up' ? <input type="text" placeholder='Your name' ref={nameRef} /> : <></>}
          <input type="email" placeholder='email address' ref={emailRef} />
          <input type="password" placeholder='password' ref={passwordRef} />
        </div>
        <button onClick={() => { state === 'login' ? login() : signUp() }}>continue</button>
        {state === 'Sign Up' ? <p className="loginsignup-login">Already have an account  ? <span onClick={() => { setstate('login') }} > login here </span></p> : <p className="loginsignup-login"> Create an account  ? <span onClick={() => { setstate('Sign Up') }}> click here </span> </p>}


        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing , i agree to the terms of use & privacy policy </p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup
