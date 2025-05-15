import { useEffect, useState } from "react"
import apiService from "../apiService"
import { Link } from "react-router-dom"

export default function AllProduct() {
  const [myData, setMyData] = useState([])

  const fetchProduct = () => {
    apiService.getProducts()
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
      fetchProduct()
    }, []
  )
  return (
    <>

      <section class="section-margin calc-60px">
        <div class="container">

          <div class="row">

            {myData.map((dataObj, index) => {
              return (
              <>
              {dataObj.status==true?
                <div class="col-md-6 col-lg-4 col-xl-3">
                  <div class="card text-center card-product">
                    <div class="card-product__img">
                      <Link to={"/productdetail/" + dataObj?._id}>
                        <img class="card-img" src={dataObj?.image} alt="" />
                      </Link>
                      <ul class="card-product__imgOverlay">
                        <li><button><i class="ti-search">

                        </i></button></li>
                        <li><button><i class="ti-shopping-cart"></i></button></li>
                        <li><button><i class="ti-heart"></i></button></li>
                      </ul>
                    </div>
                    <div class="card-body">
                      <h4 class="card-product__title"><a href="single-product.html">{dataObj?._id}</a></h4>

                      <h4 class="card-product__title"><a href="single-product.html">{dataObj?.name}</a></h4>
                      <p class="card-product__price">{dataObj?.price + " Rs/-"}</p>
                    </div>
                  </div>
                </div>:<></>
              }
              </>
              );
            })}
          </div>
        </div>
      </section>

    </>
  )
}