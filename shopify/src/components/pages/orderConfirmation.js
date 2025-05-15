import { useEffect, useState } from "react"
import apiService from "../apiService"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
export default function OrderConfirmation() {
  const [myData, setMyData] = useState([])

  const fetchOrder = () => {
    apiService.getOrders()
      .then((res) => {
        if (res.data.success == true) {
          setMyData(res.data.data)
          console.log(myData)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(
    () => {
      fetchOrder()
    }, []
  )

  const changeStatus = (id, orderStatus) => {



    let data = {
      _id: id,
      orderStatus: orderStatus
    }
    console.log(data)
    apiService.changeOrderStatus(data)
      .then((res) => {
        if (res.data.success == true) {
          toast.success(res.data.message)

          fetchOrder()
        }
        else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })


  }



  return (
    <>
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <header class="bg-surface-primary border-bottom pt-6">
            <div class="container-fluid  my-5">
              <div class="mb-npx">
                <div class="row align-items-center">
                  <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                    <h1 class="h2 mb-0 ls-tight">Orders Summary</h1>
                  </div>
                
                </div>

              </div>
            </div>
          </header>

          <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">


              <div class="card shadow border-0 mb-7">
                <div class="card-header">
                  <h5 class="mb-0">ORDER SUMMARY</h5>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>

                        <th scope="col">Product Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{
                      myData?.map((el, index) => (

                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{el?.userId?.name}</td>
                          <td>
                            <a class="text-heading font-semibold" href="#">
                              <Link to={"/productcheckout/" + el?._id}>
                                <img alt="..." src={el?.productId?.image} class="avatar avatar-xs me-2" style={{ height: '80px', width: '80px' }} />
                              </Link>
                              {el?.productId?.name}
                            </a>
                          </td>
                          <td>
                            {el?.address}
                          </td>

                          <td>
                            {el?.productId?.price}
                          </td>
                          <td>
                            <span class="badge badge-lg badge-dot">
                              {el?.orderStatus == "Cancelled" ?
                                <>
                                  <i class="bg-danger"></i> {el?.orderStatus}
                                </> :
                                <>
                                  <i class="bg-success"></i> {el?.orderStatus}
                                </>

                              }

                            </span>
                          </td>
                          <td class="text-end">

                            {el?.orderStatus == "Pending" ?

                              <>
                                <button style={{ marginLeft: '20px', height: '30px', width: '60px', fontSize: '10px', justifyItems: 'center', backgroundColor: 'green', borderRadius: '10px', color: 'white' }}
                                  onClick={() => {

                                    changeStatus(el?._id, "Cancelled")
                                  }}                             >Cancel</button>
                              </> :
                              <></>}
                          </td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}