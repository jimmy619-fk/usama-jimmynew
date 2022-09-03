import React from "react";
import { Link } from "react-router-dom";
import "./equipmets.css";
export default function Equipments() {
  return (
    <div>
      <div class="main-container">
        <div class="heading">
          {/* <h1 class="heading__title">Gradient Banner Cards</h1> */}
          <p class="heading__credits"></p>
        </div>
        <div class="cards">
          <div class="cardd card-1 ">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>

            <h2 class="card__title">MOTOR</h2>
          </div>
          <div class="cardd card-2">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">VALVES</h2>
            <p class="card__apply"></p>
          </div>
          <div class="cardd card-3">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">COMMING SOON</h2>
          </div>
          <div class="cardd card-4">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">COMMING SOON</h2>
          </div>
          <div class="cardd card-5">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">COMMING SOON.</h2>
          </div>
          <div class="cardd card-1">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">COMMING SOON.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
