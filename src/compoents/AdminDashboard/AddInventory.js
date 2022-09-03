import React from "react";
import "./AddInventory.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddInventory() {
  let Dats = useSelector((comming) => {
    return comming.Userlogin.CurrentUser;
  });
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let Suggesti = (data) => {
    // data = { ...data, ProductName: data.ProductName.toLowerCase() };
    data.ProductName = data.ProductName.toLowerCase();
    data.ProductQuantity = parseInt(data.ProductQuantity);
    console.log(data);
    let Filling = Object.assign(
      { AddingPersonName: Dats.Name },
      { AddItemDate: moment().format("LLL") },
      data
    );
    axios
      .post("/InventoryAddingItem", Filling)
      .then((res) => {
        console.log(res.data);
        if (res.data.Id == 1) {
          Swal.fire({
            title: res.data.Message,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        } else if (res.data.id == 2) {
          document.getElementById("AddFormid").reset();

          Swal.fire({
            title: res.data.Message,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        } else {
          return;
        }
      })
      .catch((err) => {});
  };
  return (
    <div>
      <div className="ParentSeettiinngg">
        <div className="pathwalahissa">
          <h5>Add New Product</h5>
        </div>
        <div class="row">
          <form
            class="col s12 center-align"
            id="AddFormid"
            onSubmit={handleSubmit(Suggesti)}
          >
            <div class="row">
              <div class="input-field col s6">
                <input
                  {...register("ProductName", { required: true })}
                  placeholder="Product Name"
                />
              </div>
              <div class="input-field col s6">
                <input
                  {...register("ProductCategory", {
                    required: true,
                  })}
                  placeholder="Product Category"
                />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input
                  {...register("ProductId", { required: true })}
                  placeholder="Product Id"
                />
              </div>
              <div class="input-field col s6">
                <input
                  type="number"
                  {...register("ProductQuantity", {
                    required: true,
                    min: 1,
                  })}
                  placeholder="Product Quantity"
                />
                {errors.ProductQuantity && (
                  <span style={{ color: "red" }}>
                    Quantity Cannot be Zero or Negative Number{" "}
                  </span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="input-field col s6">
                <input
                  type="date"
                  {...register("ProductExpireDate", { required: true })}
                />
                <label for="start">Product Expire Date:</label>
              </div>
              <div class="input-field col s6">
                <input
                  {...register("ProductClass", {
                    required: true,
                  })}
                  placeholder="Product Class"
                />
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <fieldset>
                  Installed ? : &nbsp; &nbsp; &nbsp;
                  <span>
                    <label>
                      <input
                        name="group1"
                        type="radio"
                        value={"Yes"}
                        checked
                        {...register("Install")}
                      />
                      <span>Yes &nbsp; &nbsp; &nbsp;</span>
                    </label>
                  </span>
                  <span>
                    <label>
                      <input
                        name="group1"
                        type="radio"
                        value={"No"}
                        {...register("Install")}
                      />
                      <span>No</span>
                    </label>
                  </span>
                </fieldset>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input
                  {...register("ProductManufacture", { required: true })}
                  placeholder="Manufacture"
                />
              </div>
            </div>

            <button
              class="waves-effect waves-light btn"
              type="submit"
              style={{ width: "100px" }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="CalBut">
        <Link to="/ADinvent">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </div>
  );
}
