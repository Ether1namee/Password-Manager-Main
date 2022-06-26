import React, { useState } from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { logIn } from '../../redux/auth/authAction';
function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    const cryptoJS = require("crypto-js");
    const encryptedPassword = cryptoJS.AES.encrypt(password, process.env.REACT_APP_KEY).toString();
    const body = {
      email: email,
      password: encryptedPassword
    }
    axios({
        method: 'post',
        url: 'http://localhost:7000/api/login',
        data: body
        
    }).then((res) => {
      console.log(res)
      dispatch(logIn({
        type: "LOG_IN",
        payload: res
      }))
      navigate('/')
    })
    .catch((res) => {
      console.log(res)
      alert("Incorrect username or password")
    })
  }

  return (
    <div>
          <div className="login-form">

              <form onSubmit={login}>

                <h1>Login</h1>
                <div className="content">
                  <div className="input-field">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required="true"
                        onChange={(event) =>{
                            setEmail(event.target.value)
                        }}
                    />
                  </div>
                  <div className="input-field">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required="true"
                        onChange={(event) =>{
                          setPassword(event.target.value)
                        }}
                    />
                  </div>
                </div>
                <div className="action">
                  <button onClick={() => navigate('/register')}>Register</button>
                  <button>Sign in</button>
                </div>

              </form>

        </div>
    </div>
  )
}

export default Login