import React, { useEffect, useState, createContext } from "react";
import { apiEndPoint } from "../enviroment";
import axios from "axios";
const HoroscopeCategory = createContext();

export { HoroscopeCategory }
const HoroscopeProvider = ({ children }) => {

    const [category, setCategory] = useState([])
    // const [loading, setloading] = useState(false)

    useEffect(() => {
        const getCategory = async () => {
            //setloading(true)
            try {
                const res = await axios.get(`${apiEndPoint}horoscope/category`);

                setCategory(res.data);
                //    setloading(false)
            } catch (err) {
                console.log(err);
                //  setloading(false)
            }
        };
        getCategory();
    }, []);

    const contextData = {
        tp: category,
        // loading: loading
    }

    return (
        <HoroscopeCategory.Provider value={contextData}>{children}</HoroscopeCategory.Provider>
    )
}

export default HoroscopeProvider;