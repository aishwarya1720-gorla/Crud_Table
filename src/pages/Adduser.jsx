import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    let [value, setValue] = useState({ username: "", email: "" });
    let navigate = useNavigate(); // useNavigate doesn't need destructuring

    let change = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value }); // e.target.value should not be in an array
    };

    function add(e) {
        e.preventDefault();
        axios.post("http://localhost:3001/users", value)
            .then(() => {
                navigate("/"); // This will navigate to the home page
            })
            .catch(err => {
                console.error("There was an error adding the user!", err);
            });
    }

    return (
        <div>
            <h1>Add a new User</h1>
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
                <button onClick={add}>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
