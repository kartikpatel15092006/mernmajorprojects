import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

export default function PartnerLogin(){
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Partner Login</h2>
          <div className="auth-sub">Sign in to manage your menu and orders.</div>
        </div>
        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="field">
            <label>Business Email</label>
            <input type="email" placeholder="partner@shop.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <div className="actions">
            <a className="link" href="#">Forgot?</a>
            <button className="btn">Sign in</button>
          </div>
        </form>
        <div className="auth-switch">New partner? <Link to="/food-partner/register">Partner Signup</Link> · <Link to="/user/register">User Signup</Link></div>
      </div>
    </div>
  )
}
