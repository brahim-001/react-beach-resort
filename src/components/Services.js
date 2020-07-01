import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';


export default class Services extends Component {
    state={
        services:[
           {
            icon:<FaCocktail/>,
            title:"free cocktails",
            info: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia voluptatibus reiciendis ab, temporibus amet delectus earum obcaecati error aperiam voluptas, optio odio quod. Molestiae nulla eveniet, perferendis quisquam earum ad!"
            
           },
           {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia voluptatibus reiciendis ab, temporibus amet delectus earum obcaecati error aperiam voluptas, optio odio quod. Molestiae nulla eveniet, perferendis quisquam earum ad!"
            
           },
           {
            icon:<FaShuttleVan/>,
            title:"Free shuttle",
            info: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia voluptatibus reiciendis ab, temporibus amet delectus earum obcaecati error aperiam voluptas, optio odio quod. Molestiae nulla eveniet, perferendis quisquam earum ad!"
            
           },
           {
            icon:<FaBeer/>,
            title:"Srtongest Beer",
            info: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia voluptatibus reiciendis ab, temporibus amet delectus earum obcaecati error aperiam voluptas, optio odio quod. Molestiae nulla eveniet, perferendis quisquam earum ad!"
            
           }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/> 
                <div className="services-center">
                   {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>
                                {item.icon}
                            </span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                   })}
                </div>
               
            </section>
        )
    }
}
