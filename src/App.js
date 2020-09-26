import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Booking from './components/Booking';

import reservationsList from './components/Admin/reservationsList';
import messagesList from './components/Admin/messagesList';
import Adminlogin from './components/Admin/Adminlogin';

import Navbar1 from './components/Navbar1';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';






function App() {
  return (
      <> 
        <Navbar1 />
        



        <Switch>

          
          {/* <Route exact path="/" component={Landing} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />




  
          <Route  exact path="/admin/reservationsList" component={reservationsList} />
          <Route  exact path="/admin/messagesList" component={messagesList} />
          <Route  exact path="/admin/login" component={Adminlogin} />


          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/reservation" component={Booking} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </>
  );
}

export default App;
