import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WalletContext } from '../../context/WalletContext'
import { apiEndPoint } from "../../enviroment";

export default function AddWallet() {
    const { wallet } = useContext(WalletContext);


    const [state, setstate] = useState([])

    const getWalletDeatils = () => {
        const config = {
            url: `${apiEndPoint}walletmoney`,
            method: 'GET'
        }
        axios(config).then((res) => {
            setstate(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getWalletDeatils()
    }, [])

    return (
        <>
            <section className="money_wallet_section">
                <div className="bread">
                    <div className="container">
                        <ul id="breadcrumbs-two">
                            <li>
                                <a href="/">
                                    <i className="fa fa-home" />
                                </a>
                            </li>

                            <li>
                                <a className="current active text-capitalize">
                                    Add Money To Wallet
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <form
                        noValidate
                        action="#"
                        className="ng-untouched ng-pristine ng-valid"
                    >
                        <div className="row">
                            <div className="col-12">
                                <h1 className="heading_money_wallet">Add Money to Wallet</h1>
                            </div>
                        </div>
                        <div className="available_balance mb-3">Available balance:

                            {
                                wallet ? <main className="balance_avail"> ₹ {wallet?.total} </main> : <main className="balance_avail"> ₹ 0 </main>
                            }
                        </div>
                    </form>
                    <div className="row padding_right_left">
                        {
                            state.map((curvalue) => {
                                const { amount, discount, _id } = curvalue;
                                return (
                                    <Link key={_id} to={`/payment/${amount}`} className="col-6 col-sm-4 ng-star-inserted">
                                        <span className="rupees_wallet">
                                            <div className="ribbon ng-star-inserted">
                                                <span>{discount}% extra</span>
                                            </div>
                                            <span>INR {amount}</span>
                                        </span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
