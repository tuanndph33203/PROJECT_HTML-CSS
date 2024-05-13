
import "@/style/checkout.scss"
import { useState } from "react";
import FormInput from "./component/FormInput";
import SelectRegion from "./component/Region";
import City from "./component/City";
const Checkout = ({ orders, setPage }: any) => {
    setPage('Checkout');
    const [show, setShow] = useState<number>(1);
    const [form, setForm] = useState<any>({
        firstName: '',
        lastName: '',
        company: '',
        country: 'VietNam',
        streetAddress: '',
        city: 'Eastern Province',
        zipCode: '',
        phone: '',
        additionalInfo: ''
    });
    
    let subtotal = 0;
    const shipping = 50000;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
        console.log(form);
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(form);
    }
    return (
        <form className="checkout" onClick={handleSubmit} method="post">
            <div className="container">
                <div className="checkout-boxs">
                    <h2 className="text-3xl mb-3">Billing details</h2>
                    <div className="checkout-names">
                        <div className="checkout-name">
                            <h5 className="font-semibold">Firt Name</h5>
                            <FormInput form={form.firtName} change={handleChange} name="firtName"></FormInput>
                        </div>
                        <div className="checkout-name">
                            <h5 className="font-semibold">Last Name</h5>
                            <FormInput form={form.lastName} change={handleChange} name="lastName"></FormInput>
                        </div>
                    </div>
                    <div className="checkout-box">
                        <h5>Company (Optional)</h5>
                        <FormInput form={form.company} change={handleChange} name="company"></FormInput>
                    </div>
                    <div className="checkout-box">
                        <h5>Country / Region</h5>
                        <SelectRegion></SelectRegion>
                    </div>
                    <div className="checkout-box">
                        <h5>Street Address</h5>
                        <FormInput form={form.firtName} change={handleChange} name="firtName"></FormInput>
                    </div>
                    <div className="checkout-box">
                        <h5>Town / City</h5>
                        <City></City>
                    </div>
                    <div className="checkout-box">
                        <h5>Zip Code</h5>
                        <FormInput form={form.firtName} change={handleChange} name="firtName"></FormInput>
                    </div>
                    <div className="checkout-box">
                        <h5>Phone</h5>
                        <FormInput form={form.firtName} change={handleChange} name="firtName"></FormInput>
                    </div>
                    <div className="checkout-box">
                        <h5>Email</h5>
                        <FormInput form={form.firtName} change={handleChange} name="firtName"></FormInput>
                    </div>
                    <div className="checkout-box">
                        <FormInput form={form.firtName} change={handleChange} name="firtName"  placeholder="Additional information" ></FormInput>
                    </div>
                </div>
                <div className="checkout-boxs">
                    <div className="order">
                        <div className="order-price">
                            <h4>Product</h4>
                            <div className="order-list">
                                {orders.map((item: any) => (
                                    <div className="order-quantity">
                                        <span className="grey">{item.name} &nbsp;</span><strong>x {item.quantity}</strong>
                                    </div>
                                ))}
                            </div>
                            <span>Order Subtotal</span>
                            <span>Shipping Fee</span>
                            <span>Order Total</span>
                        </div>
                        <div className="order-price mt-3">
                            <h4>Subtotal</h4>
                            {
                                orders.map((item: any) => {
                                    subtotal += item.price * item.quantity;
                                    return (
                                        <span>{item.price * item.quantity}<sub>đ</sub></span>
                                    )
                                })
                            }
                            <span>{subtotal}<sub>đ</sub></span>
                            <span>{shipping}<sub>đ</sub></span>
                            <h3>{subtotal + shipping}<sub>đ</sub></h3>
                        </div>
                    </div>
                    <div className="order-more">
                        <div className="order-ship">
                            <div className="order-bank">
                                <div className="order-bank-title">
                                    <div className={`order__circle ${show == 1 ? 'black' : ''}`} onClick={() => setShow(1)} />
                                    <h4 className={`order__title ${show == 1 ? '' : 'grey'}`}>Direct Bank Transfer</h4>
                                </div>
                                <p className={`grey order__content ${show == 1 ? 'active' : ''}`} >Make your payment directly into our bank account. Please use your
                                    Order ID
                                    as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>
                            <div className="order-bank">
                                <div className="order-bank-title">
                                    <div className={`order__circle ${show == 2 ? 'black' : ''}`} onClick={() => setShow(2)} />
                                    <h4 className={`order__title ${show == 2 ? '' : 'grey'}`}>Pay anytime</h4>
                                </div>
                                <p className={`grey order__content ${show == 2 ? 'active' : ''}`}>Make your payment directly into our bank account. Please use your Order ID
                                    as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>
                            <div className="order-bank">
                                <div className="order-bank-title">
                                    <div className={`order__circle ${show == 3 ? 'black' : ''}`} onClick={() => setShow(3)} />
                                    <h4 className={`order__title ${show == 3 ? '' : 'grey'}`}>Cash On Delivery</h4>
                                </div>
                                <p className={`grey order__content ${show == 3 ? 'active' : ''}`}>Make your payment directly into our bank account. Please use your Order ID
                                    as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>
                            <p className="mt-2">Your personal data will be used to support your experience throughout this website, to manage access to
                                your account, and for other purposes described in our <strong>privacy policy.</strong></p>
                            <div className="order-btn mt-4">
                                <button>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Checkout