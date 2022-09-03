import React from "react";
import "./Greasingcal.css";
import { useForm } from "react-hook-form";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
export default function Greasingcal() {
  let { handleSubmit, register } = useForm();
  let [result, setResult] = React.useState(0);
  const Calcul = (data) => {
    console.log(data);
    // let K = +data.ft * +data.fc * +data.fm * +data.fv * +data.fd * +data.fp;
    // console.log("K", K);
    // console.log(typeof K);
    let T =
      +data.ft *
        +data.fc *
        +data.fm *
        +data.fv *
        +data.fd *
        +data.fp *
        (14000000 / +data.SpeedRPM) *
        Math.pow(+data.BoreDiameter, 0.5) -
      4 * +data.BoreDiameter;
    console.log("T", T);
    console.log(typeof T);
    setResult(T);
  };
  return (
    <>
      <div className="containerwala">
        <div className="contact-boxwala" id="boxwallllla">
          <div className="leftwala">
            <img src="cal.jpg" alt="" />
          </div>
          <div className="rightwalaa">
            <h3 className="h2wala">Show result</h3>
            {/* <h3>time untill next relubrication (hours)</h3> */}

            {result > 0 ? (
              <h3>
                <NumberFormat
                  thousandsGroupStyle="thousand"
                  value={result}
                  // prefix="$"
                  decimalSeparator="."
                  displayType="text"
                  type="text"
                  // format="#### #### #### ####"
                  thousandSeparator={true}
                  // allowNegative={true}
                  decimalScale={2}
                />
              </h3>
            ) : (
              <span></span>
            )}
            <form onSubmit={handleSubmit(Calcul)}>
              <input
                // type="number"
                {...register("ft", { required: true, type: "number" })}
                className="fieldwala"
                placeholder="value Ft"
              />
              <input
                // type="number"
                {...register("fc", { required: true, type: "number" })}
                className="fieldwala"
                placeholder="value Fc"
              />
              <input
                // type="number"
                {...register("fm", { required: true, type: "number" })}
                className="fieldwala"
                placeholder="value Fm"
              />
              <input
                // type="number"
                {...register("fv", { required: true, type: "number" })}
                className="fieldwala"
                placeholder="value Fv"
              />
              <input
                // type="number"
                {...register("fp", { required: true, type: "number" })}
                className="fieldwala"
                placeholder="value Fp"
              />
              <input
                // type="number"
                {...register("fd", { required: true, type: "number" })}
                className="fieldwala"
                placeholder="value Fd"
              />
              <input
                // type="number"
                {...register("SpeedRPM", { required: true, type: "number" })}
                className="fieldwala"
                placeholder="Speed (RPM)"
              />
              <input
                // type="number"
                {...register("BoreDiameter", {
                  required: true,
                  type: "number",
                })}
                className="fieldwala"
                placeholder="Bore Diameter (mm)"
              />

              <button className="btnwala" type="submit">
                Calculate
              </button>
            </form>
          </div>
        </div>
        <div className="CalBut">
          <Link to="/Calculator">
            {/* <img src="/calculator.png" /> */}
            {/* <img src="budget.png" /> */}
            <img src="previous.png" />
          </Link>
        </div>
      </div>
    </>
  );
}
