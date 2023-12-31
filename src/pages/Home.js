import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUsers(result.data);
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    }
    
    return (
        <div className="m-auto container p-0 mb-1 rounded">
            <table class="table table-dark">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <th scope="col"> Actions &nbsp; &nbsp;
                            <Link className="btn btn-success btn-sm" to="/user/add"> Add New User</Link>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <Link className="btn btn-light m-1" to={`/user/view/${user.id}`}>View</Link>
                                <Link className="btn btn-primary m-1" to={`/user/edit/${user.id}`}>Edit</Link>
                                <Link className="btn btn-danger m-1" onClick={ ()=> deleteUser(user.id) }>Remove</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default Home;