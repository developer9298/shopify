import { useEffect, useState } from "react"
import apiService from "../apiService"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"

export default function ChangePassword() {
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
   const nav = useNavigate()
    const forgotPassword = (e) => {
        e.preventDefault()
        let data = {
            'oldPassword': oldPass,
            'newPassword': newPass,
            'confirmPassword':confirmPass,
            '_id':localStorage.getItem('userId')
            
        }
        console.log(data)

        apiService.changePassword(data).then((res) => {
            console.log(data)
            if (res.data.success == true) {
                nav("/")
                toast.success(res.data.message)
                setOldPass()
                setNewPass("")
                setConfirmPass("")
               

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


            <section class="tracking_box_area section-margin--small">
                <div class="container">
                    <div class="tracking_box_inner">

                        <div style={{ textAlign: 'center' }}>
                            <img style={{ width: '300px', height: '300px' }} src='https://img.freepik.com/premium-vector/forgot-password-flat-style-design-vector-illustration-stock-illustration_357500-2815.jpg?semt=ais_hybrid&w=740' alt="" />

                        </div>
                        <form onSubmit={forgotPassword}>
                            <div class="row g-3 mt-10">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input readonly type="text" class="form-control" id="old pass" placeholder="Enter Old Password" 
                                        value={oldPass} onChange={(e) => { setOldPass(e.target.value) }}  />
                                        <label for="name">Enter Old Password</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="new pass" placeholder="Enter Old Password" 
                                        value={newPass} onChange={(e) => { setNewPass(e.target.value) }} />
                                        <label for="email">Enter New Password</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="confirm pass" placeholder=" Confiem Password" 
                                        value={confirmPass} onChange={(e) => { setConfirmPass(e.target.value) }} />

                                        <label for="email">Confirm Password</label>
                                    </div>
                                </div>
                                

                                <div class="col-12 text-center mt-10">
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