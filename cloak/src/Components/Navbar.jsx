import React from "react"
import { BsTelephoneFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
              <BsTelephoneFill />
              <Link  className="navbar-brand px-2" to="/">
                CloakSolutions
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="/navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link  className="nav-link" to="/" >
                      Home <span className="sr-only"></span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/Friends">
                      Friends
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
