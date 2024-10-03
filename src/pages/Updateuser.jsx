import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Updateuser = () => {
    let [value, setValue] = useState({ username: "", email: "" });
    let navigate = useNavigate(); // useNavigate doesn't need destructuring

    let change = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value }); // e.target.value should not be in an array
    };

console.log(useParams());
let {id} = useParams();
useEffect(()=>{
    axios.get("http://localhost:3001/users/" + id)
    .then(res=> setValue(res.data))
},[])

function Update(e) {
    e.preventDefault();
    axios.put('http://localhost:3001/users/' + id, value)
    .then(() => navigate('/'))
}

    return (
        <div>
            <h1>Update the User</h1>
            <form>
                <input 
                    type="text" 
                    placeholder="username" 
                    name="username" 
                    value={value.username} 
                    onChange={change} 
                />
                <br />
                <input 
                    type="email" 
                    placeholder="email" 
                    name="email" 
                    value={value.email} 
                    onChange={change} 
                />
                <br />
                <button onClick={Update}>Edit User</button>
            </form>
        </div>
    );
};

export default Updateuser;
