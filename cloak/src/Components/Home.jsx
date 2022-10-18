import React from "react"
import img from "../images/frinedsweb.png"
function Home() {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="hometext col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    Your Clowak{" "}
                    <strong className="brand-name">FriendList</strong> is here !
                    !
                  </h1>
                  <h4 className="my-3">
                    {" "}
                    Clowak is here to make <strong>New</strong> Friends .
                  </h4>
                  <div className="">
                    <a href="/" className="btn-get-started">
                      <button>Get Started</button>
                    </a>
                  </div>
                </div>
                <div className="hometext col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={img}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
