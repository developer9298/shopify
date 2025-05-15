import { useEffect, useState } from "react"
import apiService from "../apiService"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function AddProduct() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [productCode, setProductCode] = useState("")
    const [price, setPrice] = useState("")
    const [imageName, setImageName] = useState("")
    const [imageProp, setImageProp] = useState({})
    
    const [category, setCategory] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const [subCategory, setSubCategory] = useState([])
    const nav = useNavigate()
    const [subCategoryId, setSubCategoryId] = useState('')
    const changeImage = (e) => {
        setImageName(e.target.value)
        setImageProp(e.target.files[0])

    }
    useEffect(() => {
        fetchCategory()
        fetchSubCategory()
    }, [])
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

     const addProduct = (e) => {
            e.preventDefault()
            let data = new FormData()
            data.append("name", name)
            data.append("catagoryId", categoryId)
            data.append("description", description)
            data.append("image", imageProp)
            data.append("subcatagoryId",subCategoryId)
            data.append('productCode',productCode)
            data.append("price",price)
            apiService.addProduct(data).then((res) => {
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    nav("/allproducts")
                    setName("")
                    setCategoryId("")
                    setImageProp("")
                    setImageName("")
                    setPrice("")
                    setCategoryId("")

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
                            <h1>Add Product</h1>
                            <nav aria-label="breadcrumb" class="banner-breadcrumb">

                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="tracking_box_area section-margin--small">
                <div class="container">
                    <div class="tracking_box_inner">
                        <p>To add your product, please enter the following details in the fields below and press the Submit button.Ensure all information is correct to successfully add your product.</p>
                        <form class="row tracking_form" action="#" method="post" novalidate="novalidate" onSubmit={addProduct}>
                            <div class="col-md-12 form-group">
                                <label>Enter Product Name</label>
                                <input value={name} onChange={(e) => {
                                    setName(e.target.value)
                                }} type="text" class="form-control" id="name" name="name" placeholder="Enter Product Name" onfocus="this.placeholder = ''" onblur="this.placeholder = Enter Product Name'" />
                            </div>
                            <div class="col-md-12 form-group">
                                <label>Enter Product Description</label>
                                <input value={description} onChange={(e) => {
                                    setDescription(e.target.value)
                                }} type="text" class="form-control" id="description" name="description" placeholder="Enter Product description" onfocus="this.placeholder = ''" onblur="this.placeholder = Enter Product Description'" />
                            </div>
                            <div class="col-md-12 form-group">
                                <label>Choose Product Image</label>
                                <input type="file" value={imageName} onChange={changeImage} class="form-control" id="imgge" name="image" placeholder="Choose File" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Choose File'" />
                            </div>
                            <div class="col-md-12 form-group">
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
                            </div>

                            <div class="col-md-12 form-group">
                                <label>Choose Sub-Catagory</label>

                                <div class="form-floating">
                                    <select class="form-control" value={subCategoryId} onChange={(e) => { setSubCategoryId(e.target.value) }} required>
                                        <option disabled selected
                                            value={""}>Choose Sub-Category</option>
                                        {subCategory?.map((el, index) => (
                                            <option key={index} value={el?._id}>{el?.name}</option>
                                        ))}
                                    </select>
                                    <label for="email">Name</label>

                                </div>
                            </div>
                            <div class="col-md-12 form-group">
                                <label>Enter Product Price</label>
                                <input value={price} onChange={(e) => {
                                    setPrice(e.target.value)
                                }} type="text" class="form-control" id="price" name="price" placeholder="Enter Price " onfocus="this.placeholder = ''" onblur="this.placeholder = Enter Price '" />
                            </div>
                            <div class="col-md-12 form-group">
                                <label>Enter Product Code</label>
                                <input value={productCode} onChange={(e) => {
                                    setProductCode(e.target.value)
                                }} type="text" class="form-control" id="productCode" name="productCode" placeholder="Enter Product Code" onfocus="this.placeholder = ''" onblur="this.placeholder = Enter Product Code'" />
                            </div>
                            <div class="col-md-12 form-group">
                                <button type="submit" value="submit" class="button button-tracking" >Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}