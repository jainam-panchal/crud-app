import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers = async () => {
        const result =  await axios.get("http://localhost:3001/users");
        setUsers(result.data);
    }

    return(
        <div className="p-5">
            <h1>Home Page</h1>
        </div>
        
    );
}

export default Home;