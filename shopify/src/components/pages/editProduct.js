import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import apiService from "../apiService"
import { PacmanLoader, RotateLoader } from "react-spinners"
import { useNavigate, useParams } from "react-router-dom"

export default function EditProduct() {
    const [name, setName] = useState("")
    const [subCategoryId, setSubCategoryId] = useState('')

    const [imgaeName, setImageName] = useState("")
    const [imageProp, setImageProp] = useState({})
    const [preImage, setPreImage] = useState("")
    const [category, setCategory] = useState([])
    const [categoryId, setCategoryId] = useState("")
    const [subCategory, setSubCategory] = useState([])
    const [price, setPrice] = useState("")
    let [loading, setLoading] = useState(false);
    const [description, setDescription] = useState("")
    const { id } = useParams()
    const nav = useNavigate()

    const changeImage = (e) => {
        setImageName(e.target.value)
        setImageProp(e.target.files[0])
    }

    useEffect(() => {
        fetchCategory();
        fetchSingleProduct()
        fetchSubCategory()
    }, [])

    const fetchSingleProduct = () => {
        let data = {
            _id: id
        }

        apiService.singleProduct(data)
            .then((res) => {
                if (res.data.success) {

                    setName(res.data.data.name)
                     setPrice(res.data.data.price)
                    setDescription(res.data.data.description)
                     //setCategory(res.data.data.categoryId?.name)

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

                if (res.data.success == true) {
                    setCategory(res.data.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const fetchSubCategory = () => {
        apiService.getSubCatagory()
            .then((res) => {
                if (res.data.success == true) {
                    setSubCategory(res.data.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const updateProduct = (e) => {
        e.preventDefault()

        let data = new FormData()
        data.append("name", name)
        data.append("_id", id)
         data.append("subcatagoryId",subCategoryId)
         data.append("description", description)
          data.append("price", price)
        data.append("catagoryId", categoryId)
        if (!!imageProp) {
            data.append("image", imageProp)
        }

        apiService.updateProduct(data).then(res => {
            console.log(categoryId)
            if (res.data.success == true) {
                toast.success(res.data.message)
                console.log()
                nav("/subProduct")
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
         <div class="text-center mb-10 mt-10">
                            <h1>Update Product</h1>

                        </div>

            {loading == true ?
                <PacmanLoader color="#FEA116" size={40} cssOverride={{ display: "block", margin: "0 auto" }} loading={loading} />
                :
                <div class="container-xl py-6">
                    <div class="container">

                        <div class="row g-0 justify-content-center">
                            <div class="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                                <form onSubmit={updateProduct}>
                                    <div class="row g-3">

                                        <div class="col-md-6">
                                            <label for="email"> Name</label>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="name" placeholder="Sub Category Name" value={name} onChange={(e) => { setName(e.target.value) }} required />

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="email">Select Catagory</label>
                                            <div class="form-floating">
                                                  <select class="form-control" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }} required>
                                        <option disabled selected
                                            value={""}>Choose Category</option>
                                        {category?.map((el, index) => (
                                            <option key={index} value={el?._id}>{el?.name}</option>
                                        ))}
                                    </select>

                                            </div>
                                        </div>
                                         {/* <div class="col-md-12 form-group">
                                <label>Choose Catagory</label>

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
                            </div> */}
                                        <div class="col-md-6">
                                            <label for="email">Select Sub Category</label>
                                            <div class="form-floating">
                                                <select class="form-control" value={subCategoryId} onChange={(e) => { setSubCategoryId(e.target.value) }} required>
                                        <option disabled selected
                                            value={""}>Choose Sub-Category</option>
                                        {subCategory?.map((el, index) => (
                                            <option key={index} value={el?._id}>{el?.name}</option>
                                        ))}
                                    </select>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="email">Select Image</label>
                                            <div class="form-floating">

                                                <input type="file" class="form-control" id="image" placeholder="" value={imgaeName} onChange={changeImage} required />

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="description"> Description</label>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="description" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} required />

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="price"> Price</label>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="price" placeholder="price" value={price} onChange={(e) => { setPrice(e.target.value) }} required />

                                            </div>
                                        </div>
                                        <div class="col-12 text-center mt-10">
                                            <button class="btn btn-primary rounded-pill py-3 px-5" type="submit">Update</button>
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