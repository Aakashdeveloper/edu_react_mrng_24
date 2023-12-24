import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Register from './Register';
import Main from './Main';
import Login from './login';
import Profile from './Profile';
import Display from './UserList'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="users" element={<Display/>}/>
                    </Route>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing