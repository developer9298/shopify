import { useEffect, useState } from "react"
import apiService from "../apiService"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"

export default function EditCatagory() {
    const [catagoryName, setCatagoryName] = useState("")
    const [imgaeName, setImageName] = useState("")
    const [imageProp, setImageProp] = useState({})
    const [preImage, setPreImage] = useState("")
    const { id } = useParams()
    const nav = useNavigate()
    const changeImage = (e) => {
        setImageName(e.target.value)
        setImageProp(e.target.files[0])
    }

 

    //fetch catagory api call
    const fetchSingleCatagory = () => {
        let data = {
            _id: id
        }
        apiService.singleCategory(data).then(res => {
            console.log(res.data)
            if (res.data.success == true) {
                //  toast.success(res.data.message)
                setCatagoryName(res.data.data.name)
                setPreImage(res.data.data.image)
                console.log(catagoryName)
            }
            else {
                toast.error("failed to load catagory")
            }
        }).catch(err => {
            toast.error(err.message)
        })
    }
    useEffect(() => {
        fetchSingleCatagory();

    }, [])
    // update catagory api call 

    const updateCatagory = (e) => {
        e.preventDefault()

        let data = new FormData()
        data.append("name", catagoryName)
        data.append("_id", id)
        if (!!imageProp) {
            data.append("image", imageProp)
        }

        apiService.updateCategory(data).then(res => {
            console.log(data)
            if (res.data.success == true) {
                toast.success(res.data.message)
                nav("/shopcatagory")
            }
            else {
                toast.error(res.data.message)
            }
        }).catch(err => {
            toast.error(err.message)
        })
    }

    return (
        <>
            <section class="blog-banner-area" id="category">
                <div class="container h-100">
                    <div class="blog-banner">
                        <div class="text-center">
                            <h1>Update Catagry</h1>
                            <nav aria-label="breadcrumb" class="banner-breadcrumb">

                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container-xxl py-6">
                <div class="container">

                    <div class="row g-0 justify-content-center">
                        <div class="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                            <form onSubmit={updateCatagory}>
                                <div class="row g-3">

                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Category Name" value ={catagoryName} onChange={(e) => {
                                                setCatagoryName(e.target.value)
                                            }} required />
                                            <label for="name">Catagory Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="file" class="form-control" id="image" placeholder="" value={imgaeName} onChange={changeImage} required />
                                            <label for="email">Image</label>
                                        </div>
                                    </div>

                                    <div class="col-12 text-center">
                                        <button class="btn btn-primary rounded-pill py-3 px-5" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}