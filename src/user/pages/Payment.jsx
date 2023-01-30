import React, { useContext } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { apiEndPoint } from '../../enviroment'

export default function Payment() {

    const location = useLocation()
    const amount = location.pathname.split('/')[2]

    const GST = amount * (18 / 100);

    const totalAmount = parseInt(amount) + parseInt(GST);

    const dollar = Math.ceil((totalAmount / 81.71) * 100)

    const { user } = useContext(AuthContext)

    const [product, setproduct] = React.useState({
        name: "Astrologer",
        price: dollar,
        userId: user.id
    })

    const onToken = (e) => {
        e.preventDefault();
        const config = {
            method: "post",
            url: `${apiEndPoint}create-checkout-session`,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                product: product
            },
        }

        axios(config)
            .then((response) => {
                return response.data.url
            }).then((url) => {
                window.open(url, '_blank');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <section className="recharge_section">
                <div className="container">
                    <ul id="breadcrumbs-two">
                        <li>
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
                        </li>

                        <li>
                            <Link to="/add-money-wallet">Add Money To Wallet</Link>
                        </li>
                        <li>
                            <a className="current active text-capitalize"> Payment Details</a>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="order_detail">
                                <h1 className="payment_heading">Payment Details </h1>
                                <table className="table table-bordered bg-payment-page">
                                    <tbody>
                                        <tr>
                                            <td scope="col" className="text-left">Total Amount</td>
                                            <td scope="col">₹ {amount}</td>
                                        </tr>
                                        <tr>
                                            <td scope="col" className="text-left">GST@18%</td>
                                            <td scope="col">₹ {GST}</td>
                                        </tr>
                                        <tr>
                                            <th scope="col" className="text-left">Total Payable Amount</th>
                                            <th scope="col">₹ {totalAmount}</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <h1 className="payment_heading my-4">Payment Options </h1>
                                </div>
                                <div className="col-md-3 p-3 bg-payment-page">
                                    <form onSubmit={onToken} method="POST">
                                        <button type="submit">Pay With Card</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
