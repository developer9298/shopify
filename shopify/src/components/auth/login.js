import axios from "axios"
import { useState, CSSProperties } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import apiService from "../apiService"
import { Link } from "react-router-dom"
export default function Login() {
	const [email, setEmail] = useState("")
	const [password, SetPassword] = useState("")
	let [loading, setLoading] = useState(false);
	let [color, setColor] = useState("#ff34ff");

	const nav = useNavigate()
	const loginApiCall = (e) => {
		e.preventDefault()
		setLoading(true)
		let data = {
			email: email,
			password: password

		}
		apiService.loginApi(data)
			.then((res) => {
				if (res.data.success == true) {
					
					localStorage.setItem("isLogin", true)
					localStorage.setItem("token", res.data.token)
					localStorage.setItem("email", res.data.data.email)
					localStorage.setItem("userType", res.data.data.userType)
					localStorage.setItem("name", res.data.data.name)
					localStorage.setItem("userId", res.data.data._id)
					console.log(res.data.email)
					if (res.data.data.userType == 2) {
						nav("/")
					}
					else {
						nav("/dashboard")
					}
					toast.success(res.data.message)

				}

			}).catch(err => {
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





			<section class="login_box_area section-margin">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div class="login_box_img">
								<div class="hover">
									<img src='https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg'></img>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="login_form_inner">
								<p style={{ color: 'blue', fontSize: '28px', fontWeight: '500' }}>Welcome to Shopify</p>
								<form class="row login_form mt-10" action="#/" id="contactForm" >
									<div class="col-md-12 form-group">
										<input

											value={email} onChange={(e) => { setEmail(e.target.value) }}
											type="text" class="form-control" id="name" name="name" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" />
									</div>
									<div class="col-md-12 form-group">
										<input value={password} onChange={(e) => { SetPassword(e.target.value) }} type="text" class="form-control" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
									</div>

									<div class="col-md-12 form-group">
										<button type="submit" value="submit" class="button button-login w-100" onClick={loginApiCall}>Log In</button>
										{/* <Link to={'/forgotPassword'}>Forgot Password?</Link> */}
									</div>
									<div class="col-md-12 form-group">
										<Link to={"/register"}>
										<span style={{ color: 'blue' }}>
											Don't Have an Account?
										</span>
										<span style={{ color: 'red' }}>
											Create Account
										</span>
										</Link>

									</div>

								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}