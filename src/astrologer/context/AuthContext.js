import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { apiEndPoint } from "../../enviroment";

const AuthContext = createContext()

export { AuthContext }


const AuthProvider = ({ children }) => {
    const [tokens, setTokens] = useState(() =>
        localStorage.getItem("astrologer")
            ? JSON.parse(localStorage.getItem("astrologer"))
            : null
    );
    const [user, setUser] = useState(() =>
        localStorage.getItem("astrologer")
            ? jwtDecode(localStorage.getItem("astrologer"))
            : null
    );
    const [error, setErrors] = useState("");
    const [loadingbutton, setLoadingButton] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    // const notify = (msg) => {
    //     toast(msg);
    // };

    const moneyDedection = () =>{
        
    }


    const loginUser = (e) => {
        e.preventDefault();
        setLoadingButton(true);
        const config = {
            method: "post",
            url: `${apiEndPoint}auth/astro/signin`,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                email: e.target.email.value,
                password: e.target.password.value
            },
        }

        axios(config)
            .then((response) => {
                setTokens(response.data);
                setUser(jwtDecode(response.data.access));
                localStorage.setItem("astrologer", JSON.stringify(response.data));
                // notify(response.data.message);
                setLoadingButton(false);
                navigate("/astro/dashboard");
            })
            .catch((error) => {
                setErrors(error.response.data.message);
                setLoadingButton(false);
            });
    };

    const logoutUser = () => {
        setTokens(null);
        setUser(null);
        localStorage.removeItem("astrologer");
        navigate("/astro/login");
    };

    const updateToken = () => {
        const config = {
            method: "post",
            url: `${apiEndPoint}auth/astro/refreshtoken`,
            headers: {
                "Content-Type": "application/json",
            },
            data: { refreshToken: tokens?.refresh },
        };

        axios(config)
            .then((response) => {
                setTokens(response.data);
                setUser(jwtDecode(response.data.access));
                localStorage.setItem("astrologer", JSON.stringify(response.data));
            })
            .catch((error) => {
                logoutUser();
            });

        if (loading) {
            setLoading(false);
        }
    };


    const contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        error: error,
        loadingbutton: loadingbutton,
        tokens: tokens
    };

    const twentynine = 24 * 60 * 60 * 58;

    useEffect(() => {
        if (loading) {
            updateToken();
        }

        const interval = setInterval(() => {
            if (tokens) {
                updateToken();
            }
        }, twentynine);
        return () => clearInterval(interval);
    }, [tokens, loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;