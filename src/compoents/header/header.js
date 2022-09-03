import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StoreData from "../../store/store";
import "./header.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  let navigate = useNavigate();

  let LogOut = () => {
    StoreData.dispatch({
      type: "USER_LOGOUT",
      payload: {},
    });
    navigate("/");
  };

  // Navigtor
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
  }, [window.location.pathname]);

  return (
    <div>
      <nav>
        <div class="nav-wrapper  black" id="navha">
          <Link to="" className="brand-logo">
            <img src="fossilenergy.png" alt="" className="logofossil" />
          </Link>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/typemaintainance">
                <a href="#aboutus">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/aboutuss">
                <a href="#mainaboutus">About</a>
              </Link>
            </li>
            <li>
              {/* <img src="out.png" alt="" className="outwalaicon" /> */}
              <a onClick={LogOut}>LOG OUT</a>
            </li>
            {/* <li>
              <a >Contact Us</a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
