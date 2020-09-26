import React, { Component } from 'react';
import Reservation from './Reservation';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class reservationsList extends Component {
    state = {
        reservations: []
    }
    getReservations = async () => {

        const reservation = await Axios.get("http://127.0.0.1:8000/api/reservations");
        this.setState({ reservations: reservation.data });
    };
    componentDidMount() {
        this.getReservations();
    }
    render() {
        return (
            (! ( localStorage.role == 0  )) ? (<Redirect to="/Admin/login"></Redirect>) : (
                <div className="reservationsList">
                    <section className="reservationsList2">
                        <h1>Reservations list</h1>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">customer_id</th>
                                    <th scope="col">customer_name</th>
                                    <th scope="col">room_name</th>
                                    <th scope="col">checkin</th>
                                    <th scope="col">checkout</th>
                                    <th scope="col">number_of_nights</th>
                                    <th scope="col">total_price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.reservations.map((item) => {
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.customer_id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.room_name}</td>
                                            <td >{item.checkin}</td>
                                            <td >{item.checkout}</td>
                                            <td >{item.number_of_nights}</td>
                                            <td >{item.total_price}</td>
                                            <Reservation reservation={item} getReservations={this.getReservations} />
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