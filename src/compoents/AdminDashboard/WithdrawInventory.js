import React, { useEffect, useRef, useState } from "react";
import "./WithdrawInventory.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myAlert } from "../Helper/Helper";
export default function WithdrawInventory() {
  let Dats = useSelector((comming) => {
    return comming.Userlogin.CurrentUser;
  });
  let SearchData = useRef();
  let {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  let [ServerData, SetServerData] = useState([]);

  let Suggesti = () => {
    let data = {
      Search: SearchData.current.value.toLowerCase(),
    };

    axios
      .post("/WithdrawItemSearchData", data)
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
    console.log(Ups);
    if (ServerData[0].Quantity == parseInt(Ups.ProductQuantity)) {
      console.log("ture");
    } else {
      let diff = ServerData[0].Quantity - parseInt(Ups.ProductQuantity);

      let UpdateDateMaker = {
        ...ServerData[0],
        Quantity: parseInt(Ups.ProductQuantity),
      };

      let WithdrawHistory = Object.assign(
        { WithdrawUser: Dats.Name },
        { WithdrawPropose: Ups.WithdrawPurpose },
        { WithdrawDate: moment().format("LLL") },
        {
          WithdrawQuantity: diff,
        },
        UpdateDateMaker
      );

      console.log("WithdrawHistory", WithdrawHistory);

      let resp = await axios.post("/withdrawdataUpdater", UpdateDateMaker);
      if (resp.data.Id == 1) {
        myAlert(resp.data.Message);
        let resp2 = await axios.post("/WithdrawHistory", WithdrawHistory);
        console.log(resp2.data);
      } else if (resp.data.id == 2) {
        myAlert(resp.data.Message);
      } else {
        return;
      }

      SetServerData([]);

      // axios
      //   .post("/withdrawdataUpdater", UpdateDateMaker)
      //   .then((res) => {
      //     console.log(res.data);
      //     if (res.data.Id == 1) {
      //       alert(res.data.Message);

      //       axios
      //         .post("/WithdrawHistory", WithdrawHistory)
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
    }
  };

  return (
    <div>
      <div className="pathwalahissa">
        <h5>Enter Id to Withdraw Product</h5>
      </div>
      <div className="SearchSecSetting">
        <input
          type="text"
          className="WithdrawSearch"
          placeholder="Search Product ID"
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

      {/* <form onSubmit={handleSubmit(UpdateDate)}>
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

                      {setValue("avv", `${val.ExpireDate}`, {
                        shouldDirty: true,
                      })}
                    </td>
                    <td>
                      <input
                        type="number"
                        defaultValue={val.Quantity}
                        {...register("ProductQuantity", {
                          required: true,
                          min: 0,
                          max: val.Quantity,
                        })}
                      />
                      {errors.ProductQuantity && (
                        <span style={{ color: "red" }}>
                          Quantity Cannot be Negative Number or
                          <br /> Quantity Does not greater than available
                        </span>
                      )}
                    </td>
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
          Withdraw & Save
        </button>
      </form> */}

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

                          {setValue("avv", `${val.ExpireDate}`, {
                            shouldDirty: true,
                          })}
                        </td>
                        <td>
                          <input
                            type="number"
                            defaultValue={val.Quantity}
                            {...register("ProductQuantity", {
                              required: true,
                              min: 0,
                              max: val.Quantity,
                            })}
                          />
                          {errors.ProductQuantity && (
                            <span style={{ color: "red" }}>
                              Quantity Cannot be Negative Number or
                              <br /> Quantity Does not greater than available
                            </span>
                          )}
                        </td>
                      </tr>

                      <tr>
                        <td> Product Category : {val.ProductCategory}</td>
                      </tr>
                      <tr className="#ffffff white">
                        <td> Manufacture : {val.Mansefacture}</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            style={{
                              position: "absolute",
                              left: "0px",
                              right: "0",
                              margin: "auto",
                              // width: "300px",
                            }}
                            placeholder="Withdraw Purpose"
                            {...register("WithdrawPurpose", {
                              required: true,
                            })}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <button
              class="waves-effect waves-light  WithdrawSaveButton"
              type="submit"
              style={{ width: "200px", marginTop: "50px" }}
            >
              Withdraw & Save
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
