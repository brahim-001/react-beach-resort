import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


class Navbar extends Component {

  logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('userToken')
    this.props.history.push('/')
  }

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

    const loginRegLink = (
      <ul className="nav-links">
          <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
          </li>

      </ul>
  )

  const userLink = (
      <ul className="navbar-nav">
          <li className="navbar-item">
                    <Link to="/profile">Profile</Link>
          </li>
          <li className="navbar-item">
              <a className="nav-link" href="/" onClick={this.logOut.bind(this)}>Logout</a>
          </li>

      </ul>
  )



    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbar1" className="collapse   navbar-collapse justify-content-md-center">

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rooms">Rooms</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservation">Booking</Link>
            </li>

          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>

      </nav>
        )

  }






}
export default withRouter(Navbar);