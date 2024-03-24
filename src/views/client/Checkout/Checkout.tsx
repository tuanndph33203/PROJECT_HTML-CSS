import "@/style/checkout.scss"
const Checkout = () => {
    return (
        <section className="checkout">
            <div className="container">
                <div className="checkout-boxs">
                    <h2>Billing details</h2>
                    <div className="checkout-names">
                        <div className="checkout-name">
                            <h5>Firt Name</h5>
                            <input className="checkout-input" type="text" />
                        </div>
                        <div className="checkout-name">
                            <h5>Last Name</h5>
                            <input className="checkout-input" type="text" />
                        </div>
                    </div>
                    <div className="checkout-box">
                        <h5>Company (Optional)</h5>
                        <input type="text"/>
                    </div>
                    <div className="checkout-box">
                        <h5>Country / Region</h5>
                        <select className="grey">
                            <option>Sri Lanka</option>
                            <option>New York</option>
                            <option>Washington DC</option>
                        </select>
                    </div>
                    <div className="checkout-box">
                        <h5>Street Address</h5>
                        <input type="text"/>
                    </div>
                    <div className="checkout-box">
                        <h5>Town / City</h5>
                        <select className="grey">
                            <option>Eastern Province</option>
                            <option>Northern Province</option>
                            <option>Southern Province</option>
                            <option>Western Province</option>
                        </select>
                    </div>
                    <div className="checkout-box">
                        <h5>Zip Code</h5>
                        <input type="text"/>
                    </div>
                    <div className="checkout-box">
                        <h5>Phone</h5>
                        <input type="text"/>
                    </div>
                    <div className="checkout-box">
                        <h5>Email</h5>
                        <input type="text"/>
                    </div>
                    <div className="checkout-box">
                        <input type="text" id="checkout-email" placeholder="Additional information" />
                    </div>
                </div>
                <div className="checkout-boxs">
                    <div className="order">
                        <div className="order-price">
                            <h4>Product</h4>
                            <div className="order-quantity">
                                <span className="grey">Asgaard sofa &nbsp;</span><strong>x 1</strong>
                            </div>
                            <span>Subtotal</span>
                            <span>Total</span>
                        </div>
                        <div className="order-price">
                            <h4>Subtotal</h4>
                            <span>25.000.000<sub>đ</sub></span>
                            <span>250.000.000<sub>đ</sub></span>
                            <h3>250.000.000<sub>đ</sub></h3>
                        </div>
                    </div>
                    <div className="order-more">
                        <div className="order-ship">
                            <div className="order-bank">
                                <div className="order-bank-title">
                                    <div className="order__circle black" />
                                    <h4 className="order__title">Direct Bank Transfer</h4>
                                </div>
                                <p className="grey order__content active">Make your payment directly into our bank account. Please use your
                                    Order ID
                                    as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>
                            <div className="order-bank">
                                <div className="order-bank-title">
                                    <div className="order__circle"  />
                                    <h4 className="order__title grey">Pay anytime</h4>
                                </div>
                                <p className="grey order__content">Make your payment directly into our bank account. Please use your Order ID
                                    as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>
                            <div className="order-bank">
                                <div className="order-bank-title">
                                    <div className="order__circle"  />
                                    <h4 className="order__title grey">Cash On Delivery</h4>
                                </div>
                                <p className="grey order__content">Make your payment directly into our bank account. Please use your Order ID
                                    as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>
                            <p>Your personal data will be used to support your experience throughout this website, to manage access to
                                your account, and for other purposes described in our <strong>privacy policy.</strong></p>
                            <div className="order-btn">
                                <h5>Place Order</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout