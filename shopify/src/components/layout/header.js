import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const loc = useLocation()
    const path = loc.pathname
    const nav = useNavigate()
    console.log(path)
    const isLogin = localStorage.getItem("isLogin")
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")

    console.log(name, email)
    const logout = () => {
        localStorage.clear()

        nav("/login")
    }





    return (
        <>
        
 {localStorage.getItem('userType')==2  ?
         <header class="header_area">
                <div class="main_menu bg-warning ">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container">
                            <a class="navbar-brand logo_h" href="index.html">
                                <h2 style={{ fontFamily: 'cursive' }}>Shopify</h2>

                            </a>
                            {/* <img src="https://png.pngtree.com/png-vector/20220601/ourmid/pngtree-shop-logo-design-with-a-handshake-in-bag-png-image_4749125.png" alt="" /></a> */}
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <div class="collapse navbar-collapse offset mr-4" id="navbarSupportedContent" >
                                <ul class="nav navbar-nav menu_nav ml-auto mr-auto">
                                    <li class="nav-item ">
                                        <Link to="/" class={path == "/" ? "nav-item nav-link active" : "nav-item nav-link"}>Home</Link>

                                    </li>
                                    <li class="nav-item ">
                                        <Link to="/allproducts" class={path == "/allproducts" ? "nav-item nav-link active" : "nav-item nav-link"}>Products</Link>

                                    </li>
                                      <li class="nav-item ">
                                        <Link to="/confirmation" class={path == "/confirmation" ? "nav-item nav-link active" : "nav-item nav-link"}>My Order</Link>

                                    </li>
                                        
                                    {isLogin ? <>
                                        <li class="nav-item">    <Link to="/login" class="nav-link" href="contact.html" onClick={logout}>Logout</Link></li>
                                    </> : <> <li class="nav-item"> <Link to="/login" class="nav-link" href="contact.html">Login</Link></li></>}


                                </ul>
                                <i class="fa fa-user-circle-o" style={{ fontSize: '30px', color: 'orange' }}></i>
                                <Link to={"/changePassword"}>
                                    <img style={{ width: '50px', height: '50px' }} src='https://icon-library.com/images/admin-icon/admin-icon-25.jpg' alt="" />
                                </Link>
                                <div class=" d-none d-lg-flex">
                                    <div class="ps-3">
                                        {isLogin ? <><small class="text-dark mb-0">{name}</small>
                                            <p class="text-dark fs-3 mb-0">{email}</p></> : <>
                                        </>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>:
            //admin
             <header class="header_area">
                <div class="main_menu bg-warning ">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container">
                            <a class="navbar-brand logo_h" href="index.html">
                                <h2 style={{ fontFamily: 'cursive' }}>Shopify</h2>

                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <div class="collapse navbar-collapse offset mr-4" id="navbarSupportedContent" >
                                <ul class="nav navbar-nav menu_nav ml-auto mr-auto">
                                    <li class="nav-item ">
                                        <Link to="/" class={path == "/" ? "nav-item nav-link active" : "nav-item nav-link"}>Home</Link>

                                    </li>
                                    <li class="nav-item ">
                                        <Link to="/dashboard" class={path == "/dashboard" ? "nav-item nav-link active" : "nav-item nav-link"}>Dashboard</Link>

                                    </li>
                                   
                                        <li class="nav-item submenu dropdown">
                                            <Link href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                                aria-expanded="false">Catagory</Link>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <Link to="/addcatagory" class="nav-link" href="category.html">Add Category</Link></li>
                                                <li class="nav-item">
                                                    <Link to="/shopcatagory" class="nav-link" href="category.html">Shop Category</Link></li>


                                            </ul>
                                        </li>

                                    
                                    <li class="nav-item submenu dropdown">
                                        <Link href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Product</Link>
                                        <ul class="dropdown-menu">
                                            
                                                <li class="nav-item">
                                                    <Link to="/addproduct" class="nav-link" href="category.html">Add Product</Link></li>


                                           

                                            <li class="nav-item">
                                                <Link to="/subProduct" class="nav-link" href="category.html">Shop Products</Link></li>
                                        </ul>
                                    </li>


                                   

                                        <li class="nav-item submenu dropdown">
                                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                                aria-expanded="false">Sub-Catagory</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item"><Link to="/addsubcatagory" class="nav-link" href="blog.html">Add Sub-Catagory</Link></li>
                                                <li class="nav-item"><Link to="/getsubcatagory" class="nav-link" href="single-blog.html">Shop Sub-Catagory</Link></li>
                                            </ul>
                                        </li>

                                    

                                   
 
                                        
                                    {isLogin ? <>
                                        <li class="nav-item">    <Link to="/login" class="nav-link" href="contact.html" onClick={logout}>Logout</Link></li>
                                    </> : <> <li class="nav-item"> <Link to="/login" class="nav-link" href="contact.html">Login</Link></li></>}


                                </ul>
                                <i class="fa fa-user-circle-o" style={{ fontSize: '30px', color: 'orange' }}></i>
                                <Link to={"/changePassword"}>
                                    <img style={{ width: '50px', height: '50px' }} src='https://icon-library.com/images/admin-icon/admin-icon-25.jpg' alt="" />
                                </Link>
                                <div class=" d-none d-lg-flex">
                                    <div class="ps-3">
                                        {isLogin ? <><small class="text-dark mb-0">{name}</small>
                                            <p class="text-dark fs-3 mb-0">{email}</p></> : <>
                                        </>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>   
        
        }

        </>
    )
}