import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { apiEndPoint } from '../enviroment'


const AstroContext = createContext()

export { AstroContext }

const AstroProvider = ({ children }) => {

    const [astro, setastro] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const getAstro = async () => {
            setloading(true)
            try {
                const res = await axios.get(`${apiEndPoint}astro`);
                setastro(res.data);
                setloading(false)
            } catch (err) {
                console.log(err);
                setloading(false)
            }
        };
        getAstro();
    }, []);

    const contextData = {
        astro: astro,
        loading: loading
    }

    return (
        <AstroContext.Provider value={contextData}>{children}</AstroContext.Provider>
    )
}

export default AstroProvider;