import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import apiService from "../apiService"
import { PacmanLoader, RotateLoader } from "react-spinners"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
export default function ProductDetail() {
	let [loading, setLoading] = useState(false);
	const [address, setAddress] = useState("")
	const [pinCode, setPinCode] = useState("")
	const [city, setCity] = useState("")

	const { id } = useParams()
	const nav = useNavigate()
	const [result, setResult] = useState("")

	useEffect(() => {
		fetchSingleProduct()
	}, [])

	const fetchSingleProduct = () => {
		let data = {
			_id: id
		}

		apiService.singleProduct(data)
			.then((res) => {
				if (res.data.success == true) {
					// toast.success(res.data.message)
					//console.log(res.data.data)
					setResult(res.data.data)
					console.log(result)
					// setName(res.data.data.name)
					// setCategoryId(res.data.data.categoryId?._id)
					// setPreviousImage(res.data.data.image)
				}
				else {
					toast.error(res.data.message)
				}
			})
			.catch((err) => {
				toast.error(err.message)
			})
	}

	const addOrder = (e) => {
		e.preventDefault()
		let data = {
			'userId': localStorage.getItem("userId"),
			'productId': id,
			'address': address,
			'pinCode':pinCode,
			'city':city
		}
		console.log(data)
		
if(localStorage.getItem('isLogin')==true)
		{
			apiService.placeOrder(data).then((res) => {
			console.log(data)
			if (res.data.success == true) {
				nav("/confirmation")
				toast.success(res.data.message)
				// nav("/allproducts")
				setAddress("")


			}
			else {
				// console.log(res.data.message)
				toast.error(res.data.message)

			}
		}).catch((err) => {
			toast.error(err.message)

		})
		}
		else{
			alert("Login Required");
		}
	}


	return (
		<>
			<div class="product_image_area">
				<div class="container">
					<div class="row s_product_inner">
						<div class="col-lg-6 my-5">
							<div class="owl-carousel owl-theme s_Product_carousel">
								<div class="single-prd-item">
									<img style={{width:'700px',height:'700px'}}class="img-fluid" src={result?.image} alt="" />
								</div>
								<div class="single-prd-item">
									<img style={{width:'700px',height:'700px'}}class="img-fluid" src={result.image} alt="" />
								</div>
								<div class="single-prd-item">
									<img style={{width:'700px',height:'700px'}}class="img-fluid" src={result.image} alt="" />
								</div>
							</div>
						</div>
						<div class="col-lg-5 offset-lg-1  mx-auto mt-5 mb-10 ">
							<div class='mx-auto  mt-5 mb-5 mb-10'>
								<h1 class="h2 mb-4 ls-tight mt-5 ">{result?.name}</h1>
								
								<span> ₹ {result?.price}</span>
								<p>MRP incl. of all taxes</p>
								<div id="display-text"></div>
								<p>{result?.description}</p>
								<p style={{color:'red'}}class="h4 mb-4 ls-tight mt-5 ">Shipping Address</p>

								<form onSubmit={addOrder}>
									<div class="col-md-12 form-group">
										<input type="text" class="form-control" id="name" placeholder="Enter Full address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
									</div>
									<div class="col-md-12 form-group">
										<input type="text" class="form-control" id="pinCode" placeholder="Enter Your City Pin" value={pinCode} onChange={(e) => { setPinCode(e.target.value) }} />
									</div>
									<div class="col-md-12 form-group">
										<input type="text" class="form-control" id="city" placeholder="Enter City" value={city} onChange={(e) => { setCity(e.target.value) }} />
									</div>
									<button class="btn btn-block btn-primary font-weight-bold py-3 mt-10">Place Order</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>



			
		</>
	)
}