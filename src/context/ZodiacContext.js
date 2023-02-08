import React, { useEffect, useState, createContext } from "react";
import axios from 'axios'
import { apiEndPoint } from '../enviroment'
const ZodiacContext = createContext();

export { ZodiacContext }
const ZodiacProvider = ({ children }) => {

    const [zodiac, setZodiac] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const getAstro = async () => {
            setloading(true)
            try {
                const res = await axios.get(`${apiEndPoint}zodiac/all`);

                setZodiac(res.data);
                setloading(false)
            } catch (err) {
                console.log(err);
                setloading(false)
            }
        };
        getAstro();
    }, []);

    const contextData = {
        zodiac: zodiac,
        loading: loading
    }

    return (
        <ZodiacContext.Provider value={contextData}>{children}</ZodiacContext.Provider>
    )
}

export default ZodiacProvider;