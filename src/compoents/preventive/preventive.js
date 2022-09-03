import React from "react";
import "./preventive.css";
export default function Preventive() {
  return (
    <>
      <table className="centered">
        <thead>
          <tr>
            <th>Pump Serial Number</th>
            <th>Acceptance Criteria</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>11</td>
            <td>Is pump base securely fastened to foundations?</td>
            <td>
              <textarea></textarea>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              Are holding down bolts in good repair without significant areas of
              corrosion?
            </td>
            <td>
              <textarea></textarea>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              Is the pump base plate in good condition without significant areas
              of corrosion?
            </td>
            <td>
              <textarea></textarea>
            </td>
          </tr>

          <tr>
            <td>11</td>
            <td>Is there no evidence of leaks from the piping connections?</td>
            <td>
              <textarea></textarea>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Is there no evidence of leaks from the seal or gland area?</td>
            <td>
              <textarea></textarea>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Is the oil level (if visible) correct?</td>
            <td>
              <textarea></textarea>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              Is there no evidence of oil or grease leaking from pump bearings?
            </td>
            <td>
              <textarea></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mainbox">
        <textarea></textarea>
        <button
          class="btn waves-effect waves-light #03a9f4 light-blue"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </>
  );
}
