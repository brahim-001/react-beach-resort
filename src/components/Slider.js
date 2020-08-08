import React, { Component } from "react";
import Hero from "./Hero";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>

            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="slider">
              <h1>WELCOME</h1>
              <p>Discover our Hotel</p>
              <div></div>
            </div></div>
            <div id="target" className="carousel-item"></div>
            <div id="target" className="carousel-item"></div>
            <div id="target" className="carousel-item"></div>
            <div id="target" className="carousel-item"></div>
            {/* <div id="target" class="carousel-item"></div> */}
            <div id="target" className="carousel-item"></div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
