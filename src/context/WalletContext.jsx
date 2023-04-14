import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { apiEndPoint } from '../enviroment'
import { AuthContext } from './AuthContext';

const WalletContext = createContext()

export { WalletContext }


const WalletProvider = ({ children }) => {

    const { user } = useContext(AuthContext);

    const [wallet, setwallet] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const getWallet = async () => {
            setloading(true)
            try {
                const res = await axios.get(`${apiEndPoint}wallet/all/${user?.id}`);
                setwallet(res.data);
                setloading(false)
            } catch (err) {
                setloading(false)
            }
        };
        getWallet();
    }, [user?.id]);

    const contextData = {
        wallet: wallet,
        loading: loading
    }

    return (
        <WalletContext.Provider value={contextData}>{children}</WalletContext.Provider>
    )
}

export default WalletProvider;
