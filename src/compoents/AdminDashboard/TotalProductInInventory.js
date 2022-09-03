import React, { useEffect, useRef, useState } from "react";
import "./TotalProductInInventory.css";
import axios from "axios";
import M from "materialize-css";
import { Link } from "react-router-dom";
export default function TotalProductInInventory() {
  let [DispalyData, SetDispalyData] = useState([]);
  let collapsible = useRef();
  useEffect(async () => {
    let resp = await axios.post("/FindingAllInventoryitem");
    SetDispalyData(resp.data);
  }, []);
  if (DispalyData.length) {
    console.log(DispalyData);
  }

  useEffect(() => {
    var instances = M.Collapsible.init(collapsible.current, {});
  }, [DispalyData]);

  return (
    <div>
      <div className="pathwalahissa">
        <h5>Products That Are Not Installed</h5>
      </div>
      <ul ref={collapsible} class="collapsible">
        {DispalyData.map((val) => {
          return (
            <li>
              <div class="collapsible-header CollaHeader">
                <i class="material-icons">details</i>
                <b> Name : </b>
                {val.ProductName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b> Expire Date : </b>
                {val.ExpireDate}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b> Quantity : </b>
                {val.Quantity}
              </div>

              <div class="collapsible-body">
                <p>
                  <b>Product Id :</b> {val.ProductId}
                </p>
                <p>
                  <b>Product Name : </b>
                  {val.ProductName}
                </p>
                <p>
                  <b>Quantity : </b>
                  {val.Quantity}
                </p>
                <p>
                  <b>Expire Date : </b>
                  {val.ExpireDate}
                </p>
                <p>
                  <b>Product Category : </b>
                  {val.ProductCategory}
                </p>
                <p>
                  <b>Manufacture : </b>
                  {val.Mansefacture}
                </p>
                <p>
                  <b>Adding in System : </b>
                  {val.AddingDate}
                </p>
                <p>
                  <b>Adding Person Name : </b>
                  {val.AddingDate}
                </p>
                <p>
                  <b>Product Class : </b>
                  {val.Class}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="CalBut">
        <Link to="/ADinvent">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </div>
  );
}
