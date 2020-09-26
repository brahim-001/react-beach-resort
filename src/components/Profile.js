import React, { Component } from 'react';
import { getProfile } from './UserFunctions';
import { Redirect } from 'react-router-dom';


export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: ''
        }
    }



    componentDidMount() {
        getProfile().then(res => {
            if (res) {
                console.log(res)
                this.setState({
                    name: res.name,
                    email: res.email
                })
            }
        })
    }


    render() {
        return (


            (!localStorage.id) ? (<Redirect to="/login"></Redirect>) : (

                <div className="container">
                    <div>
                        <div className="jumbotron mt-5">

                            <div className="col-sm-4 m">
                                <h1 className="text-center">PROFILE</h1>
                            </div>

                        </div>
                        <table className="table col-md-4 mx-auto">
                            <tbody>
                                <tr>
                                    <td>
                                        Name
                              </td>
                                    <td>
                                        {this.state.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        )
    }
}
