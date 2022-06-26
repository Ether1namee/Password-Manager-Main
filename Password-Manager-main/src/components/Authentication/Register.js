import React, {useState} from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import dotenv from 'dotenv'
import axios from 'axios';

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    if(password != confirmPassword){
      alert("The passwords didn't match. Try again.")
    }
    else{

    
    const cryptoJS = require("crypto-js");
    //console.log("Secret key is: ",process.env.REACT_APP_KEY)
    const encryptedPassword = cryptoJS.AES.encrypt(password, process.env.REACT_APP_KEY).toString();
    //console.log(encryptedPassword)

    //const decrypt = cryptoJS.AES.decrypt(encryptedPassword, process.env.REACT_APP_KEY);
    //console.log(decrypt.toString(cryptoJS.enc.Utf8))
    const body = {
      email: email,
      password: encryptedPassword
    }
    axios({
        method: 'post',
        url: 'http://localhost:7000/api/register',
        data: body
        
    }).then(() => {
      navigate('/login');
    })
    .catch(() => {
      alert("Something went wrong. Try again later")
    })
  }
  }

  return (
    <div>
          <div className="login-form">

              <form onSubmit={register}>

                <h1>Register</h1>
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
                  <div className="input-field">
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        required="true"
                        onChange={(event) =>{
                          setConfirmPassword(event.target.value)
                        }}
                    />
                  </div>
                </div>
                <div className="action">
                  <button>Register</button>
                  <button onClick={() => navigate('/login')}>Sign in</button>
                </div>

              </form>

        </div>
    </div>
  )
}

export default Register