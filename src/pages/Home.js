import React, { Component } from 'react'
import  Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Slider from '../components/Slider';
import Video from '../components/Video';


export default class Home extends Component {
    render() {
        return <>
       
       <Slider />


         <Hero>
             <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
              <Link to='/rooms' className=" btn-primary">
                  our rooms
              </Link>
             </Banner>
        </Hero> 
        <Services />
        <Video />
        <FeaturedRooms />

        
        </>
    }
}
