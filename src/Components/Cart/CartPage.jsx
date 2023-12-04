import React from 'react'
import "./CartPage.css"
import user from "../../assets/user.webp"
import Table from '../Comman/Table'
import remove from "../../assets/remove.png"
import QuantityInput from '../SingleProduct/QuantityInput'
const CartPage = () => {
  return (
    <section className="align_center cart-page">
        <div className="align_center user-info">
            <img src={user} alt="user profile" />
            <div>
                <p className="user-name">Harman</p>
                <p className="user-email">harman@gmail.com</p>
            </div>
        </div>
    
        <Table headings = {["Item" , "Price", "Quantity" ,"Total", "Remove"]}>
            <tbody>
                <tr>
                    <td>Iphone 6</td>
                    <td>$999</td>
                    <td className='align_center table-quantity-input'><QuantityInput/></td>
                    <td>$999</td>
                    <td><img src={remove} alt="remove icon" className='cart-remove-icon' /></td>
                </tr>
            </tbody>
        </Table>
        
        <table className="cart-bill">
            <tbody>
                <tr>
                    <td>Subtotal</td>
                    <td>$999</td>
                </tr>
                <tr>
                    <td>Shipping Charge</td>
                    <td>$5</td>
                </tr>
                <tr className='cart-bill-final'>
                    <td>Total</td>
                    <td>$1004</td>
                </tr>
            </tbody>
            <button className="search-button checkout-button">
                Checkout
            </button>
        </table>
    </section>
  )
}

export default CartPage