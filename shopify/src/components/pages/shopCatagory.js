import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import apiService from "../apiService"
import { BeatLoader } from "react-spinners"
import { Link } from "react-router-dom"
export default function ShopCatagory() {
    const [loading, setLoading] = useState(false)

    const [catagory, setCatagory] = useState([])
    const fetchCategory = () => {
        setLoading(true)
        apiService.getCatagory()
            .then((res) => {
               
                if (res.data.success == true) {

                    setCatagory(res.data.data)
                    console.log(res.data.data)
                    console.log("hghg")
                }
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            })
    }


    const changeStatus = (id, status) => {
    
            setLoading(true)
    
            let data = {
                _id: id,
                status: !status
            }
            apiService.updateStatusCategory(data)
                .then((res) => {
                    if (res.data.success == true) {
                        toast.success(res.data.message)
    
                        fetchCategory()
                    }
                    else {
                        toast.error(res.data.message)
                    }
                })
                .catch((err) => {
                    toast.error(err.message)
                })
                .finally(() => {
                    setTimeout(() => {
                        setLoading(false)
                    }, 1000)
                })
        }

    useEffect(
        () => {
            fetchCategory()
        }, []
    )
    return (
        <>
            <section class="blog-banner-area" id="category">
                <div class="container h-100">
                    <div class="blog-banner">
                        <div class="text-center">
                            <h1>Shop Category</h1>
                            <nav aria-label="breadcrumb" class="banner-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Shop Category</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading == true ?
                    <div className="my-5" style={{ textAlign: 'center' }}>
                        <BeatLoader
                            color="#ea9a34"
                        ></BeatLoader>
                    </div> :

                    <div class="container mt-5">

                        <div class="row g-4">
                            <div className="col-md-12">
                                <table className="table table-bordered">
                                    <thead className="table-warning">
                                        <tr>
                                            <th>S.No</th>
                                            <th>Category Name</th>
                                            <th>Category Image</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            catagory?.map((el, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img src={el?.image} alt="" style={{ height: "100px", width: "100px" }} />
                                                    </td>
                                                    <td>{el?.name}</td>

                                                    <td>
                                                        <Link to = {"/editcatagory/"+el?._id} className="fa fa-edit text-success"></Link>
                                                    </td>
                                                    <td>
                                                        {el?.status==true?  <button className="btn btn-success" onClick={() => {
                                                            changeStatus(el?._id, el?.status)
                                                        }}>Active</button>:
                                                          <button className="btn btn-danger" onClick={() => {
                                                            changeStatus(el?._id, el?.status)
                                                        }}>In-Active</button>}
                                                    {/* <button className="btn btn-warning" onClick={() => {
                                                            changeStatus(el?._id, el?.status)
                                                        }}>Active</button> */}
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

            }

        </>
    )
}