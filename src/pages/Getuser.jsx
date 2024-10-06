import React,{useEffect, useState} from "react";
import axios from "axios";
import {  Link, useNavigate } from "react-router-dom";
const GetUsers = ()=>{
    let [state,setState] = useState([]);
    let [thead,setHead] = useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        let x= axios.get("http://localhost:3001/users")
         x.then(x =>{
         setState(x.data);
           setHead(Object.keys(x.data[0]).slice(0,4))
                   
         })
    },[])
    function deletes(id){
   axios.delete("http://localhost:3001/users/"+id)
   .then(()=>{
    navigate("/")
   },[])   
    }
    // console.log(thead);
     return(
         <table border={2}>
            <caption>
                <b>CRUD OPERATIONS</b>
                &nbsp;  &nbsp;
                <button onClick={() => navigate("/add")}>
                    Add +
                </button>
            </caption>
        <thead>
        <tr >
            {thead.map((x,ind) => <th key={ind}>{x}</th>)}
            <th>operations</th>
          </tr>
        </thead>
         <tbody>
         {state.map(res =>{
            return(
                <tr key={res.id}>
                   <td>{res.id}</td>
                   <td>{res.name}</td>
                   <td>{res.username}</td>
                   <td>{res.email}</td>
                   <td>
                   <Link to={`/edit/${res.id}`}>
                   <button className="but">edit</button>
                    </Link>
                    <button onClick={()=>deletes(res.id)} className="but">delete</button>
                   </td>
                </tr>
            )
          })}
         </tbody>
         </table>
    )
}
export default GetUsers;
