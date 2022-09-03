import React, { useEffect, useRef, useState } from "react";
import "./InventoryDeleteHistory.css";
import axios from "axios";
import M from "materialize-css";
import { Link } from "react-router-dom";
import { myAlert } from "../Helper/Helper";

export default function InventoryDeleteHistory() {
  let [DispalyData, SetDispalyData] = useState([]);
  let collapsible = useRef();
  useEffect(() => {
    var instances = M.Collapsible.init(collapsible.current, {});
  }, [DispalyData]);
  useEffect(async () => {
    let resp = await axios.post("/FindingDelHistoryShowing");
    if (resp.data.Message) {
      myAlert(resp.data.Message);
    } else {
      SetDispalyData(resp.data);
    }
  }, []);
  // console.log(DispalyData);
  return (
    <div>
      <div className="pathwalahissa">
        <h5>Delete History</h5>
      </div>
      <ul ref={collapsible} class="collapsible">
        {DispalyData.map((val) => {
          return (
            <li>
              <div class="collapsible-header CollaHeader">
                <i class="material-icons">delete_forever</i>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Name : </b>
                {val.ProductName}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Id : </b>
                {val.ProductId}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Deleteing time Quantity :</b> {val.Quantity}
              </div>
              <div class="collapsible-body">
                <p>
                  <b>Id :</b> {val.ProductId}
                </p>
                <p>
                  <b>Name :</b> {val.ProductName}
                </p>
                <p>
                  <b>Category :</b> {val.ProductCategory}
                </p>
                <p>
                  <b>Expire :</b> {val.ExpireDate}
                </p>
                <p>
                  <b>Quantity Was :</b> {val.Quantity}
                </p>

                <p>
                  <b>Deleting Person Name :</b> {val.DeletingUser}
                </p>
                <p>
                  <b>Adding Date :</b> {val.AddingDate}
                </p>
                <p>
                  <b>Deleting Date :</b> {val.DeletingTime}
                </p>
                <p>
                  <b>Manufacture :</b> {val.Mansefacture}
                </p>
                <p>
                  <b>Product Class :</b> {val.Class}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="CalBut">
        <Link to="/histo">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </div>
  );
}
