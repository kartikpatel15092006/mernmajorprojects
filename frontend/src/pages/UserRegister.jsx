import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'
import axious from "axios"
import { useNavigate } from 'react-router-dom'  
export default function UserRegister(){
  const navigate= useNavigate();
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Create an account</h2>
          <div className="auth-sub">Sign up to start ordering from nearby partners.</div>
        </div>
        <form className="auth-form" onSubmit={async (e)=>{e.preventDefault()
        const fullName= e.target.fullname.value;
        const email= e.target.email.value;
        const password= e.target.password.value;

        const user={fullName,email,password};
        const response= await axious.post("http://localhost:3000/api/auth/user/register",user,{withCredentials:true})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err),);


        navigate('/');

        }}>
          <div className="field">
            <label>Full name</label>
            <input name="fullname" type="text" placeholder="Jane Doe" />
          </div>
          <div className="field">
            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input name="password" type="password" placeholder="Create a password" />
          </div>
          <div className="actions">
            <div></div>
            <button className="btn">Create account</button>
          </div>
        </form>
        <div className="auth-switch">Already a partner? <Link to="/food-partner/register">Partner Signup</Link></div>
      </div>
    </div>
  )
}
