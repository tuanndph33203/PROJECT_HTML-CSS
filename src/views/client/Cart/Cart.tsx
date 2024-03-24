import "@/style/cart.scss"
const Cart = () => {
    return (
        <section className="cart">
            <div className="cart-container">
                <div className="cart-list">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th colSpan={2} className="cart__item">Product</th>
                                <th className="cart__item">Price</th>
                                <th className="cart__item">Quantity</th>
                                <th className="cart__item">Subtutal</th>
                                <th className="cart__item" />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="cart__item"><img src="../assets/image/product/Asgaard_sofa.svg" /></td>
                                <td className="cart__item">Asgaard sofa</td>
                                <td className="cart__item" id="price">25000000</td>
                                <td className="cart__item"><input id="quantity" type="number" defaultValue={1} /></td>
                                <td className="cart__item"><span id="sub">25000000</span></td>
                                <td className="cart__item"><button className="cart-bin"><img src="../assets/image/icons/bin.svg" /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cart-total">
                    <div className="cart-body">
                        <h1 className="cart__title">Cart Totals</h1>
                        <div className="cart-group">
                            <h4>Subtotal</h4>
                            <span id="sub-price">2500000</span>
                        </div>
                    </div>
                    <div className="cart-group">
                        <h4>Total</h4>
                        <span id="total-price">2500000</span>
                    </div>
                    <a href="checkout.html" className="cart__checkout">Check Out</a>
                </div>
            </div>
        </section>
    )
}

export default Cart