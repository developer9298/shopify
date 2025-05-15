import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import apiService from "../apiService"

export default function AddCatagory() {
    const [catagoryName, setCatagoryName] = useState("")
    const [imageName, setImageName] = useState("")
    const [imageProp, setImageProp] = useState({})
    const nav = useNavigate()
    const changeImage = (e) => {
        setImageName(e.target.value)
        setImageProp(e.target.files[0])
    }
    const handleForm = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("name", catagoryName)
        data.append("image", imageProp)
        console.log(data)
        apiService.addCategory(data)
            .then((res) => {
                if (res.data.success == true) {

                    toast.success(res.data.message)
                    nav("/shopcatagory")
                    setCatagoryName("")
                    setImageProp({})
                    setImageName("")
                }
                else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    return (
        <>
            <section class="blog-banner-area" id="category">
                <div class="container h-100">
                    <div class="blog-banner">
                        <div class="text-center">
                            <h1>Add Catagory</h1>
                            <nav aria-label="breadcrumb" class="banner-breadcrumb">

                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="tracking_box_area section-margin--small">
                <div class="container">
                    <div class="tracking_box_inner">
                        <p>Add new Catagory using the form blow</p>
                        <form class="row tracking_form" action="#" method="post" novalidate="novalidate" onSubmit={handleForm}>
                            <div class="col-md-12 form-group">
                                <input value={catagoryName} onChange={(e) => {
                                    setCatagoryName(e.target.value)
                                }} type="text" class="form-control" id="catagoryName" name="catagoryName" placeholder="Enter Catagory Name" onfocus="this.placeholder = ''" onblur="this.placeholder = Enter Catagory Name'" />
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="file" value={imageName} onChange={changeImage} class="form-control" id="imgge" name="image" placeholder="Choose File" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Choose File'" />
                            </div>
                            <div class="col-md-12 form-group">
                                <button type="submit" value="submit" class="button button-tracking" >Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}