import React from "react";
import "./SuggestionandFeedback.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

export default function SuggestionandFeedback() {
  let { register, handleSubmit, errors } = useForm();
  const [nameha, setnameha] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [em, setem] = useState("");
  const [sub, setsub] = useState("");
  const [sug, setsug] = useState("");

  let Suggesti = (data) => {
    console.log(data);

    axios
      .post("/Suggestion", data)
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
    setem("");
    setsub("");
    setsug("");
  };
  return (
    <div className="ParentSeettiinngg">
      <div class="row">
        <form class="col s12 center-align" onSubmit={handleSubmit(Suggesti)}>
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
                {...register("email", { required: true })}
                placeholder="Email"
                value={em}
                onChange={(event) => {
                  setem(event.target.value);
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
              <textarea
                cols="20"
                className="Suggestionandmore"
                {...register("Message", { required: true })}
                value={sug}
                onChange={(event) => {
                  setsug(event.target.value);
                }}
              ></textarea>
              <label> Suggestion</label>
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
