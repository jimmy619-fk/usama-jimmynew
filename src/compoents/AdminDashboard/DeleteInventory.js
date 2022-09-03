import React, { useRef, useState } from "react";

import "./DeleteInventory.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myAlert } from "../Helper/Helper";
export default function DeleteInventory() {
  let SearchData = useRef();
  let [ServerData, SetServerData] = useState([]);
  let Dats = useSelector((comming) => {
    return comming.Userlogin.CurrentUser;
  });
  let {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  let Suggesti = () => {
    let data = {
      Search: SearchData.current.value.toLowerCase(),
    };

    axios
      .post("/DelSearchFind", data)
      .then((res) => {
        if (res.data.Message) {
          myAlert(res.data.Message);
        } else {
          SetServerData([res.data]);
        }
      })
      .catch((err) => {});
  };

  let UpdateDate = async (Ups) => {
    let UpdateDateMaker = {
      ...ServerData[0],
    };

    let DelHistory = Object.assign(
      { DelUserName: Dats.Name },
      { DelDate: moment().format("LLL") },
      UpdateDateMaker
    );
    console.log("DelHistory", DelHistory);

    let resp = await axios.post("/DeltheProduct", UpdateDateMaker);
    if (resp.data.Id == 1) {
      myAlert(resp.data.Message);
      let resp2 = await axios.post("/DeletingHistory", DelHistory);
      console.log(resp2.data);
    } else if (resp.data.id == 2) {
      myAlert(resp.data.Message);
    } else {
      return;
    }

    // axios
    //   .post("/DeltheProduct", UpdateDateMaker)
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data.Id == 1) {
    //       alert(res.data.Message);

    //       axios
    //         .post("/DeletingHistory", DelHistory)
    //         .then((res) => {
    //           console.log(res.data);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     } else if (res.data.id == 2) {
    //       alert(res.data.Message);
    //     } else {
    //       return;
    //     }
    //   })
    //   .catch((err) => {});

    SetServerData([]);
  };

  return (
    <div>
      <div className="pathwalahissa">
        <h5>Enter Id To Delete Product</h5>
      </div>
      <div className="SearchSecSetting">
        <input
          type="text"
          className="WithdrawSearch"
          placeholder="Enter Product Id"
          ref={SearchData}
        />
        <br />
        {/* <button
          class="waves-effect waves-light btn WithdrawSearch"
          onClick={Suggesti}
          style={{ background: "red" }}
        >
          Search
        </button> */}
        <button
          onClick={Suggesti}
          class="waves-effect waves-light btn"
          type="submit"
          style={{ width: "100px" }}
        >
          Search
        </button>
      </div>

      {ServerData.length ? (
        <div>
          <form onSubmit={handleSubmit(UpdateDate)}>
            <table className="striped centered">
              <thead>
                <tr>
                  <th>Product Id</th>
                  <th>Product Name</th>

                  <th>Expire Date</th>

                  <th>Quantity/Remaining</th>
                </tr>
              </thead>

              <tbody>
                {ServerData.map((val) => {
                  return (
                    <>
                      <tr>
                        <td>{val.ProductId}</td>
                        <td>{val.ProductName}</td>
                        <td>
                          {val.ExpireDate}

                          {setValue("_id", `${val._id}`, {
                            shouldDirty: true,
                          })}
                        </td>
                        <td>{val.Quantity}</td>
                      </tr>

                      <tr>
                        <td> Product Category : {val.ProductCategory}</td>
                      </tr>
                      <tr className="#ffffff white">
                        <td> Manufacture : {val.Mansefacture}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <button
              class="waves-effect waves-light btn WithdrawSaveButton"
              type="submit"
              style={{ width: "100px" }}
            >
              Delete This Product
            </button>
          </form>
        </div>
      ) : (
        <span></span>
      )}
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
