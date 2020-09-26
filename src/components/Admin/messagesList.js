import React, { Component } from 'react';
import Message from './Message';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class messagesList extends Component {
    state = {
        messages: []
    }
    getmessages = async () => {

        const message = await Axios.get("http://127.0.0.1:8000/api/messages");
        this.setState({ messages: message.data });
    };
    componentDidMount() {
        this.getmessages();
    }
    render() {
        return (
            (! ( localStorage.role == 0  )) ? (<Redirect to="login"></Redirect>) : (
                <div className="reservationsList">
                    <section className="reservationsList2">
                        <h1>Messages list</h1>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr className={{ textAlign: 'center' }}>
                                    <th scope="col">id</th>
                                    <th scope="col">customer_email</th>
                                    <th scope="col">message</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                    this.state.messages.map((item) => {
                                        return <tr key={item.id}>
                                           <td>{item.id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.message}</td>
                                            <Message message={item} getmessages={this.getmessages} />
                                        </tr>
                                   })
                                }
                            </tbody>
                        </table>
                    </section>
                </div>
            )
        )
        
    }
}