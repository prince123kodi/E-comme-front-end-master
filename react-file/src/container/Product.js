import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";



const Products = () => {
    let params = useParams();
    let [products, setProducts] = useState([]);
    // console.log(params.category);

    useEffect(() => {
        fetch("http://localhost:3001/product?category=" + params.category)
            .then(async (ress) => {
                let record = await ress.json();
                if (record) {
                    setProducts(record);
                }
            })
            .catch((err) => {
                console.log("something wrong");
            })
    })
    return (
        <div>
            <div>
                <main>
                    <div className="slider-area ">
                        <div className="single-slider slider-height2 d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="hero-cap text-center">
                                            <h2>Watch Shop</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="popular-items latest-padding">
                        <div className="container">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="row">
                                        {products && products.map((v, index) => {
                                            return (
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                                    <div className="single-popular-items mb-50 text-center">
                                                        <div className="popular-img">
                                                            <img src={v.image} className="w-50" alt />
                                                            <div className="img-cap">
                                                                <span>Add to cart</span>
                                                            </div>
                                                            <div className="favorit-items">
                                                                <span className="flaticon-heart" />
                                                            </div>
                                                        </div>
                                                        <div className="popular-caption">
                                                        <NavLink to={"/singleproduct/"+ v.id} className="d-block">
                                                                <h4>{v.title}</h4>
                                                             </NavLink>
                                                            <div className="mt-3 d-flex justify-content-center">
                                                                <span className="mr-4 ">₹{v.price}</span>
                                                                <del>₹{v.oprice}</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })}
                                    </div>
                                </div>
                                {/* Card two */}
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular1.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular2.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular3.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular4.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular5.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular6.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Card three */}
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular1.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular2.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular3.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular4.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular5.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-popular-items mb-50 text-center">
                                                <div className="popular-img">
                                                    <img src="assets/img/gallery/popular6.png" alt />
                                                    <div className="img-cap">
                                                        <span>Add to cart</span>
                                                    </div>
                                                    <div className="favorit-items">
                                                        <span className="flaticon-heart" />
                                                    </div>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                                    <span>$ 45,743</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Nav Card */}
                        </div>
                    </section>
                    {/* Latest Products End */}
                    {/*? Shop Method Start*/}
                    <div className="shop-method-area">
                        <div className="container">
                            <div className="method-wrapper">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-method mb-40">
                                            <i className="ti-package" />
                                            <h6>Free Shipping Method</h6>
                                            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-method mb-40">
                                            <i className="ti-unlock" />
                                            <h6>Secure Payment System</h6>
                                            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-method mb-40">
                                            <i className="ti-reload" />
                                            <h6>Secure Payment System</h6>
                                            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Shop Method End*/}
                </main>
            </div>
        </div>



    )
}

export default Products;