import React, { useState } from "react";
import "./EquipmentFailure.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function EquipmentFailure() {
  let { register, handleSubmit } = useForm();
  const [nameha, setnameha] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [sub, setsub] = useState("");
  const [eqno, seteqno] = useState("");
  const [eqname, seteqname] = useState("");
  const [de, setde] = useState("");
  const [co, setco] = useState("");
  let Suggesti = (data) => {
    axios
      .post("EquipmentFailure", data)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your request has been sent successfully ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {});
    setnameha("");
    setphonenumber("");

    setsub("");
    seteqno("");
    setco("");
    setde("");
    seteqname("");
  };
  return (
    <div className="ParentSeettiinngg">
      <div class="row">
        <form
          class="col s12 center-align"
          onSubmit={handleSubmit(Suggesti)}
          id="Fail_02"
        >
          <div class="row">
            <div class="input-field col s6">
              <input
                {...register("Name", { required: true })}
                placeholder="Name"
                value={nameha}
                onChange={(event) => {
                  setnameha(event.target.value);
                }}
              />
            </div>
            <div class="input-field col s6">
              <input
                {...register("PhoneNo", {
                  required: true,
                  pattern: /^[0-9]{11}$/,
                })}
                placeholder="PhoneNo According to(03XXXXXXXXX)"
                value={phonenumber}
                onChange={(event) => {
                  setphonenumber(event.target.value);
                }}
              />
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                {...register("subject", { required: true })}
                placeholder="Subject"
                value={sub}
                onChange={(event) => {
                  setsub(event.target.value);
                }}
              />
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                {...register("EquipmentNo", { required: true })}
                placeholder="Eqiupment Code(#)"
                value={eqno}
                onChange={(event) => {
                  seteqno(event.target.value);
                }}
              />
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                {...register("Equipment", { required: true })}
                placeholder="Equipment Name"
                value={eqname}
                onChange={(event) => {
                  seteqname(event.target.value);
                }}
              />
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input
                {...register("Action", { required: true })}
                placeholder="Action Description"
                value={de}
                onChange={(event) => {
                  setde(event.target.value);
                }}
              />
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <textarea
                cols="20"
                className="Suggestionandmore"
                {...register("Message", { required: true })}
                value={co}
                onChange={(event) => {
                  setco(event.target.value);
                }}
              ></textarea>
              <label> Comments</label>
            </div>
          </div>

          <button
            class="waves-effect waves-light btn"
            type="submit"
            onClick={Suggesti}
          >
            Send
          </button>
        </form>
      </div>
      <div className="CalBut">
        <Link to="/RuningToFailures">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </div>
  );
}
