import React, { Component } from 'react';
import Axios from 'axios';

export default class Reservation extends Component {

   

    onDelete = ()=>{
         this.ReservationDelete();
    }

    ReservationDelete = async () => {
        // console.log(this.props.reservation.id)
        await Axios.delete("http://127.0.0.1:8000/api/reservations"+"/"+this.props.reservation.id);
        // this.getReservations();
        this.props.getReservations();

      };





    render() {  
        
        return (
            <>
               <td ><button type="button" class="btn btn-danger h-50" onClick={this.onDelete}><i class="fas fa-trash-alt"></i></button></td>
         </>
            
        )
    }
}
