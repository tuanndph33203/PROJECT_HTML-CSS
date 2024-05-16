import "@/style/checkout.scss";
import { useContext, useEffect, useState } from "react";
import FormInput from "./component/FormInput";
import SelectRegion from "./component/Region";
import City from "./component/City";
import useOrderMutation from "@/hooks/useOrder";
import { checkoutValidate } from "@/validate/checkout";
import Toast from "@/components/Toast";
import UserContext from '@/context/UserContext';
import PaymentSuccessful from "./component/PaymentSuccessful";

const Checkout = ({ orders, setPage }: any) => {
    const userContext = useContext(UserContext);
    const { mutate } = useOrderMutation({ action: "CREATE" });
    const [total, setTotal] = useState<number>(0)
    const [subTotal, setSubTotal] = useState<number>(0)
    const [showPayment, setShowPayment] = useState<boolean>(false);

    useEffect(() => {
        setPage('Checkout');
    }, [setPage]);

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
        email: '',
        additionalInfo: ''
    });

    useEffect(() => {
        const sub = orders.reduce((acc: number, item: { price: number, quantity: number }) => acc + item.price * item.quantity, 0);
        setSubTotal(sub);
        setTotal(sub + shipping);
    }, [orders]);

    const shipping = 50000;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!userContext || !userContext.value) {
            Toast({ type: "warning", report: "Đăng Nhập Để Mua Hàng <3 !!" });
            return
        }
        const { value } = userContext;
        const orderData = {
            ...form,
            userId: value._id,
            items: orders,
            total,
        };
        try {
            const { error, value } = checkoutValidate(orderData);
            if (error) {
                error.details.map((detail: { message: string }, index: number) => {
                    setTimeout(() => {
                        Toast({ type: "error", report: detail.message });
                    }, index * 1000);
                })
            } else {
                await mutate(value);
                setShowPayment(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form className="checkout" onSubmit={handleSubmit} method="post">
                <div className="container">
                    <div className="checkout-boxs">
                        <h2 className="text-3xl mb-3">Billing details</h2>
                        <div className="checkout-names">
                            <div className="checkout-name">
                                <h5 className="font-semibold">First Name</h5>
                                <FormInput form={form.firstName} change={handleChange} name="firstName" autocomplete="given-name" />
                            </div>
                            <div className="checkout-name">
                                <h5 className="font-semibold">Last Name</h5>
                                <FormInput form={form.lastName} change={handleChange} name="lastName" autocomplete="family-name" />
                            </div>
                        </div>
                        <div className="checkout-box">
                            <h5>Company (Optional)</h5>
                            <FormInput form={form.company} change={handleChange} name="company" autocomplete="organization" />
                        </div>
                        <div className="checkout-box">
                            <h5>Country / Region</h5>
                            <SelectRegion />
                        </div>
                        <div className="checkout-box">
                            <h5>Street Address</h5>
                            <FormInput form={form.streetAddress} change={handleChange} name="streetAddress" autocomplete="address-line1" />
                        </div>
                        <div className="checkout-box">
                            <h5>Town / City</h5>
                            <City />
                        </div>
                        <div className="checkout-box">
                            <h5>Zip Code</h5>
                            <FormInput form={form.zipCode} change={handleChange} name="zipCode" autocomplete="postal-code" />
                        </div>
                        <div className="checkout-box">
                            <h5>Phone</h5>
                            <FormInput form={form.phone} change={handleChange} name="phone" autocomplete="tel" />
                        </div>
                        <div className="checkout-box">
                            <h5>Email</h5>
                            <FormInput form={form.email} change={handleChange} name="email" autocomplete="email" />
                        </div>
                        <div className="checkout-box">
                            <FormInput form={form.additionalInfo} change={handleChange} name="additionalInfo" placeholder="Additional information" />
                        </div>
                    </div>
                    <div className="checkout-boxs">
                        <div className="order">
                            <div className="order-price">
                                <h4>Product</h4>
                                <div className="order-list">
                                    {orders.map((item: any, index: number) => (
                                        <div key={index} className="order-quantity">
                                            <span className="grey">{item.name} &nbsp;</span><strong>x {item.quantity}</strong>
                                        </div>
                                    ))}
                                </div>
                                <span>Order subTotal</span>
                                <span>Shipping Fee</span>
                                <span>Order Total</span>
                            </div>
                            <div className="order-price mt-3">
                                <h4>subTotal</h4>
                                {orders.map((item: { price: number, quantity: number }, index: number) => (
                                    <span key={index}>{item.price * item.quantity}<sub>đ</sub></span>
                                ))}
                                <span>{subTotal}<sub>đ</sub></span>
                                <span>{shipping}<sub>đ</sub></span>
                                <h3>{total}<sub>đ</sub></h3>
                            </div>
                        </div>
                        <div className="order-more">
                            <div className="order-ship">
                                <div className="order-bank">
                                    <div className="order-bank-title">
                                        <div className={`order__circle ${show === 1 ? 'black' : ''}`} onClick={() => setShow(1)} />
                                        <h4 className={`order__title ${show === 1 ? '' : 'grey'}`}>Direct Bank Transfer</h4>
                                    </div>
                                    <p className={`grey order__content ${show === 1 ? 'active' : ''}`}>
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </p>
                                </div>
                                <div className="order-bank">
                                    <div className="order-bank-title">
                                        <div className={`order__circle ${show === 2 ? 'black' : ''}`} onClick={() => setShow(2)} />
                                        <h4 className={`order__title ${show === 2 ? '' : 'grey'}`}>Pay anytime</h4>
                                    </div>
                                    <p className={`grey order__content ${show === 2 ? 'active' : ''}`}>
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </p>
                                </div>
                                <div className="order-bank">
                                    <div className="order-bank-title">
                                        <div className={`order__circle ${show === 3 ? 'black' : ''}`} onClick={() => setShow(3)} />
                                        <h4 className={`order__title ${show === 3 ? '' : 'grey'}`}>Cash On Delivery</h4>
                                    </div>
                                    <p className={`grey order__content ${show === 3 ? 'active' : ''}`}>
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </p>
                                </div>
                                <p className="mt-2">
                                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy.</strong>
                                </p>
                                <div className="order-btn mt-4">
                                    <button type="submit">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <PaymentSuccessful showPayment={showPayment} setShowPayment={setShowPayment}></PaymentSuccessful>
        </>
    );
};

export default Checkout;
