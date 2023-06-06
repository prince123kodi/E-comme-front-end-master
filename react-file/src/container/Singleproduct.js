import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";


const Singleproduct = () =>{
    let [pro, setPro] = useState([]);
    let [mm, setMimage] = useState([]);
    let [userId, setUserId] = useState();
    let navigate = useNavigate()

    let singleId = useParams();
    useEffect(()=>{
        setTimeout(async ()=>{
            fetch("http://localhost:3001/product/"+singleId.id)
         .then(async (rss)=>{
            let record = await rss.json();
            if(record){
                // console.log(record)
                setMimage(record.mimage.split(",")) 
                await setPro(record);
            }
         })
         .catch(err=>{
            console.log("something wrong");
         })
        })

       let dd = sessionStorage.getItem('username');
       setUserId(dd);

    //    console.log(userId)
         
    }, setPro)

  

     
    const addtoCart = (e) =>{
       navigate('/login')
    }

    
  
    return(
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
                <div className="product_image_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="product_img_slide owl-carousel">
                                    <div className="single_product_img">
                                        <img src={pro.image} alt="#" className="img-fluid" />
                                    </div>
                                    <div className="single_product_img">
                                        <img src="assets/img/gallery/gallery01.png" alt="#" className="img-fluid" />
                                    </div>
                                    <div className="single_product_img">
                                        <img src="assets/img/gallery/gallery1.png" alt="#" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="s_product_img">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active">
                                            <img src={pro.image} alt height="50" />
                                        </li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to={1}>
                                            <img src={mm[1]} alt height="50" />
                                        </li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                                            <img src={mm[2]} alt height="50" />
                                        </li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src={pro.image} alt="First slide" />
                                        </div>

                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src={mm[1]} alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src={mm[2]} alt="Third slide" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="single_product_text text-center">
                                    <h3>{pro.title}</h3>
                                    <p>{pro.description}</p>
                                    <div className="card_area">
                                        <div className="product_count_area">
                                            <p>Quantity</p>
                                            <div className="product_count d-inline-block">
                                                <span className="product_count_item inumber-decrement"> <i className="ti-minus" /></span>
                                                <input className="product_count_item input-number" type="text" defaultValue={1} min={0} max={10} />
                                                <span className="product_count_item number-increment"> <i className="ti-plus" /></span>
                                            </div>
                                            <p>₹{pro.price}</p>
                                        </div>
                                        <div className="add_to_cart">
                                            {/* {} */}
                                            {/* <NavLink to={"/add_cart/" +pro.id}className="btn_3">add to cart</NavLink> */}
                                            {userId?<NavLink to={"/add_cart/"+pro.id} className="btn_3" >add to cart</NavLink>:<button className="btn_3" onClick={(e)=>addtoCart(e)}>add to cart</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="subscribe_part section_padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="subscribe_part_content">
                                    <h2>Get promotions &amp; updates!</h2>
                                    <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
                                    <div className="subscribe_form">
                                        <input type="email" placeholder="Enter your mail" />
                                        <a href="#" className="btn_1">Subscribe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>


    )
}

export default Singleproduct;