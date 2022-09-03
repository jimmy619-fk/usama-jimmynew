// import React from "react";
import "./admindashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import M from "materialize-css";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import ReactToPrint from "react-to-print";
import React, { useEffect, useRef, useState } from "react";
import { myAlert } from "../Helper/Helper";
// import "./Selectmotorview.css";
export default function Modifyfirepump() {
  let { register, handleSubmit } = useForm();
  let [Ques, SetQues] = useState([]);
  let Textarea = useRef();
  let formRef = useRef();
  // let Dispatch = useDispatch();
  let printingData = useRef();
  // let SelectData = useRef();

  let Dats = useSelector((comming) => {
    return comming.Userlogin.CurrentUser;
  });

  useEffect(async () => {
    let resp = await axios.post("/FirePumpQuestion");
    SetQues(resp.data[0].FirePump);
    var instances = M.FormSelect.init(formRef.current);
  }, []);

  let muFun = async (formData) => {
    axios.post("/QuestionOfGeneratorAfterChange", Ques).then((abc) => {
      console.log(Ques);

      myAlert(abc.data);
    });

    axios.post("/ChecklistChangingRecord", {
      Data: "FirePump List Changed By " + Dats.Name,
    });
    // let changing = "Generator List Changed By " + Dats.Name;
    // await axios.post("/ChecklistChangingRecord", "Dats.Name");
    // console.log(changing);

    // await axios.get("/way", "usama").then((abc) => {
    //   // alert(abc.data);
    // });

    // Dispatch({
    //   type: "ChangingData",
    //   payload: changing,
    // });
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

            <Link to="/modifytanksandpipelines">Tanks-and-pipelines</Link>
            <Link to="/modifyfirepump">Modify Fire pumps</Link>
          </div>
        </div>

        <div className="rightwala">
          <div class="contentt">
            <div ref={printingData}>
              <div className="selectmotortyp"></div>

              <form onSubmit={handleSubmit(muFun)} id="myForm">
                <div>
                  <table class="striped centered">
                    <thead>
                      <tr>
                        <th className="widthkum">PUMP PRODUCT</th>
                        {/* <th className="widthkum">ACCEPTANCE CRITERIA</th> */}
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
                            {/* <td>{val.CRITERIA}</td> */}
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
