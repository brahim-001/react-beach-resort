import React, { Component } from 'react';
import axios from 'axios';
const api = 'http://127.0.0.1:8000';


export default class Footer extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            message: ''
            
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post(`${api}/api/messages`, {
            email: this.state.email,
            message: this.state.message
        });
        this.clearFormFields()
        
    }

    clearFormFields = () => {

      this.setState({ 
          email: '',
          message: ''
        });
    
      }


    render() {
        return (
            <div className="footer"> 

            <div className="footer-content">
                <div className="footer-section about">
                   <h1 className="logo-text">
                       <span>Luxury</span>Hotel
                   </h1>
                   <p>
                      Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.   
                   </p>
                   <div className="contact">
                       <span><i className="fas fa-phone"></i> 00000000</span>
                       <span><i className="far fa-envelope"></i>WebCoding@gmail.com</span>
                   </div>
                   <div className="div socials">
                        <a href="#" className="fab fa-facebook"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-youtube"></a>
      
                   </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <br/>
                    <ul>
                        <a href="#"><li>Events</li></a>
                        <a href="#"><li>Team</li></a>
                        <a href="#"><li>Mentores</li></a>
                        <a href="#"><li>Gallery</li></a>
                        <a href="#"><li>Terms and Condions</li></a>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact us</h2>
                    <br/>

                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                         value={this.state.email} onChange={this.onChange}/>
                      </div>
                    
                     
                      <div className="form-group">
                        <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Message..."
                         value={this.state.message} onChange={this.onChange}></textarea>
                      </div>
                      <div className="form-group">
                          <input className="btn btn-primary" type="submit" name="submit" value="Submit"/
                          >
      
                        </div>
                    </form>


                </div>
            </div>
      
            <div className="footer-bottom">
                
               @copy; webCoding@gmail.com | Designed by Brahim DOUCH
            </div>
      
        </div>
        )
    }
}

