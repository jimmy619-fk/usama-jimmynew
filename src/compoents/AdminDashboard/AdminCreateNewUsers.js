import React from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { myAlert } from "../Helper/Helper";

export default function CreateNewUsers() {
  let { register, handleSubmit, errors } = useForm();
  let Suggesti = (data) => {
    // console.log(data);

    axios
      .post("/CreatingUser", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) myAlert(res.data.message);
        else {
          myAlert(res.data.message);
          //  alert(res.data.message);
          // if (res.data.Message) {
          //   alert(res.data.Message);
          // } else {
          //   document.getElementById("AddingUser").reset();
          //   alert(data.data);
          // }
        }
      })
      .catch((err) => {});
  };
  return (
    <div className="ParentSeettiinngg">
      <div class="row">
        <form
          class="col s12 center-align"
          id="AddingUser"
          onSubmit={handleSubmit(Suggesti)}
        >
          <div class="row">
            <div class="input-field col s6">
              <input
                {...register("Name", { required: true })}
                placeholder="Name"
              />
            </div>
            <div class="input-field col s6">
              <input
                {...register("PhoneNo", {
                  required: true,
                  pattern: /^[0-9]{11}$/,
                })}
                placeholder="PhoneNo According to(03XXXXXXXXX)"
              />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input
                {...register("Password", { required: true })}
                placeholder="Password"
              />
            </div>
            <div class="input-field col s6">
              <input
                {...register("Rank", { required: true })}
                placeholder="Rank"
              />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                {...register("Address", { required: true })}
                placeholder="Address"
              />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <fieldset>
                Role ? : &nbsp; &nbsp; &nbsp;
                <span>
                  <label>
                    <input
                      name="group1"
                      type="radio"
                      value={"worker"}
                      checked
                      {...register("Role")}
                    />
                    <span>Worker &nbsp; &nbsp; &nbsp;</span>
                  </label>
                </span>
                <span>
                  <label>
                    <input
                      name="group1"
                      type="radio"
                      value={"admin"}
                      {...register("Role")}
                    />
                    <span>Admin</span>
                  </label>
                </span>
              </fieldset>
            </div>
          </div>

          <button class="waves-effect waves-light btn" type="submit">
            Save
          </button>
        </form>
      </div>
      <div className="CalBut">
        <Link to="/showusers">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </div>
  );
}
