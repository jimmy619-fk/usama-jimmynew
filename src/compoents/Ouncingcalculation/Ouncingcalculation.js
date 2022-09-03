import React from "react";
import "./Ouncingcalculation.css";
import { useForm } from "react-hook-form";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
export default function Ouncing() {
  let { handleSubmit, register } = useForm();
  let [result, setResult] = React.useState(0);
  const Calcul = (data) => {
    let Ans = 0.114 * +data.D * +data.B;
    setResult(Ans);
    console.log(data);
  };

  return (
    <>
      <div className="containerwalaaaa">
        <div className="contact-boxwalaaaa">
          <div className="rightwalaaaa">
            <h3 className="h2walaaaa">Show result</h3>
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
                {...register("D", { required: true })}
                className="fieldwalaaaa"
                placeholder="Bearing Outside Diameterin inches"
              />
              <input
                {...register("B", { required: true })}
                className="fieldwalaaaa"
                placeholder="Total bearing width in Inches"
              />

              <button className="btnwalaaaa" type="submit">
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
