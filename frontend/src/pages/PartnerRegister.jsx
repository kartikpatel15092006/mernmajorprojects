import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'
import axious from "axios"
export default function PartnerRegister(){
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Partner Signup</h2>
          <div className="auth-sub">Create a partner account to list meals and receive orders.</div>
        </div>
        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="field">
            <label>Business name</label>
            <input type="text" placeholder="Joe's Kitchen" />
          </div>
          <div className="field">
            <label>Business email</label>
            <input type="email" placeholder="partner@shop.com" />
          </div>
          <div className="field">
            <label>Contact name</label>
            <input type="text" placeholder="Owner / Manager name" />
          </div>
          <div className="field">
            <label>Phone</label>
            <input type="tel" placeholder="+91 98765 43210" />
          </div>
          <div className="field">
            <label>Address</label>
            <input type="text" placeholder="123 Main St, City, State" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>
          <div className="actions">
            <div></div>
            <button className="btn">Create account</button>
          </div>
        </form>
        <div className="auth-switch">Already have a user account? <Link to="/user/login">User Sign in</Link></div>
        <div className="auth-switch">Or register as a customer: <Link to="/user/register">User Signup</Link></div>
      </div>
    </div>
  )
}
