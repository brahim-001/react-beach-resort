
import React, { useState } from 'react';
import Title from './Title';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Axios from 'axios';


export default function Booking() {

  const context = useContext(RoomContext);
  const { rooms } = context;

  const [ room, setRoom ] = useState('');
  const [ Checkin, setChekin ] = useState('');
  const [ Checkout, setChekout]  = useState('');
  const [ number_Of_Nights, setNumberOfNights ] = useState('');
  const [ Total_Cost, setTotalCost ] = useState('');
  const [ key, setkey] = useState('');

  
  function keyhandler(e) {
    setkey({  key: key});
}  


function roomhandler(e) {
    setRoom({  [e.target.name]: e.target.value});
}
   
function checkinhandler(e) {
       setChekin({  [e.target.name]: e.target.value});
}

function checkouthandler(e) {
    setChekout({  [e.target.name]: e.target.value});
}

function NumberOfNights(e) {
   setNumberOfNights({  [e.target.name]: e.target.value});
}

// function TotalCosthandler(e) {
//   setNumberOfNights({  [e.target.name]: e.target.value});
// }



function handleSubmit(e){
       e.preventDefault();
       console.log(room);
       console.log(Checkin)
       console.log(Checkout)
       console.log(number_Of_Nights);

       Axios.post("http://127.0.0.1:8000/api/reservations",{customer_id : 1,room_name:room, checkin: Checkin, checkout: Checkout, number_of_nights: number_Of_Nights, total_price: 6000}).then((res) => {
        console.log(res);
        });
     

    }


  return (
    <div>
      <div className="row">
        <section className="booking1 col-6">
          <Title title="Make a Reservation" />


        </section>

        <section className="booking col-6">
          <div className="hotel_reserve_box">

            <form onSubmit={handleSubmit}>



              <div className="form-group p-3">
                <label htmlFor="type">Room </label>
                <select
                  name="type"
                  id="type"
                  // value={type}
                  className="form-control"
                  onChange={roomhandler}
                >
                  {/* <option  selected>....</option> */}
                  {
                    rooms.map(item => {
                    return <option key={item.id} onChange={keyhandler}
                    name="RoomName" defaultValue=""  >{item.name}</option>
                    })
                  }

                </select>
              </div>
              <div className="form-group   row p-3">
                {/* <div class="inpt-grp"> */}
                <div className="col-6">
                  <label>Checkin</label>
                  <input type="date" className="form-control sele"  name="Checkin" placeholder="City Or Airport" onChange={checkinhandler} />
                </div>

                <div className="col-6">
                  <label>Checkout</label>
                  <input type="date" className="form-control sele"  name="Checkout" placeholder="City Or Airport" onChange={checkouthandler} />
                </div>
              </div>

              <div className="form-group p-3">
                <label>Number of nights</label>
                <input type="number" min="1" name="numberOfNights"  className="form-control sele" 
                onChange={NumberOfNights} />
              </div>

              <div className="form-group  row">
                <label className="p-3">Total Cost ($) :  <span id="result" className="TotalCost">0</span></label>
                <button type="submit" className="SubmitButton">Booking Now</button>

              </div>
            </form>
          </div>


        </section>

      </div>
    </div>
  )
}




