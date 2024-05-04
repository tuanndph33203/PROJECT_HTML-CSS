import { formatCurrency } from "@/components/PriceFomater";
import UserContext from "@/context/UserContext";
import useCartMutation from "@/hooks/useCart";
import useCartQuery from "@/hooks/useQueryCart";
import "@/style/cart.scss"
import { useContext } from "react";
const Cart = () => {
    const userContext = useContext(UserContext);
    const { mutate: mutateDelete } = useCartMutation({ action: "DELETE" })
    const { mutate: mutateQuantity } = useCartMutation({ action: "QUANTITY" })
    const { data } = useCartQuery();
    if (!userContext || !userContext.value) {
        return <p>Đăng nhập để sử dụng chức năng...</p>;
    }
    const { value } = userContext;
    const deleteItemCart = (id: string) => {
        mutateDelete({
            userId: value._id,
            productId: id
        })
    }
    const productQuantity = (action: string, id: string) => {
        mutateQuantity({
            action,
            userId: value._id,
            productId: id
        })
    }
    let totalSave = 0;
    let totalCart = 0;
    return (
        <section className="cart">
            <div className="cart-container">
                <div className="cart-list">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th colSpan={2} className="cart__item">Product</th>
                                <th className="cart__item">Price</th>
                                <th className="cart__item w-[130px]">Quantity</th>
                                <th className="cart__item">Subtutal</th>
                                <th className="cart__item" />
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                data.products.map((item: any, index: number) => {
                                    const save = (item.product.price * item.product.discount) / 100;
                                    const price = item.product.price - save;
                                    totalSave += save * item.quantity;
                                    totalCart += price * item.quantity;
                                    return (
                                        <tr key={index} className="text-center">
                                            <td className="cart__item">
                                                <img src={`/assets/image/product/${item.product.image}`} className="w-[50px] h-[50px]` alt={item.product.name}" />
                                            </td>
                                            <td className="cart__item text-left">{item.product.name}</td>
                                            <td className="cart__item" id="price">{formatCurrency(price)}</td>
                                            <td className="flex text-center leading-[70px]">
                                                <div className="increase cursor-pointer" onClick={() => productQuantity("increase", item.product._id)}>+</div>
                                                <input
                                                    className="text-center border-none bg-transparent text-gray-800 focus:outline-none w-[120px]"
                                                    defaultValue={item.quantity}
                                                    type="text"
                                                />
                                                <div className="decrease cursor-pointer" onClick={() => productQuantity("decrease", item.product._id)}>-</div>
                                            </td>
                                            <td className="cart__item">
                                                <span id="sub">{formatCurrency(price * item.quantity)}</span>
                                            </td>
                                            <td className="cart__item">
                                                <button onClick={() => deleteItemCart(item.product._id)} className="cart-bin">
                                                    <img src="../assets/image/icons/bin.svg" alt="Xóa" />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="cart-total">
                    <div className="cart-body">
                        <h1 className="cart__title">Cart Totals</h1>
                        <div className="cart-group">
                            <h4>Saved</h4>
                            <span id="sub-price">{formatCurrency(totalSave)}</span>
                        </div>
                    </div>
                    <div className="cart-group">
                        <h4>Total</h4>
                        <span id="total-price">{formatCurrency(totalCart)}</span>
                    </div>
                    <a href="checkout.html" className="cart__checkout">Check Out</a>
                </div>
            </div>
        </section>
    )
}

export default Cart