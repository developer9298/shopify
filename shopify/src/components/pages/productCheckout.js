import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import apiService from "../apiService"
import { PacmanLoader, RotateLoader } from "react-spinners"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function ProductCheckout() {
	let [loading, setLoading] = useState(false);
	const [address, setAddress] = useState("")

	const { id } = useParams()
	const nav = useNavigate()
	const [result, setResult] = useState("")



	const fetchSingleOrder = () => {
		let data = {
			_id: id
		}

		apiService.singleOrder(data)
			.then((res) => {
				if (res.data.success == true) {
					toast.success(res.data.message)
					setResult(res.data.data)
					console.log(result)

				}
				else {
					toast.error(res.data.message)
				}
			})
			.catch((err) => {
				toast.error(err.message)
			})
	}
	useEffect(() => {
		fetchSingleOrder()
	}, [])

	return (
		<>
			<div style={{ marginBottom: 20 }}>
				<div class="blog-banner">
					<div class="text-center">
						<h1>Review Your Order</h1>

						 <span class="badge badge-lg badge-dot">
                              {result?.orderStatus == "Cancelled" ?
                                <>
                                  <i class="bg-danger"></i> {result?.orderStatus}
                                </> :
                                <>
                                  <i class="bg-success"></i> {result?.orderStatus}
                                </>

                              }

                            </span>
					</div>
				</div>
				<div class="product_image_area">
					<div class="container">
						<div class="row s_product_inner">
							<img style={{ width: '500px', height: '550px' }} src={result?.productId?.image} alt="" />
							<div class="col-lg-5 offset-lg-1  mx-auto mt-5 mb-10 ">
								<div class='mx-auto  mt-5 mb-5 mb-10'>
									<h3>{result?.productId?.name}</h3>
									<span> ₹ {result?.productId?.price}</span>
									<p>MRP incl. of all taxes</p>
									<div id="display-text"></div>
									<p>{result?.productId?.description}</p>
									<p style={{ color: 'Red', fontWeight: '700' }}>Shipping Details:</p>
									<p>{result?.address}</p>
									<p>{result?.pinCode}</p>
									<p>{result?.city}</p>
									<p style={{ color: 'black', fontWeight: '700' }}>Deliver to:</p>
									<p>{result?.userId?.name}</p>
									<p>{result?.userId?.email}</p>
									<div style={{ marginTop: 20 }}>
										<button type="submit" value="submit" class="button  w-100"

											onClick={() => {

												nav('/')
											}}
										>Continue Shopping</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}