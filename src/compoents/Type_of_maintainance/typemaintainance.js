import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./typemaintainance.css";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
export default function Typemaintainance() {
  // let [Data, SetData] = useState([]);

  let Dats = useSelector((comming) => {
    return comming.Userlogin.CurrentUser;
  });

  const notificationDisplayer = async (val) => {
    return Swal.fire({
      title: "SMART REMINDER?",
      text: "Preventive Maintenance Is Pending Of " + val.Name,
      icon: "warning",
      // iconHtml: "?",
      showCancelButton: true,
      confirmButtonText: "OK!",
      cancelButtonText: "Cancel!",
      showCloseButton: true,
    }).then(async (result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        const newTime = moment().add(15, "days").format("YYYY MM DD");
        const response = await axios.post(
          "/MotorandPumpTime?myid=" + Dats.Name + "&Cat=" + val.Name,
          {
            newTime,
          }
        );
        console.log(response);
      }
    });
  };

  useEffect(async () => {
    const CurrentTime = moment().format("YYYY MM DD");
    const conver = CurrentTime.toString();
    const newTime = moment().add(15, "days").format("YYYY MM DD");

    //
    let fucKIng = {
      User: Dats.Name,
    };

    const myResponse = await axios.post("/typemaintainance", fucKIng);

    for (let index = 0; index < myResponse.data.length; index++) {
      const val = myResponse.data[index];
      if (val.User == Dats.Name) {
        if (val.notificationDate < conver) {
          let resp = await axios.post(
            "/MotorandPumpTime?myid=" + Dats.Name + "&Cat=" + val.Name,
            { newTime }
          );
        } else {
          if (val.notificationDate == conver) {
            await notificationDisplayer(val);
          }
        }
      }
    }
  }, []);

  return (
    <div className="fullcard">
      <body className="bodycards" id="aboutus">
        <section>
          <div class="container" id="cards">
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="pred.png" />
                </div>
                <div class="contentBx">
                  <h3>
                    PREDICTIVE <br />
                  </h3>
                </div>
              </div>
              <ul class="sci">
                {/* <Link to={}> */}
                <li>
                  <Link to="/CommingSoon">CLICK TO SELECT</Link>
                </li>
                {/* </Link> */}
              </ul>
            </div>

            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="prev.png" />
                </div>
                <div class="contentBx">
                  <h3>
                    PREVENTIVE
                    <br />
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <Link to="/equipments">CLICK TO SELECT</Link>
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="run.png" />
                </div>
                <div class="contentBx">
                  <h3>
                    RUN-TO-FAILURE
                    <br />
                  </h3>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <Link to="/RuningToFailures">CLICK TO SELECT</Link>
                  {/* <a href="mailto:" target="_blank">
                    CLICK TO SELECT
                  </a> */}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </body>
      <div className="CalBut2">
        <Link to="/Calculator">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="budget2.png" />
        </Link>
      </div>
    </div>
  );
}
