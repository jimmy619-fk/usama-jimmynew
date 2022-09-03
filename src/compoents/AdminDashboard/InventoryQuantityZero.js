import React from "react";
import { Link } from "react-router-dom";
import "./InventoryQuantityZero.css";
export default function InventoryQuantityZero() {
  return (
    <div className="ParentParent">
      <div className="InvenCardParent">
        <Link to="/QuantityZerolist" className="InventorySysCards">
          <div>
            <div class="card #76ff03 light-green accent-3">
              <div class="card-content white-text">
                <span class="card-title">Product List With Zero Quantity </span>
                <p>History</p>
              </div>
            </div>
          </div>
        </Link>
        {/* <Link to="/QuantityZeroAddUp" className="InventorySysCards">
          <div>
            <div class="card #ff3d00 deep-orange accent-3">
              <div class="card-content white-text">
                <span class="card-title">Adding Quantity of Zero Product </span>
                <p>Add Item</p>
              </div>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}
