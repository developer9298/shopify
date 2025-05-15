import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import apiService from "../apiService"
import { PacmanLoader, RotateLoader } from "react-spinners"
import { useNavigate, useParams } from "react-router-dom"

export default function EditSubCategory() {
    const [name, setName] = useState("")

    const [imgaeName, setImageName] = useState("")
    const [imageProp, setImageProp] = useState({})
    const [preImage, setPreImage] = useState("")
    const [category, setCategory] = useState([])
    const [categoryId, setCategoryId] = useState("")

    let [loading, setLoading] = useState(false);

    const { id } = useParams()
    const nav = useNavigate()

    // let [color, setColor] = useState("#000");

    const changeImage = (e) => {
        setImageName(e.target.value)
        setImageProp(e.target.files[0])
    }

    useEffect(() => {
        fetchCategory();
        fetchSingleSubCat()
    }, [])

    const fetchSingleSubCat = () => {
        let data = {
            _id: id
        }

        apiService.singleSubCategory(data)
            .then((res) => {
                if (res.data.success) {
                    // toast.success(res.data.message)
                    setName(res.data.data.name)
                    // setCategoryId(res.data.data.categoryId?._id)
                   // setPreImage(res.data.data.image)
                }
                else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }

    const fetchCategory = () => {
        apiService.getCatagory()
            .then((res) => {
                // console.log(res.data)
                if (res.data.success == true) {
                    setCategory(res.data.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

     const updatesubCatagory = (e) => {
           e.preventDefault()
   
           let data = new FormData()
           data.append("name", name)
           data.append("_id", id)
           data.append("catagoryId",category)
           if (!!imageProp) {
            data.append("image", imageProp)
        }
   
           apiService.updateSubCategory(data).then(res => {
               console.log(categoryId)
               if (res.data.success == true) {
                   toast.success(res.data.message)
                   console.log()
                  nav("/getsubcatagory")
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
                            <h1>Update Sub-Catagry</h1>
                            <nav aria-label="breadcrumb" class="banner-breadcrumb">

                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {loading == true ?
                <PacmanLoader color="#FEA116" size={40} cssOverride={{ display: "block", margin: "0 auto" }} loading={loading} />
                :
                <div class="container-xxl py-6">
                    <div class="container">

                        <div class="row g-0 justify-content-center">
                            <div class="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                                <form onSubmit={updatesubCatagory}>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <select class="form-control" value={category} onChange={(e) => { setCategory(e.target.value) }} required>
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
            }


        </>
    )
}