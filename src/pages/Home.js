import React, { Component } from 'react'
import  Hero from '../components/Hero';

import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Slider from '../components/Slider';
import Video from '../components/Video';


export default class Home extends Component {
    render() {
        return <>
       
       <Slider />
        <Services />
        <Video />
        <FeaturedRooms />

        
        </>
    }
}
