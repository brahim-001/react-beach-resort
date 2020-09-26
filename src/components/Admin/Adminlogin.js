import React, { Component } from 'react';
import { login } from "../UserFunctions";

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password

        }

        login(user).then(res => {

            if(localStorage.role == 1)
            {this.props.history.push(`/reservation`)}
            else{
                this.props.history.push(`/admin/reservationsList`)

            }
        })

    }
    render() {
        return (
            <form noValidate onSubmit={this.onSubmit}>
                <div id="login">
                    <div class="container">
                        <div id="login-row" class="row justify-content-center align-items-center">
                            <div id="login-column" class="col-md-6">
                                <div id="login-box" class="col-md-12">
                                    <form id="login-form" class="form" >
                                        <h2 class="text-center text-info">Hello admin</h2>
                                        <div class="form-group">
                                            <label for="username" class="text-info">email:</label><br />
                                            <input type="text" name="email" id="username" class="form-control" value={this.state.email} onChange={this.onChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="text-info">Password:</label><br />
                                            <input type="password" name="password" id="password" class="form-control" value={this.state.password} onChange={this.onChange} />
                                        </div>
                                        <div class="form-group" >

                                            <input type="submit" name="submit" class="btn btn-info btn-md" value="Sign in" />
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
