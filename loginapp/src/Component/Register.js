import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const url = "http://3.17.216.66:5000/api/auth/register"

function Register(){

    const navigate = useNavigate()


    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        role:""
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
        console.log(formData)
        axios.post(url,formData,{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(navigate('/'))
    }
     

    return(
            <>
                <br/>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Register</h3>
                        </div>
                        <div className="panel-body">
                            <div className='row'>
                               
                                <div className='col-md-6 form-group'>
                                    <label>Name</label>
                                    <input className="form-control" name="name" value={formData.name}
                                    onChange={handleChange}/>
                                </div>
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
                                <div className='col-md-6 form-group'>
                                    <label>Phone</label>
                                    <input className="form-control" name="phone" value={formData.phone}
                                    onChange={handleChange}/>
                                </div>
                                <div className='col-md-5 form-group'>
                                    <label>Role</label>
                                    <input className="form-control" name="role" value={formData.role}
                                    onChange={handleChange}/>
                                </div>
                                <button className='btn btn-success' onClick={handleSubmit}>
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )

}

export default Register;
