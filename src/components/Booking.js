
import React, { useState } from 'react';
import Title from './Title';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { getProfile } from './UserFunctions';


export default function Booking() {

  const context = useContext(RoomContext);
  const { rooms } = context;

  const [room, setRoom] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const [Checkin, setChekin] = useState('');
  const [Checkout, setChekout] = useState('');
  const [number_Of_Nights, setNumberOfNights] = useState('');


  var item = document.getElementById('item');


  function roomhandler(e) {
    setRoom({ value: e.target.value });
    setName({ name: e.target.options[e.target.selectedIndex].dataset.name });
    // setPrice({ value: e.target.value })

  }

  function checkinhandler(e) {
    setChekin({ value: e.target.value });
  }

  function checkouthandler(e) {
    setChekout({ value: e.target.value });
  }

  function NumberOfNights(e) {
    setNumberOfNights({ value: e.target.value });

  }

  // function TotalCosthandler(e) {
  //   setNumberOfNights({  [e.target.name]: e.target.value});
  // }
  var x = number_Of_Nights.value * room.value;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("id :", id.id);
    console.log("room :", name.name);
    console.log("Checkin :", Checkin.value)
    console.log("checkout :", Checkout.value)
    console.log("number_Of_Nights :", number_Of_Nights.value);
    console.log("price :", x);


    Axios.post("http://127.0.0.1:8000/api/reservations",
      {
        customer_id: id.id,
        room_name: name.name,
        checkin: Checkin.value,
        checkout: Checkout.value,
        number_of_nights: number_Of_Nights.value,
        total_price: x
      })
      .then((res) => {
        console.log("done");
      });

    clearFormFields();
  }


  function clearFormFields() {

    setRoom({ value: "" });
    setName({ name: "" });

    setChekin({ value: "" });
    setChekout({ value: "" });
    setNumberOfNights({ value: "" });
    document.querySelector(".form").reset();

  }






  getProfile().then(res => {
    if (res) {
      setId({ id: res.id });

    }
  })








  return (
    (!localStorage.usertoken) ? (<Redirect to="/login"></Redirect>) : (
      <div>
        <div className="row">
          <section className="booking1 col-6">
            <Title title="Make a Reservation" />
          </section>
          <section className="booking col-6">
            <div className="hotel_reserve_box">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group p-3">
                  <label htmlFor="type">Room </label>
                  <select
                    name="type"
                    id="type"
                    className="form-control"
                    onChange={roomhandler}
                  >
                    <option defaultValue="" selected >....</option>
                    {
                      rooms.map(item => {
                        return <option id="item" key={item.id} value={item.price} data-name={item.name}> {item.name}</option>
                      })
                    })
                                      </select>
                </div>
                <div className="form-group   row p-3">
                  {/* <div class="inpt-grp"> */}
                  <div className="col-6">
                    <label>Checkin</label>
                    <input type="date" className="form-control sele" name="Checkin" placeholder="City Or Airport" onChange={checkinhandler} />
                  </div>
                  <div className="col-6">
                    <label>Checkout</label>
                    <input type="date" className="form-control sele" name="Checkout" placeholder="City Or Airport" onChange={checkouthandler} />
                  </div>
                </div>
                <div className="form-group p-3">
                  <label>Number of nights</label>
                  <input type="number" min="1" name="numberOfNights" className="form-control sele"
                    onChange={NumberOfNights} />
                </div>
                <div className="form-group  row">
                  <label className="p-3">Total Cost ($) :
                    <span id="result" className="TotalCost">
                      {x}
                    </span>
                  </label>
                </div>
                <button type="submit" className="SubmitButton" style={{ right: "0" }} >Booking Now</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    )
  )
}




