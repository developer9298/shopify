import { useEffect, useState } from "react";
import apiService from "../apiService";
import Header from "../layout/header";
import { Link } from "react-router-dom";
export default function Home() {
  const [myData, setMyData] = useState([])
    const [catagory, setCatagory] = useState([])

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
      fetchCategory()
    }, []
  )
   const fetchCategory = () => {
          // setLoading(true)
          apiService.getCatagory()
              .then((res) => {
                 
                  if (res.data.success == true) {
                      setCatagory(res.data.data)
                      console.log(res.data.data)
                      console.log("hghg")
                  }
              })
              .catch(err => {
                  console.log(err)
              })
              .finally(() => {
                  setTimeout(() => {
                      // setLoading(false)
                  }, 1000)
              })
      }
  return (
    <>
   <div style={{  backgroundColor:'#efeaec'}}>
      <div class='py-3 px-4 ' >
        <div class="row" >
          <div class="col-md-6 " style={{
            position: 'relative',
            display: 'inline-block',
          }}>

            <img src="	https://themewagon.github.io/hexashop/assets/images/left-banner-image.jpg" alt="Phone" class="phone-img" />
            <div>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                padding: '10px 20px',
                backgroundColor: '#000',
                fontSize: '30px',
                textAlign: 'center',
              }}>Get up to 30% off New Arrivals</div>
              <div style={{
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                // color: 'white',
                padding: '10px 20px',
                //  backgroundColor:'#000',
                fontSize: '10px',
                textAlign: 'center',
              }}>
                <button style={{ backgroundColor: '#fff', color: '#000', fontSize: '18px' }} type="browse" value="submit" class="button  w-100" >Browse Now</button>

              </div>
            </div>
          </div>
          <div class="col-md-6 py-10">
            <div class="row g-1 photo-grid">
              <div style={{
                position: 'relative',
                display: 'inline-block',
              }} class="col-6">
                <img src="https://img.freepik.com/free-photo/young-girl-dressed-up-black-t-shirt-leather-trousers-holding-blank-craft-shopping-bags-with-handles-isolated-white_231208-4952.jpg" class="img-fluid" alt="Photo 1" />
                <div>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    padding: '10px 10px',
                    backgroundColor: '#000',
                    fontSize: '18px',
                    textAlign: 'center',
                  }}>Women Collection</div>

                </div>

              </div>
              <div class="col-6" style={{
                position: 'relative',
                display: 'inline-block',
              }}>
                <img src="https://img.freepik.com/premium-photo/portrait-handsome-young-man-with-shopping-bags_220507-19441.jpg" class="img-fluid" alt="Photo 2" />

                <div>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    padding: '10px 10px',
                    backgroundColor: '#000',
                    fontSize: '18px',
                    textAlign: 'center',
                  }}>Men Collection</div>

                </div>
              </div>
              <div class="col-6" style={{
                position: 'relative',
                display: 'inline-block',
              }}>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" class="img-fluid" alt="Photo 3" />

                <div>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    padding: '10px 10px',
                    backgroundColor: '#000',
                    fontSize: '18px',
                    textAlign: 'center',
                  }}>Shoes Collection</div>

                </div>
              </div>
              <div class="col-6" style={{
                position: 'relative',
                display: 'inline-block',
              }}>
                <img src="https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=n49O0S5rIgzxJX5bU1YjwRHfou0DYPcmsv-N5JAAM14=" class="img-fluid" alt="Photo 4" />
                <div>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    padding: '10px 10px',
                    backgroundColor: '#000',
                    fontSize: '18px',
                    textAlign: 'center',
                  }}>Jewellery Collection</div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
   
       <section class="my-4 calc-60px">

        <div class='mx-7'>

          <div class="row">
            <div style={{ padding: 5, fontSize: 30, fontWeight: '600', color: 'black' }}>Categories</div>

            {catagory.map((dataObj, index) => {
              return (
                <div class="col-md-6 col-lg-4 col-xl-3 ">
                  <div style={{ height: '150px', }} class="card text-center card-product ">
                    <div class="card-product__img">
                      <Link >
                        <img style={{ height: '100px' }}class="card-img" src={dataObj?.image} alt="" />
                      </Link>
                      <h4 class="card-product__title"><a href="single-product.html">{dataObj?.name}</a></h4>

                    </div>
                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section class="my-4 calc-60px">

        <div class='mx-7'>

          <div class="row">
            <div style={{ padding: 5, fontSize: 30, fontWeight: '600', color: 'black' }}>Recent Products
</div>
            {/* <div style={{ paddingTop: 5, fontSize: 15, fontWeight: '200', color: 'grey', paddingBottom: 20 }}>The customer is at the heart of our unique business model, which includes design.</div> */}

            {myData.map((dataObj, index) => {
              return (
               <>
                {dataObj.status==true?
                <div class="col-md-6 col-lg-4 col-xl-3">
                  <div style={{ height: '600px' }} class="card text-center card-product">
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
                      <h4 class="card-product__title"><a href="single-product.html">{dataObj?.name}</a></h4>

                      <p class="card-product__price">{"₹ " + dataObj?.price}</p>
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




      <section class="offer" id="parallax-1" data-anchor-target="#parallax-1" data-300-top="background-position: 20px 30px" data-top-bottom="background-position: 0 20px">
        <div class="container">
          <div class="row">
            <div class="col-xl-5">
              <div class="offer__content text-center">
                <h3>Up To 50% Off</h3>
                <h4>Winter Sale</h4>
                <p>Him she'd let them sixth saw light</p>
                <a class="button button--active mt-3 mt-xl-4" href="#">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      
</div>
    </>
  )

}