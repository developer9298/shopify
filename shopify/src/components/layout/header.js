import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const loc = useLocation()
    const path = loc.pathname
    console.log(path)
    return (
        <>
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
                            <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul class="nav navbar-nav menu_nav ml-auto mr-auto">
                                    <li class="nav-item ">
                                        <Link to="/" class={path == "/" ? "nav-item nav-link active" : "nav-item nav-link"}>Home</Link>

                                    </li>
                                    <li class="nav-item submenu dropdown">
                                        <Link href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Shop</Link>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <Link to="/shopcatagory" class="nav-link" href="category.html">Shop Category</Link></li>
                                            <li class="nav-item">
                                                <Link to="/productdetail" class="nav-link" href="single-product.html">Product Details</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/productcheckout"  class="nav-link" href="checkout.html">Product Checkout</Link></li>
                                            <li class="nav-item"><Link to="/confirmation" class="nav-link" href="confirmation.html">Confirmation</Link></li>
                                            <li class="nav-item"><Link to="/cart" class="nav-link" href="cart.html">Shopping Cart</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item submenu dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Blog</a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><Link to="/blog" class="nav-link" href="blog.html">Blog</Link></li>
                                            <li class="nav-item"><Link to="/blogdetail" class="nav-link" href="single-blog.html">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item submenu dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Pages</a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><Link to="/login" class="nav-link" href="login.html">Login</Link></li>
                                            <li class="nav-item"><Link to="/register" class="nav-link" href="register.html">Register</Link></li>
                                            <li class="nav-item"><Link to="/tracking" class="nav-link" href="tracking-order.html">Tracking</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><Link to="/contact" class="nav-link" href="contact.html">Contact</Link></li>
                                </ul>

                                <ul class="nav-shop">
                                    <li class="nav-item"><button><i class="ti-search"></i></button></li>
                                    <li class="nav-item"><button><i class="ti-shopping-cart"></i><span class="nav-shop__circle">3</span></button> </li>
                                    <li class="nav-item"><a class="button button-header" href="#">Buy Now</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}