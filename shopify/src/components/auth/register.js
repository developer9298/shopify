import axios from "axios"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { toast } from "react-toastify"
import apiService from "../apiService"

export default function Register() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const [contact, setContact] = useState("")
	const [address, setAddress] = useState("")

	const nav = useNavigate()

	const signupUser = (e) => {
		e.preventDefault()
		let user = {
			name: name,
			email: email,
			password: password,
			contact: contact,
			address: address

		}
		apiService.registerApi(user)
			.then((res) => {
				if (res.data.success == true) {
					toast.success(res.data.message)
					nav("/login")
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


			<section class="login_box_area section-margin">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div class="login_box_img">
								<div class="hover">
									<img src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo='></img>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="login_form_inner register_form_inner">
								<p style={{ color: 'blue', fontSize: '28px', fontWeight: '500' }}>Welcome to Shopify</p>
								<form class="row login_form mt-10" action="#/" id="register_form" >
									<div class="col-md-12 form-group">
										<input value={name} onChange={(e) => {
											setName(e.target.value)
										}} type="text" class="form-control" id="name" name="name" placeholder="Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Name'" />
									</div>
									<div class="col-md-12 form-group">
										<input value={email} onChange={(e) => {
											setEmail(e.target.value)
										}} type="text" class="form-control" id="email" name="email" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" />
									</div>
									<div class="col-md-12 form-group">
										<input value={password} onChange={(e) => {
											setPassword(e.target.value)
										}} type="text" class="form-control" id="password" name="password" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
									</div>

									<div class="col-md-12 form-group">
										<input value={contact} onChange={(e) => {
											setContact(e.target.value)
										}} type="number" class="form-control" id="contact" name="contact" placeholder="contact" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Contact'" />
									</div>
									<div class="col-md-12 form-group">
										<input value={address} onChange={(e) => {
											setAddress(e.target.value)
										}} type="text" class="form-control" id="address" name="address" placeholder="address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Address'" />
									</div>


									<div class="col-md-12 form-group mt-10">
										<button type="submit" value="submit" class="button button-login w-100" onClick={signupUser}>Signup</button>

									</div>

										<div class="col-md-12 form-group">
										<Link to={"/login"}>
										<span style={{ color: 'blue' }}>
											Already have an Account?
										</span>
										<span style={{ color: 'red' }}>
											Login
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