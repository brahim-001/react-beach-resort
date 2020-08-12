import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import image1 from "../images/Free Cocktails.jpg";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia voluptatibus reiciendis ab, temporibus amet delectus earum obcaecati error aperiam voluptas, optio odio quod. Molestiae nulla eveniet, perferendis quisquam earum ad!",
        url:
          "https://www.secondmojo.com/wp-content/uploads/2019/07/iStock-668030702.jpg",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia voluptatibus reiciendis ab, temporibus amet delectus earum obcaecati error aperiam voluptas, optio odio quod. Molestiae nulla eveniet, perferendis quisquam earum ad!",
        url: image1,
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia voluptatibus reiciendis ab, temporibus amet delectus earum obcaecati error aperiam voluptas, optio odio quod. Molestiae nulla eveniet, perferendis quisquam earum ad!",
        url: image1,
      },
      {
        icon: <FaBeer />,
        title: "Srtongest Beer",
        info:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia voluptatibus reiciendis ab, temporibus amet delectus earum obcaecati error aperiam voluptas, optio odio quod. Molestiae nulla eveniet, perferendis quisquam earum ad!",
        url: image1,
      },
    ],
  };
  render() {
    return (
      <section className=" services">
        <Title title="services" />
        {/* <div className="services-center">
                   {this.state.services.map((item, index) => {
                        return <article key={index} className="service" style={{backgroundImage:item.url}}>
                            <span>
                                {item.icon}
                            </span>
                        
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>

                        </article>
                   })}
                </div> */}

            <div className="row">
            {this.state.services.map((item, index) => {
            return <div class="col-lg-3 col-md-6 margin-30px-bottom xs-margin-20px-bottom" key={index} >
              <div class="services-block-three">
                <a href="javascript:void(0)">
                  <div class="d-flex align-content-center flex-column">
                    <span>
                       {item.icon}
                    </span>
                    <h6>{item.title}</h6>
                    <p>
                    {item.info}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          })}
            </div>
        
      </section>
    );
  }
}
