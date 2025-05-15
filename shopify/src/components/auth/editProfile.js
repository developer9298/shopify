import { useEffect, useState } from "react"
import apiService from "../apiService"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
export default function EditProfile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")
    const [result, setResult] = useState("")



    const getProfile = () => {

        let data = {
            'userId': localStorage.getItem("userId")
        }
        console.log(data)
        apiService.getProfile(data)
            .then((res) => {
                if (res.data.success == true) {

                    setName(res.data.data.name)
                    setEmail(res.data.data.email)
                    setAddress(res.data.data.address)
                    setContact(res.data.data.contact)
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
        getProfile()
    }, [])

    const editProfile = (e) => {
        e.preventDefault()
        let data = {
            'userId': localStorage.getItem("userId"),
            'address': address,
            
        }
        console.log(data)

        apiService.editProfile(data).then((res) => {
            console.log(data)
            if (res.data.success == true) {
                //nav("/confirmation")
                toast.success(res.data.message)
                getProfile()
                setAddress("")
                setName("")
                setEmail("")
                setContact("")

            }
            else {
                // console.log(res.data.message)
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
                            <img style={{ width: '100px', height: '100px' }} src='https://icon-library.com/images/admin-icon/admin-icon-25.jpg' alt="" />

                        </div>
                        <form onSubmit={editProfile}>
                            <div class="row g-3 mt-10">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input readonly type="text" class="form-control" id="name" placeholder="Enter Name" value={name} onChange={(e) => { setName(e.target.value) }}  />
                                        <label for="name">Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Enter Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Enter Phone Number" value={contact} onChange={(e) => { setContact(e.target.value) }} />

                                        <label for="email">Contact</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Enter Address" value={address} onChange={(e) => { setAddress(e.target.value) }} />

                                        <label for="email">Address</label>
                                    </div>
                                </div>

                                {/* <div class="col-12 text-center mt-10">
                                    <button class="btn btn-primary rounded-pill py-3 px-5" type="submit">Edit Profile</button>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}