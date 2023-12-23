import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './listing/listingapi';
import Details from './details/details';
import PlaceOrder from './orders/PlaceOrder';
import ViewBooking from './orders/viewOrder';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:mealId" component={Listing}/>
            <Route path="/details" component={Details}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route path="/viewBooking" component={ViewBooking}/>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing;