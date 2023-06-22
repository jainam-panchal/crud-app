import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUsers(result.data);
    }

    return (
        <div className="m-auto container p-3 mb-1 rounded">
            <table class="table table-dark">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Zipcode</th>
                        <th scope="col"> Actions &nbsp; &nbsp;
                            <button className="btn btn-success btn-sm">  Add New User</button>
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
                            <td>{user.address.city}</td>
                            <td>{user.address.zipcode}</td>
                            <td>
                                <button className="btn btn-light m-1">View</button>
                                <button className="btn btn-primary m-1">Edit</button>
                                <button className="btn btn-danger m-1">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default Home;