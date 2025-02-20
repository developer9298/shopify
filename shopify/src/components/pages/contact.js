export default function Contact() {
    return (
        <>
            <section class="blog-banner-area" id="contact">
                <div class="container h-100">
                    <div class="blog-banner">
                        <div class="text-center">
                            <h1>Contact Us</h1>
                            <nav aria-label="breadcrumb" class="banner-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-margin--small">
                <div class="container">
                    <div class="d-none d-sm-block mb-5 pb-4">
                        <div class="col-md-12 bg-dark">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1600663868074!5m2!1sen!2sbd" frameborder="0" width="100%"
                                height="550"></iframe>
                        </div>

                    </div>


                    <div class="row">
                        <div class="col-md-4 col-lg-3 mb-4 mb-md-0">
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-home"></i></span>
                                <div class="media-body">
                                    <h3>California United States</h3>
                                    <p>Santa monica bullevard</p>
                                </div>
                            </div>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-headphone"></i></span>
                                <div class="media-body">
                                    <h3><a href="tel:454545654">00 (440) 9865 562</a></h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-email"></i></span>
                                <div class="media-body">
                                    <h3><a href="mailto:support@colorlib.com">support@colorlib.com</a></h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 col-lg-9">
                            <form action="#/" class="form-contact contact_form" method="post" id="contactForm" novalidate="novalidate">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <div class="form-group">
                                            <input class="form-control" name="name" id="name" type="text" placeholder="Enter your name" />
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" name="email" id="email" type="email" placeholder="Enter email address" />
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="form-group">
                                            <textarea class="form-control different-control w-100" name="message" id="message" cols="30" rows="5" placeholder="Enter Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group text-center text-md-right mt-3">
                                    <button type="submit" class="button button--active button-contactForm">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}