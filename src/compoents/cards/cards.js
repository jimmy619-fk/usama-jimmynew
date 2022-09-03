import React from "react";
import "./cards.css";
export default function Cards() {
  return (
    <div class="row">
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="predictive.png" />
            {/* <span class="card-title">Card Title</span> */}
          </div>
          <div class="card-content">
            <p>
              Predictive maintenance refers to the use of data-driven, proactive
              maintenance methods that are designed to analyze the condition of
              equipment and help predict when maintenance should be performed
            </p>
          </div>
          <div class="card-action">
            <a href="#" id="predictivecolor">
              Predictive Maintainance
            </a>
          </div>
        </div>
      </div>

      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="preventive.png" id="preventwali" />
            {/* <span class="card-title">Card Title</span> */}
          </div>
          <div class="card-content">
            <p>
              Preventive maintenance (PM) is the regular and routine maintenance
              of equipment and assets in order to keep them running and prevent
              any costly unplanned downtime from unexpected equipment failure.
            </p>
          </div>
          <div class="card-action">
            <a href="#" id="preventivecolor">
              Preventive Maintenance
            </a>
          </div>
        </div>
      </div>

      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="runto.png" id="runtowali" />
            {/* <span class="card-title">Card Title</span> */}
          </div>
          <div class="card-content" id="predictive_card_content">
            <p>
              Run to failure is a maintenance strategy where maintenance is only
              performed when equipment has failed.
            </p>
          </div>
          <div class="card-action">
            <a href="#" id="runtocolor">
              {" "}
              Run To Failure Maintenance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
