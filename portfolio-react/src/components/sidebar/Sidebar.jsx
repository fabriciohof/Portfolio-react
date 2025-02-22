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
              <a href="#home" className="nav-link">
              <i className="icon-home"></i>
              </a>
              
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
              <i className="icon-user"></i>
              </a>
              
            </li>

            <li className="nav-item">
              <a href="#services" className="nav-link">
              <i className="icon-briefcase"></i>
              </a>
              
            </li>

            <li className="nav-item">
              <a href="#resume" className="nav-link">
              <i className="icon-graduation"></i>
              </a>
              
            </li>
            
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
              <i className="icon-layers"></i>
              </a>
              
            </li>

            <li className="nav-item">
              <a href="#blog" className="nav-link">
              <i className="icon-note"></i>
              </a>
              
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
              <i className="icon-bubble"></i>
              </a>
              
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