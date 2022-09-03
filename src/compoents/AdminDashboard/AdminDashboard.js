import React, { useEffect, useState } from "react";
import "./admindashboard.css";
import { Link } from "react-router-dom";

// for chart
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function AdminDashboard() {
  // let [Data, SetData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .post("/admin")
  //     .then((xyz) => {
  //       console.log(xyz);
  //       SetData(xyz.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);
  const data = [
    {
      name: "Motor & Pump",
      No_of_Assets: 14,
      pv: 7,
      amt: 1400,
    },
    {
      name: "Tanks",
      No_of_Assets: 7,
      pv: 9,
      amt: 1506,
    },
    {
      name: "Valves",
      No_of_Assets: 51,
      pv: 8,
      amt: 989,
    },
    {
      name: "Generators",
      No_of_Assets: 3,
      pv: 12,
      amt: 1228,
    },
    {
      name: "PD Meters",
      No_of_Assets: 10,
      pv: 23,
      amt: 1100,
    },
    {
      name: "LoadingArms",
      No_of_Assets: 10,
      pv: 12,
      amt: 1700,
    },
    {
      name: "FirePumps",
      No_of_Assets: 3,
      pv: 22,
      amt: 1700,
    },
  ];

  return (
    <>
      <div className="adminfulldiv">
        
          <div class="sidebarr" id="sidebarr">
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

           
          </div>
        

        <div class="contentt example" id="rightwalahissa">
          <div className="adminaddition" id="adminaddition">
            <Link to="/ams" className="boxwala cyan" id="dabbaha" >
              <div>
                <h2 className="headstyle">AMS</h2>
                <p className="amskapara">
                  See all the assets in details i.e Product,Service,model,Year
                  of manufacture etc.
                </p>
             
              </div>
            </Link>
            <Link to="/history" className="boxwala red" id="dabbaha" >
              <div>
                <h2 className="headstyle">SEE HISTORY</h2>
                <p className="amskapara">
                  All history of the checklist filled by the users.
                </p>
          
              </div>
            </Link>
            <Link to="/modify" className="boxwala blue" id="dabbaha" >
              <div>
                <h2 className="headstyle">MODIFY CHECKLIST</h2>
                <p className="amskapara">
                  Modify the checklist of all the assets i.e. Add/Delete
                </p>
                
              </div>
            </Link>
            <Link to="/ADinvent" className="boxwala cyan" id="dabbaha" >
              <div >
                <h2 className="headstyle">Inventory System</h2>
                <p className="amskapara">Inventory & its operations</p>
               
              </div>
            </Link>
           
          

            <Link to="/AdSugg" className="boxwala blue" id="dabbaha" >
              <div>
                <h2 className="headstyle">Feedback & Suggestion</h2>
                <p className="amskapara">
                  That component consists of User feedback and Suggestion that
                  can be related to System or Industry Equipment.
                </p>
             
              </div>
            </Link>

            <Link to="/AdmFail" className="boxwala orange" id="dabbaha" >
              <div>
                <h2 className="headstyle">Equipment Failures</h2>
                <p className="amskapara">
                  Accidental Equipment Failures Detail & History
                </p>
                
              </div>
            </Link>
            <Link to="/showusers" className="boxwala red" id="dabbaha" >
              <div>
                <h2 className="headstyle">SHOW USERS</h2>
                <p className="amskapara">
                  Show all the users connected to the system
                </p>
              
              </div>
            </Link>
          </div>
          <div className="graphha"> <ResponsiveContainer  >
            <ComposedChart
              width={400}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="No_of_Assets" barSize={30} fill="#413ea0" />
              <Line type="monotone" dataKey="No_of_Assets" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer></div>
         
        </div>
      </div>
    </>
  );
}
