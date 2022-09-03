import React from "react";
import { Link } from "react-router-dom";
import "./InventoryCrad.css";
// import "./admindashboard.css";
export default function InventoryCard() {
  return (
    <>
      <div className="divwala">
        <div className="leftwala">
          <div class="sidebarr" id="amsside">
            <Link to="/admin" class="active">
              ADMIN PANEL
            </Link>

            {/* <Link to="/showusers">Show Users</Link> */}
            <Link to="/motorwork">Motor Work</Link>
            <Link to="/valvesmsddata">Valves</Link>
            <Link to="/gendata">Generators</Link>
            <Link to="/pdmeterdata">PD Meters</Link>
            <Link to="/loadingarmsdata">Loading Arms</Link>
            <Link to="/tanksandpipelinesdata">Tanks-and-pipelines</Link>
            <Link to="/firepumpdata">Fire pumps</Link>

            {/* <Link to="/modify">Modify Your Checklists</Link> */}

            {/* <Link to="/history">See History</Link> */}
            {/* <Link to="/ams">AMS</Link> */}
          </div>
        </div>

        <div class="contentt example" id="btns_wala_data">
          <div className="pathwalahissa">
            <h5>Inventory System</h5>
            <div className="CalBut">
              <Link to="/admin">
                {/* <img src="/calculator.png" /> */}
                {/* <img src="budget.png" /> */}
                <img src="previous.png" />
              </Link>
            </div>
          </div>

          {/* <div className="ParentParent">
            <div className="InvenCardParent">
              <Link to="/totalPro" className="InventorySysCards">
                <div>
                  <div class="card #00e676 green accent-3">
                    <div class="card-content white-text">
                      <span class="card-title">Total Available Product</span>
                      <p>Total Product</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/expire" className="InventorySysCards">
                <div>
                  <div class="card #c6ff00 lime accent-3">
                    <div class="card-content white-text">
                      <span class="card-title">This Month Expire</span>
                      <p>This Month Expire Item</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/addPro" className="InventorySysCards">
                <div>
                  <div class="card #69f0ae green accent-2">
                    <div class="card-content white-text">
                      <span class="card-title">Add</span>
                      <p>Add Item</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/remo" className="InventorySysCards">
                <div>
                  <div class="card #ff8a65 deep-orange lighten-2">
                    <div class="card-content white-text">
                      <span class="card-title">Withdraw</span>
                      <p>Withdraw</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/del" className="InventorySysCards">
                <div>
                  <div class="card #212121 grey darken-4">
                    <div class="card-content white-text">
                      <span class="card-title">Delete</span>
                      <p>Delete</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/histo" className="InventorySysCards">
                <div>
                  <div class="card #76ff03 light-green accent-3">
                    <div class="card-content white-text">
                      <span class="card-title"> History</span>
                      <p>History</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/QuanZero" className="InventorySysCards">
                <div>
                  <div class="card #ff3d00 deep-orange accent-3">
                    <div class="card-content white-text">
                      <span class="card-title">Quantity Zero Product</span>
                      <p>Add Item</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div> */}
          <div className="buttonnnn">
            <div className="adminadditionnn">
              <Link to="/addPro" className="boxwala cyan">
                <div>
                  <h2 className="headstyle">Add Items</h2>
                  <p className="amskapara">
                    Add new equipments in an inventory
                  </p>
                  {/* <img 
                  src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                  alt=""
                /> */}
                </div>
              </Link>
              <Link
                to="/totalPro"
                className="boxwala red margin_dedo"
                // id="margin_dedo"
              >
                <div>
                  <h2 className="headstyle">Total Available Items</h2>
                  <p className="amskapara">Stored items in Inveentory </p>
                  {/* <img
                  src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                  alt=""
                /> */}
                </div>
              </Link>
              <Link to="/del" className="boxwala cyan">
                <div>
                  <h2 className="headstyle">Delete Items</h2>
                  <p className="amskapara">
                    You can delete the inventory equipments here
                  </p>
                  {/* <img
                  src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                  alt=""
                /> */}
                </div>
              </Link>
              <Link to="/expire" className="boxwala red margin_dedo">
                <div>
                  <h2 className="headstyle">Expire Items</h2>
                  <p className="amskapara">See all the expiry items here</p>
                  {/* <img 
                  src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                  alt=""
                /> */}
                </div>
              </Link>
              <Link to="/remo" className="boxwala cyan" id="box_of_inventory">
                <div>
                  <h2 className="headstyle">With-Draw</h2>
                  <p className="amskapara">
                    Show all the users connected to the system
                  </p>
                  {/* <img
                  src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                  alt=""
                /> */}
                </div>
              </Link>

              <Link to="/histo" className="boxwala red margin_dedo">
                <div>
                  <h2 className="headstyle">History</h2>
                  <p className="amskapara">
                    History of the Inventory equipments.
                  </p>
                  {/* <img
                    src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                    alt=""
                  /> */}
                </div>
              </Link>

              <Link to="/QuantityZerolist" className="boxwala cyan">
                <div>
                  <h2 className="headstyle">Zero Quantity Products</h2>
                  <p className="amskapara">All the zero quantity equipments</p>
                  {/* <img
                    src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                    alt=""
                  /> */}
                </div>
              </Link>
              <Link to="/Installed" className="boxwala cyan">
                <div>
                  <h2 className="headstyle">Installed Products</h2>
                  <p className="amskapara">
                    All the installed products are shown here
                  </p>
                  {/* <img
                    src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                    alt=""
                  /> */}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
