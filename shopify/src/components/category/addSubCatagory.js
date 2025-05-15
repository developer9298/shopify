import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import apiService from "../apiService"


export default function AddSubCatagory() {
    const [name, setName] = useState("")
    const [imageName, setImageName] = useState("")
    const [image, setImage] = useState({})
    const [category, setCategory] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const changeImage = (e) => {
        setImageName(e.target.value)
        setImage(e.target.files[0])
    }

    useEffect(() => {
        fetchCategory()
    }, [])
    const fetchCategory = () => {
        apiService.getCatagory()
            .then((res) => {
                if (res.data.success == true) {
                    setCategory(res.data.data)
                    // setCategoryId(res.data.data._id)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleForm = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("name", name)
        data.append("catagoryId", categoryId)
        data.append("image", image)
        apiService.addSubCategory(data).then((res) => {
            if (res.data.success == true) {
                toast.success(res.data.message)
                setName("")
                setCategoryId("")
                setImage("")
                setImageName("")
            }
            else {
                toast.error(res.data.message)

            }
        }).catch((err) => {
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
                        <form onSubmit={handleForm}>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select class="form-control" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }} required>
                                            <option disabled selected
                                                value={""}>Choose Category</option>
                                            {category?.map((el, index) => (
                                                <option key={index} value={el?._id}>{el?.name}</option>
                                            ))}
                                        </select>
                                        <label for="email">Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Sub Category Name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                                        <label for="email">SubCategory Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="file" class="form-control" id="image" placeholder="" value={imageName} onChange={changeImage} required />
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
            </section>
        </>
    )
}