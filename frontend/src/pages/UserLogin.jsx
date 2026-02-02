import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'
import axious from "axios"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function UserLogin(){
  const navigate= useNavigate();
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">User Login</h2>
          <div className="auth-sub">Access your account to order food.</div>
        </div>
        <form className="auth-form" onSubmit={async (e)=>{e.preventDefault()
const email= e.target.email.value;
const password= e.target.password.value;
const user={email,password};

const response=  await axios.post("http://localhost:3000/api/auth/user/login",user,{withCredentials:true})
.then(res=>{console.log(res.data); navigate('/');})
.catch(err=>console.log(err))


        }}>
          <div className="field">
            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input name="password" type="password" placeholder="••••••••" />
          </div>
          <div className="actions">
            <a className="link" href="#">Forgot?</a>
            <button className="btn">Sign in</button>
          </div>
        </form>
        <div className="auth-switch">New here? <Link to="/user/register">Create account</Link> · <Link to="/food-partner/login">Partner Sign in</Link></div>
      </div>
    </div>
  )
}
