import React, { Component } from 'react';
import { register } from "./UserFunctions"

export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: this.state.first_name + '' + this.state.last_name,
            email: this.state.email,
            password: this.state.password,
                }

        register(newUser).then(res => {
            this.props.history.push(`/login`)

        })
    }




    render() {
        return (
          
            <form noValidate onSubmit={this.onSubmit}>
                <div id="login">
                    <div class="container">
                        <div id="login-row" class="row justify-content-center align-items-center">
                            <div id="login-column" class="col-md-6">
                                <div id="login-box2" class="col-md-12">
                                    <form id="login-form" class="form" >
                                        <h3 class="text-center text-info">Register</h3>
                                        <div class="form-group">
                                            <label for="username" class="text-info">First Name:</label><br />
                                            <input  name="first_name" type="text"  id="username" class="form-control" value={this.state.first_name} onChange={this.onChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="last" class="text-info">Last Name:</label><br />
                                            <input  name="last_name" type="text"  id="last" class="form-control" value={this.state.last_name} onChange={this.onChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="email" class="text-info">Email:</label><br />
                                            <input type="text" name="email" id="email" class="form-control" value={this.state.email} onChange={this.onChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="text-info">Password:</label><br />
                                            <input type="password" name="password" id="password" class="form-control"  value={this.state.password} onChange={this.onChange} />
                                        </div>
                                        <div class="form-group" >

                                            <input type="submit" name="submit" class="btn btn-info btn-md" value="Register" />
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
