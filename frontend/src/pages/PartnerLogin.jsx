import React from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "../styles/auth.css"

export default function PartnerLogin() {

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/user/foodpartner/login", // ✅ backend port
        {
          email: e.target.email.value,
          password: e.target.password.value
        },{withCredentials:true},

        
      )

      console.log(res.data)

      alert("Login Successful ✅")

      // optional: save token
      // localStorage.setItem("token", res.data.token)

      navigate("/") // redirect after login

    } catch (err) {

      if (err.response) {
        alert(err.response.data.message || "Invalid credentials ❌")
      } else {
        alert("Server not running ❌")
      }

      console.log(err)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <h2 className="auth-title">Partner Login</h2>
          <div className="auth-sub">
            Sign in to manage your menu and orders.
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>

          <div className="field">
            <label>Business Email</label>
            <input name="email" type="email" required />
          </div>

          <div className="field">
            <label>Password</label>
            <input name="password" type="password" required />
          </div>

          <div className="actions">
            <button className="btn">Sign in</button>
          </div>

        </form>

        <div className="auth-switch">
          New partner? 
          <Link to="/food-partner/register"> Partner Signup</Link> · 
          <Link to="/user/register"> User Signup</Link>
        </div>

      </div>
    </div>
  )
}
