import React from "react";
import { Link } from "react-router-dom";
import "./HistoryInventory.css";
export default function HistoryInventory() {
  return (
    <div className="ParentParent">
      <div className="InvenCardParent">
        <Link to="/WithDraHistory" className="InventorySysCards">
          <div>
            <div class="card #76ff03 blue accent-3">
              <div class="card-content white-text">
                <span class="card-title">Withdraw History </span>
                <p>History</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/DeleHistory" className="InventorySysCards">
          <div>
            <div class="card #ff3d00 red accent-3">
              <div class="card-content white-text">
                <span class="card-title">Delete History </span>
                <p>Add Item</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
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
