import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: props.mode === 'light'? '#0039a6' : '#240000'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{fontWeight: 700, fontSize: 45,fontFamily:'sans-serif', color: "white"}} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" style={{fontWeight: 600, fontSize: 30, color: "white"}} aria-current="page" to="/TextUtils">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{fontWeight: 600, fontSize: 30, color: "white"}} to="/about">{props.aboutSite} </Link>
        </li>

      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch" style={{marginRight:"20px", fontWeight: 600, fontSize: 30,color: "white",float:"right",fontFamily:"arial"}}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
)
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutSite: PropTypes.string,
    mode: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set Title Here",
    aboutSite: "About Text Here"
}