import React, { useEffect, useRef, useState } from "react";
import "./InventoryWithdrawHistory.css";
import M from "materialize-css";

import axios from "axios";
import { Link } from "react-router-dom";
import { myAlert } from "../Helper/Helper";

export default function InventoryWithdrawHistory() {
  let [DispalyData, SetDispalyData] = useState([]);
  let collapsible = useRef();

  useEffect(async () => {
    let resp = await axios.post("/withdrawhistoryShowing");
    if (resp.data.Message) {
      myAlert(resp.data.Message);
    } else {
      SetDispalyData(resp.data);
    }
  }, []);

  useEffect(() => {
    var instances = M.Collapsible.init(collapsible.current, {});
  }, [DispalyData]);

  console.log(DispalyData);
  return (
    <div>
      <div className="pathwalahissa">
        <h5>Withdraw History</h5>
      </div>
      <ul ref={collapsible} class="collapsible">
        {DispalyData.map((val) => {
          return (
            <li>
              <div class="collapsible-header CollaHeader">
                <i class="material-icons">pages</i>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Name : </b>
                {val.ProductName}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Id : </b>
                {val.ProductId}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Total Withdraw item :</b> {val.WithdrawQuantity}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Withdraw Purpose Was:</b> {val.WithDrawPurpose}
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
                  <b>Remaining Quantity :</b> {val.Quantity}
                </p>
                <p>
                  <b>Withdraw Quantity :</b> {val.WithdrawQuantity}
                </p>
                <p>
                  <b>Adder Person Name :</b> {val.PersonName}
                </p>
                <p>
                  <b>Withdraw Person Name :</b> {val.WithdrawUser}
                </p>
                <p>
                  <b>Adding Date :</b> {val.AddingDate}
                </p>
                <p>
                  <b>Withdraw Date :</b> {val.WithdrawTime}
                </p>
                <p>
                  <b>Manufacture :</b> {val.Mansefacture}
                </p>
                <p>
                  <b>Product Class :</b> {val.Class}
                </p>
                <p>
                  <b>Withdraw Purpose Was :</b> {val.WithDrawPurpose}
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
