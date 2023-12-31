import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className='nav-link active' aria-current='page' to="/">{props.home}</Link>
           </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        </ul>
        <div className={`form-check form-switch me-auto mb-2 mb-lg-0 text-${props.mode==='light'?'dark' :'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode}  type="checkbox"  id="flexSwitchCheckDefault"/>
          <label className="form-check-label " HTMLfor="flexSwitchCheckDefault">Enable {props.mode==="light"?"Dark":"Light"} mode</label>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}