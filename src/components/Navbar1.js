import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getProfile } from './UserFunctions';
import { BiCheck } from 'react-icons/bi';

class Navbar1 extends Component {

    logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('usertoken')
        localStorage.removeItem('role')

        this.props.history.push('/')
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    }

    componentDidMount() {

        getProfile().then(res => {
            console.log(res)


            if (res) {
                this.setState({
                    name: res.name,
                    email: res.email
                })
            }
        })
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav" style={{ marginLeft: "70%" }}>
                <li className="navbar-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="navbar-item">
                    <Link className="nav-link" to="/register">
                        <span style={{}}>Register</span>
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav" style={{ marginLeft: "70%" }}>

                <li className="navbar-item">
                    <a style={{ color: "white" }} className="nav-link" href="/" onClick={this.logOut.bind(this)}>Logout <BiCheck />{this.state.name}</a>
                </li>

            </ul>
        )
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded" style={{ width: "100%" }}>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <img style={{ width: "50px", marginRight: "40px", marginLeft: "40px" }} src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/66/Ibis_red.jpg/200px-Ibis_red.jpg" alt="" />
                <div id="navbar1" className="collapse   navbar-collapse">
                    <ul className="navbar-nav">
                        {!(localStorage.role == 0) ? <>

                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rooms">Rooms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/reservation">Booking</Link>
                            </li>

                        </> : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/reservationsList">reservations list</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/messagesList">messages list</Link>
                                    </li>
                                </>)}
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>

            </nav>
        )
    }
}
export default withRouter(Navbar1);