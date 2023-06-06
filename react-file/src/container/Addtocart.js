import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";

const Addtocart = () => {
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

       let dd = sessionStorage.getItem('user');
       setUserId(dd);

    //    console.log(userId)
         
    }, setPro)


    return (
        <div>
            <main>
                <div className="slider-area ">
                    <div className="single-slider slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Cart List</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*================Cart Area =================*/}
                <section className="cart_area section_padding">
                    <div className="container">
                        <div className="cart_inner">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="media">
                                                    <div className="d-flex">
                                                        <img src={pro.image} alt />
                                                    </div>
                                                    <div className="media-body">
                                                        <p>{pro.title}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>{pro.price}</h5>
                                            </td>
                                            <td>
                                                <div className="product_count">
                                                    <span className="input-number-decrement"> <i className="ti-minus" /></span>
                                                    <input className="input-number" type="text" defaultValue={1} min={0} max={10} />
                                                    <span className="input-number-increment"> <i className="ti-plus" /></span>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>$720.00</h5>
                                            </td>
                                        </tr>
                                        

                                        <tr className="bottom_button">
                                            <td>
                                                <a className="btn_1" href="#">Update Cart</a>
                                            </td>
                                            <td />
                                            <td />
                                            <td>
                                                <div className="cupon_text float-right">
                                                    <a className="btn_1" href="#">Close Coupon</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td />
                                            <td />
                                            <td>
                                                <h5>Subtotal</h5>
                                            </td>
                                            <td>
                                                <h5>$2160.00</h5>
                                            </td>
                                        </tr>
                                        <tr className="shipping_area">
                                            <td />
                                            <td />
                                            <td>
                                                <h5>Shipping</h5>
                                            </td>
                                            <td>
                                                <div className="shipping_box">
                                                    <ul className="list">
                                                        <li>
                                                            Flat Rate: $5.00
                                                            <input type="radio" aria-label="Radio button for following text input" />
                                                        </li>
                                                        <li>
                                                            Free Shipping
                                                            <input type="radio" aria-label="Radio button for following text input" />
                                                        </li>
                                                        <li>
                                                            Flat Rate: $10.00
                                                            <input type="radio" aria-label="Radio button for following text input" />
                                                        </li>
                                                        <li className="active">
                                                            Local Delivery: $2.00
                                                            <input type="radio" aria-label="Radio button for following text input" />
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        Calculate Shipping
                                                        <i className="fa fa-caret-down" aria-hidden="true" />
                                                    </h6>
                                                    <select className="shipping_select">
                                                        <option value={1}>Bangladesh</option>
                                                        <option value={2}>India</option>
                                                        <option value={4}>Pakistan</option>
                                                    </select>
                                                    <select className="shipping_select section_bg">
                                                        <option value={1}>Select a State</option>
                                                        <option value={2}>Select a State</option>
                                                        <option value={4}>Select a State</option>
                                                    </select>
                                                    <input className="post_code" type="text" placeholder="Postcode/Zipcode" />
                                                    <a className="btn_1" href="#">Update Details</a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="checkout_btn_inner float-right">
                                    <a className="btn_1" href="#">Continue Shopping</a>
                                    <NavLink className="btn_1 checkout_btn_1" to="/checkout">Proceed to checkout</NavLink>
                                </div>
                            </div>
                        </div>
                    </div></section>
            </main>
        </div>


    )
}

export default Addtocart;