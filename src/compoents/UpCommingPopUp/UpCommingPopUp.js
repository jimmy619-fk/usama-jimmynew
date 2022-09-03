import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./UpComming.css";
export default function UpCommingPopUp() {
  let [PopData, SetPopUp] = useState([]);
  let Dats = useSelector((comming) => {
    return comming.Userlogin.CurrentUser;
  });

  let data = {
    Data: Dats.Name,
  };

  useEffect(async () => {
    const myResponse = await axios.post("/findingthepopupdetail", data);
    console.log(myResponse.data);
    SetPopUp(myResponse.data);
  }, []);

  return (
    <>
      <h4 className="Heading">Up Comming Notifications</h4>
      <table className="TableSetting centered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Equipment Name</th>
            <th>
              Notification Date
              <br />
              (YYYY-MM-DD)
            </th>
          </tr>
        </thead>

        <tbody>
          {PopData.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.User}</td>
                <td>{val.Name}</td>
                <td>{val.notificationDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="CalBut">
        <Link to="/typemaintainance">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </>
  );
}
