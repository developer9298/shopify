import { toast } from "react-toastify"
import { BeatLoader } from "react-spinners"
import apiService from "../apiService"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
export default function SubProduct() {
    const [loading, setLoading] = useState(false)
 
    const [product, setProduct] = useState([])
    
    const fetchProducts = () => {
        setLoading(true)
        apiService.getProducts()
            .then((res) => {
                console.log(res.data)
                if (res.data.success == true) {
                    setProduct(res.data.data)
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

    useEffect(
        () => {
            fetchProducts()
        }, []
    )

    const changeStatus = (id, status) => {

        setLoading(true)

        let data = {
            _id: id,
            status: !status
        }
        apiService.changeProductStatus(data)
            .then((res) => {
                
                if (res.data.success == true) {
                     fetchProducts()
                    toast.success(res.data.message)

                   
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

    return (
        <>
            <section class="blog-banner-area" id="category">
                <div class="container h-100">
                    <div class="blog-banner">
                        <div class="text-center">
                            <h1>All Sub Category</h1>
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
                                            <th>Category Image</th>
                                            <th>Product Image</th>
                                            <th> Name</th>
                                          
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            product?.map((el, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{el?.catagoryId?.name}</td>
                                                    <td>
                                                        <img src={ el?.image} alt="" style={{ height: "100px", width: "100px" }} />
                                                    </td>
                                                    <td>{el?.name}</td>

                                                    <td>
                                                        <Link to={"/editProduct/" + el?._id} className="fa fa-edit text-success"></Link>
                                                    </td>
                                                    
                                                        <td>
                                                        {el?.status==true?  <button className="btn btn-success" onClick={() => {
                                                            changeStatus(el?._id, el?.status)
                                                        }}>Active</button>:
                                                          <button className="btn btn-danger" onClick={() => {
                                                            changeStatus(el?._id, el?.status)
                                                        }}>In-Active</button>}
                                                  
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
