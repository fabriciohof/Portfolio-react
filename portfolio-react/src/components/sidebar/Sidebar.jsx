import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.png";

const sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav-logo">
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link"></a>
              <i className="icon-home"></i>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link"></a>
              <i className="icon-user"></i>
            </li>

            <li className="nav-item">
              <a href="#services" className="nav-link"></a>
              <i className="icon-briefcase"></i>
            </li>

            <li className="nav-item">
              <a href="#resume" className="nav-link"></a>
              <i className="icon-graduation"></i>
            </li>
            
            <li className="nav-item">
              <a href="#portfolio" className="nav-link"></a>
              <i className="icon-layers"></i>
            </li>

            <li className="nav-item">
              <a href="#blog" className="nav-link"></a>
              <i className="icon-note"></i>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link"></a>
              <i className="icon-bubble"></i>
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav-footer">
        <span className="copyright">&copy; 2025 </span>
      </div>
    </aside>
  )
}

export default sidebar