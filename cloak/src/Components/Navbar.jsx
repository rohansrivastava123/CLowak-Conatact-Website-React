import React from "react"
import { BsTelephoneFill } from "react-icons/bs";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
              <BsTelephoneFill />
              <a className="navbar-brand px-2" href="/">
                CloakSolutions
              </a>
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
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home <span className="sr-only"></span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="/">
                      Friends
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Contact
                    </a>
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
