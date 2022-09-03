import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./motorms.css";
import moment from "moment";
import { useForm } from "react-hook-form";
import M from "materialize-css";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";
import { myAlert } from "../Helper/Helper";
import Swal from "sweetalert2";
export default function Motorms() {
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
    let resp = await axios.post("/motorms");
    // console.log("server responece", resp.data[0].MotorPump);

    SetQues(resp.data[0].MotorPump);

    var instances = M.FormSelect.init(formRef.current);
  }, []);

  let muFun = (formData) => {
    let Final = [];
    Ques.map((val, indx) => {
      val.Extra_info = formData[`${indx}`];
      Final.push(val);
    });

    // let MainBox = {
    //   mainDescription: formData.Main_Message,
    // };

    // Final.push(MainBox);

    // let category = "Motor";
    // let PumpType = "HSD";
    // console.log(formRef.current.value);
    console.log(formRef.current.value.slice(0, -1));

    // let CurrentTime = moment().format("MM YYYY");
    // console.log(CurrentTime);
    // console.log(typeof(CurrentTime));

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

    //// for learing
    // // axios
    // //   .post("/CompleteData?myid=" + category + "&Dil=" + PumpType, Final)
    //// //   .then((abc) => {
    //     console.log(abc.data);
    // //   });

    let category = "Motor";

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
    <div ref={printingData}>
      <div className="LoggandDate">
        <img src="fossilenergy.png" alt="" className="logofossil" />
        <h6>Date : {moment().format("YYYY MM DD")}</h6>
      </div>
      <div className="selectmotortyp">
        <div class="input-field col s6 selectwala">
          <select ref={formRef}>
            <optgroup label="MS">
              <option value="PS-PMG-1">PS-PMG-1</option>
              <option value="PS-PMG-2">PS-PMG-2</option>
              <option value="PS-PMG-3">PS-PMG-3</option>
              <option value="PS-PMG-4">PS-PMG-4</option>
              <option value="PS-PMG-5">PS-PMG-5</option>
            </optgroup>
            <optgroup label="HSD">
              <option value="PS-HSD-1">PS-HSD-1</option>
              <option value="PS-HSD-2">PS-HSD-2</option>
              <option value="PS-HSD-3">PS-HSD-3</option>
              <option value="PS-HSD-4">PS-HSD-4</option>
              <option value="PS-HSD-5">PS-HSD-5</option>
            </optgroup>
            <optgroup label="DECANTING">
              <option value="DECANTING1">DECANTING 1</option>
              <option value="DECANTING2">DECANTING 2</option>
            </optgroup>
          </select>
          <label>Select Motor Type</label>
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
                  <button>ADD ROW</button>
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
  );
}
