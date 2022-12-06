import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./style.css";

function AuthLayout() {
  return (
    <div class="auth-container">
      <div className="auth-menu">
        <Link to="/auth">Giriş Yap</Link>
        <Link to="/auth/register">Kayıt Ol</Link>
      </div>
      
        
        
        <Outlet />
    </div>
  )
}

export default AuthLayout;