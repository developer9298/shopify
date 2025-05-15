
import { useState, useEffect } from 'react';
import apiService from '../apiService';

import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Users() {
    const [data, setData] = useState([])
    const [myData, setMyData] = useState([])


    const fetchUsers = () => {
        apiService.getUsers()
            .then((res) => {
                if (res.data.success == true) {
                    setMyData(res.data.data)
                    console.log(myData)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(
        () => {
            fetchUsers()
        }, []
    )


    return (
        <>

            <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

                <div class="h-screen flex-grow-1 overflow-y-lg-auto">


                    <main class="py-6 bg-surface-secondary">
                        <div class="container-fluid">


                            <main class="py-6 bg-surface-secondary">
                                <div class="container-fluid">


                                    <div class="card shadow border-0 mb-7">
                                        <div class="card-header">
                                            <h5 class="mb-0">Users</h5>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-hover table-nowrap">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th scope="col">S.No</th>
                                                        <th scope="col">Name</th>

                                                        <th scope="col">Email</th>
                                                        <th scope="col">Address</th>
                                                        <th scope="col">Contact</th>


                                                    </tr>
                                                </thead>
                                                <tbody>{
                                                    myData?.map((el, index) => (

                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{el?.name}</td>
                                                            <td>

                                                                {el?.email}

                                                            </td>

                                                            <td>
                                                                {el?.address}
                                                            </td>

                                                            <td>
                                                                {el?.contact}
                                                            </td>


                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </main>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}