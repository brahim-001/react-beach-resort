// import React, { useState, useEffect } from 'react';
// import  logo from '../images/logo.png';
// import {Link} from 'react-router-dom';


// export default function Navbar() {

//   const [navBackground, setNavBackground] = useState('bgColor');

//   const navRef = React.useRef();
//   navRef.current = navBackground;

//   useEffect(() => {
//     const handlScroll = () =>{
//       const show = window.scrollY > 30
//       if(show){
//         setNavBackground('navbar1')
//       }
//       else{
//         setNavBackground('bgColor')
//       }
//     }
    
   
//     document.addEventListener('scroll', handlScroll)
//     return () => {
//       document.removeEventListener('scroll', handlScroll)
//     }
//   }, [])

  
//   return (
    
//                   <nav className="navbar1">
//                       <div className="nav-center1">
//                           <div className="nav-header1">
//                               <Link to="/">
//                                  <img src={logo} alt="Beach resort"/>
//                               </Link>  
                            
//                           </div>
//                           <ul className="nav-links">
//                              <li>
//                                <Link to="/">Home</Link>
//                              </li>
//                              <li>
//                                <Link to="/rooms">Rooms</Link>
//                              </li>
//                              <li>
//                                <Link to="/reservation">Booking</Link>
//                              </li>
//                           </ul>
      
//                       </div>
//                   </nav>
//               )
  
// }




import React, { Component } from 'react';
import  logo from '../images/logo.png';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
  
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
       status: "navbar1"
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (this.state.status !== "bgColor") {
          this.setState({ status: "bgColor" });
        }
      } else {
        if (this.state.status !== "navbar1") {
          this.setState({ status: "navbar1" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

    render() {
        return (
            <nav className={this.state.status}>
                <div className="nav-center1">
                    <div className="nav-header1">
                        <Link to="/">
                           <img src={logo} alt="Beach resort"/>
                        </Link>  
                        {/* <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>  */}
                    </div>
                    <ul className="nav-links">
                       <li>
                         <Link to="/">Home</Link>
                       </li>
                       <li>
                         <Link to="/rooms">Rooms</Link>
                       </li>
                       <li>
                         <Link to="/reservation">Booking</Link>
                       </li>
                    </ul>

                </div>
            </nav>
        )
        
    }


   


     
}
