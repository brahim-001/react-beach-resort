import React, { Component } from "react";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
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
          {/* <div className="slider">
                 <h1>WELCOME</h1>
                 <p>Discover our Hotel</p>
                 <div></div>
          </div> */}
        <div style={{marginBottom:"130px"}}>
        <Banner  title="luxurious rooms" subtitle="deluxe rooms starting at $299">
              <Link to='/rooms' className=" btn-primary">
                  our rooms
              </Link>
          </Banner>
        </div>
          
          </ol>

          <div className="carousel-inner" role="listbox">
            
            <div id="target" className="carousel-item active"></div>
            <div id="target" className="carousel-item"></div>
            <div id="target" className="carousel-item"></div>
            <div id="target" className="carousel-item"></div>
            <div id="target" className="carousel-item"></div>
            {/* <div id="target" class="carousel-item"></div> */}
            {/* <div id="target" className="carousel-item"></div> */}
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
