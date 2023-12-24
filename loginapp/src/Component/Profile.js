import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { useNavigate} from "react-router-dom";

const url = "http://3.17.216.66:5000/api/auth/userinfo"

const Profile = () => {

    const[user,setUser] = useState();
    const navigate = useNavigate();

    const userData = async() => {
        const response = await fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })

        const data = await response.json()
        setUser(data)
    }

    useEffect(() => {
        userData()
    },[])

    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        navigate('/')
    }

    const renderData = (data) => {
        if(data){
            sessionStorage.setItem('rtk',data.role)
            return(
                <>
                    <h1>Hi {data.name}</h1>
                    <h2>Your Email Id is {data.email}</h2>
                    <h2>Your Phone Number is {data.phone}</h2>
                    <h2>Your Role is {data.role}</h2>
                </>
            )
        }
    }

    const conditionalRender = (data) => {
        if(data){
            if(data.role.toLowerCase() === "admin"){
                return(
                    <Link to="/users" className="btn btn-success">
                        Users
                    </Link>
                )
            }
        }
    }


    if(sessionStorage.getItem('ltk') === null){
        navigate('/')
    }else{
        return(
            <div className="container">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3>Profile</h3>
                    </div>
                    <div className="panel-body">
                        {renderData(user)}
                        {conditionalRender(user)} &nbsp;
                        <button className="btn btn-danger"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile