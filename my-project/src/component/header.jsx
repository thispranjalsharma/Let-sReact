import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className="MainSection1">
          <div className="nav" id="Top">
            <div className="logo">
              <a href="#">
                <img
                  src="Images/Icon CkR@4x.png"
                  alt="CKR"
                  style={{ width: "100px" }}
                />
              </a>
            </div>
            <div className="section2">
              <h4>Products</h4>
              <h4>
                <a href="Soulations.html" style={{ textDecoration: "none" }}>
                  Solutions
                </a>
              </h4>
              <h4>
                <a href="Game.html" style={{ textDecoration: "none" }}>
                  Games
                </a>
              </h4>
              {/* <!-- <h4>Learn </h4>
                    <h4>Communtiy </h4>
                    <h4>Suppport </h4>
                    <h4>MarketPlace</h4> --> */}
            </div>
            <div className="section3">
              <div className="circle"></div>
              <div className="textSign">
                <a href="login.html">Sign in</a>
              </div>
            </div>
          </div>

          <div className="buttonOnPage">
            <h1>
              The world's Most open <br /> and advaced real-time <br /> 3D
              creation tool
            </h1>
          </div>
          <button className="button">
            <b>Learn More </b>
            <div></div>
          </button>
        </div>
      </>
    );
  }
}

export default Header;
