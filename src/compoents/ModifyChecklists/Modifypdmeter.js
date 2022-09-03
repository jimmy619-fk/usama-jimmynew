// import React from "react";
import "./admindashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import M from "materialize-css";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import React, { useEffect, useRef, useState } from "react";
import { myAlert } from "../Helper/Helper";
// import "./Selectmotorview.css";
export default function Modifypdmeter() {
  let { register, handleSubmit } = useForm();
  let [Ques, SetQues] = useState([]);
  let Textarea = useRef();
  let formRef = useRef();
  let printingData = useRef();
  // let SelectData = useRef();

  let Dats = useSelector((comming) => {
    return comming.Userlogin.CurrentUser;
  });

  useEffect(async () => {
    let resp = await axios.post("/pdmeterQuestion");
    // console.log("server responece", resp.data);
    SetQues(resp.data[0].PDMeter);
    var instances = M.FormSelect.init(formRef.current);
  }, []);

  let muFun = (formData) => {
    axios.post("/QuestionOfPDmeterAfterChange", Ques).then((abc) => {
      myAlert(abc.data);
    });

    axios.post("/ChecklistChangingRecord", {
      Data: "PD Meter List Changed By " + Dats.Name,
    });
  };
  function ManageDelete(event) {
    event.preventDefault();

    let temp = Number(event.target.value);

    Ques.splice(temp, 1);
    console.log(Ques);
    SetQues([...Ques]);
  }

  function AddingRow() {
    let Name = prompt("Please Enter your Category");
    let CRITERIA = prompt("Please Enter your New Question");

    // console.log(NewObjData);
    Ques.push({
      Name,
      CRITERIA,
      Extra_info: "",
    });

    SetQues([...Ques]);
  }

  return (
    <>
      <div className="divwala">
        <div className="leftwala">
          <div class="sidebarr">
            <Link to="/admin" class="active">
              ADMIN PANEL
            </Link>

            <Link to="/modifymotorandpump">Modify Motor Work</Link>
            <Link to="/modifyvalves">Modify Valves</Link>
            <Link to="/modifygen">Modify Generators</Link>
            <Link to="/modifypdmeter">Modify PD Meters</Link>
            <Link to="/modifyloadingarms">Modify Loading Arms</Link>

            <Link to="/modifytanksandpipelines">
              Modify Tanks-and-pipelines
            </Link>
            <Link to="/modifyfirepump">Modify Fire pumps</Link>
          </div>
        </div>

        <div className="rightwala">
          <div class="contentt">
            <div ref={printingData}>
              <div className="selectmotortyp">
                {/* <div class="input-field col s6 selectwala">
                  <select ref={formRef}>
                    <optgroup label="MSD">
                      <option value="MSD1">MSD1</option>
                      <option value="MSD2">MSD2</option>
                      <option value="MSD3">MSD3</option>
                    </optgroup>
                    <optgroup label="HSD">
                      <option value="HSD1">HSD 1</option>
                      <option value="HSD2">HSD 2</option>
                      <option value="MSD3">MSD 3</option>
                    </optgroup>
                    <optgroup label="DECANTING">
                      <option value="DECANTING1">DECANTING 1</option>
                      <option value="DECANTING2">DECANTING 2</option>
                    </optgroup>
                  </select>
                  <label>Select Motor Type</label>
                </div> */}
              </div>

              <form onSubmit={handleSubmit(muFun)} id="myForm">
                <div>
                  <table class="striped centered">
                    <thead>
                      <tr>
                        <th className="widthkum">PUMP PRODUCT</th>
                        <th className="widthkum">ACCEPTANCE CRITERIA</th>
                        <th className="widthkum">DESCRIPTION</th>
                        <th className="widthkum">
                          {/* <img src="plus-sign.png" alt="" /> */}
                          <button onClick={AddingRow} className="desbtn">
                            Add Row
                          </button>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {Ques.map((val, indx) => {
                        return (
                          <tr className="rowkodarmyanmaykro">
                            <td>{val.Name}</td>
                            <td>{val.CRITERIA}</td>
                            <textarea
                              name=""
                              {...register(`${indx}`)}
                              id=""
                              cols="7"
                              rows="1"
                              className="textareatable"
                            ></textarea>
                            <td>
                              <button
                                onClick={ManageDelete}
                                value={indx}
                                className="modifydelbtnha"
                              >
                                Delete Row
                              </button>
                              {/* <img src="delete.png" alt="" /> */}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="parentmainmessageka">
                  <div className="mainmessage">
                    <button
                      class="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      Save
                      <i class="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Rank</th>
              <th>Contact No</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {Data.map((val, indx) => {
              console.log(val);
              return (
                <tr key={indx}>
                  <td>{val.Name}</td>
                  <td>{val.Password}</td>
                  <td>{val.Rank}</td>
                  <td>{val.PhoneNo}</td>
                  <td>{val.Address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
      <div className="CalBut">
        <Link to="/admin">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </>
  );
}
