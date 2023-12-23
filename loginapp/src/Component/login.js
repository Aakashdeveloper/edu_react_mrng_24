import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const url = "http://3.17.216.66:5000/api/auth/login"

function Login(){

    const navigate = useNavigate()


    const [formData,setFormData] = useState({
        email:"shivani@gmail.com",
        password:"12345678"
    });

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormData(prevData => ({
            // take already filled value
            ...prevData,
            // new filled value
            [name]:value
        }))
    }


    function handleSubmit(){
       
    }
     

    return(
            <>
                <br/>
                <div className="container">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h3>Login</h3>
                        </div>
                        <div className="panel-body">
                            <div className='row'>
                            
                                <div className='col-md-6 form-group'>
                                    <label>Email</label>
                                    <input className="form-control" name="email" value={formData.email}
                                    onChange={handleChange}/>
                                </div>
                                <div className='col-md-6 form-group'>
                                    <label>Password</label>
                                    <input className="form-control" name="password" value={formData.password}
                                    onChange={handleChange}/>
                                </div>
                               
                                <button className='btn btn-primary' onClick={handleSubmit}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )

}

export default Login