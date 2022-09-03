import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./Pdmeter.css";
import { useForm } from "react-hook-form";
import M from "materialize-css";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import moment from "moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// Motorms
export default function Pdmeters() {
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
    SetQues(resp.data[0].PDMeter);
    var instances = M.FormSelect.init(formRef.current);
  }, []);

  let muFun = (formData) => {
    let Final = [];
    Ques.map((val, indx) => {
      val.Extra_info = formData[`${indx}`];
      Final.push(val);
    });

    let axx = {
      mainDescription: Textarea.current.value,
      PumpType: formRef.current.value,
      Feedback: Final,
      PumpCategory: formRef.current.value.slice(0, -2),
      SubmittingTime: new Date().toLocaleString(),
      SubmittBy: Dats.Name,
      ServerLog: moment().format("MM YYYY"),
    };
    console.log(axx);

    let category = "PD-METER";

    axios.post("/CompleteData?myid=" + category, axx).then((abc) => {
      console.log(abc.data);
    });

    document.getElementById("myForm").reset();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully Succeeded",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div id="dataha" ref={printingData}>
        <div className="LoggandDate">
          <img src="fossilenergy.png" alt="" className="logofossil" />
          <h6>Date : {moment().format("YYYY MM DD")}</h6>
        </div>
        <div className="selectmotortyp">
          <div class="input-field col s6 selectwala">
            <select ref={formRef}>
              <optgroup label="MS-PD-HSD">
                <option value="MS-PD-HSD-1">MS-PD-HSD-1</option>
                <option value="MS-PD-HSD-2">MS-PD-HSD-2</option>
                <option value="MS-PD-HSD-3">MS-PD-HSD-3</option>
                <option value="MS-PD-HSD-4">MS-PD-HSD-4</option>
                <option value="MS-PD-HSD-5">MS-PD-HSD-5</option>
              </optgroup>
              <optgroup label="MS-PD-PMG">
                <option value="MS-PD-PMG-1">MS-PD-PMG-1</option>
                <option value="MS-PD-PMG-2">MS-PD-PMG-2</option>
                <option value="MS-PD-PMG-3">MS-PD-PMG-3</option>
                <option value="MS-PD-PMG-4">MS-PD-PMG-4</option>
                <option value="MS-PD-PMG-5">MS-PD-PMG-5</option>
              </optgroup>
            </select>
            <label>Select PD meter</label>
            <ReactToPrint
              trigger={() => (
                <a class="btn-floating btn cyan pulse" id="printwalaicon">
                  <i class="material-icons">print</i>
                </a>
              )}
              content={() => printingData.current}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(muFun)} id="myForm">
          <div>
            <table class="striped centered">
              <thead>
                <tr>
                  <th className="widthkum">CHECKPOINTS</th>
                  <th className="widthkum">ACCEPTANCE CRITERIA</th>
                  <th className="widthkum">DESCRIPTION</th>
                  {/* <th className="widthkum">
                    <img src="plus-sign.png" alt="" />
                   
                  </th> */}
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
                      {/* <td>
                      
                        <img src="delete.png" alt="" />
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="parentmainmessageka">
            <div className="mainmessage">
              <textarea
                name=""
                ref={Textarea}
                id="MainBoxMessage"
                cols="20"
                className="mainmessagekatextarea"
              ></textarea>
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
        <div className="CalBut">
          <Link to="/equipments">
            {/* <img src="/calculator.png" /> */}
            {/* <img src="budget.png" /> */}
            <img src="previous.png" />
          </Link>
        </div>
      </div>
    </>
  );
}
