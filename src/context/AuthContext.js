import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import {apiEndPoint} from "../enviroment";

const AuthContext = createContext();

export { AuthContext };

const AuthProvider = ({ children }) => {
  const [tokens, setTokens] = useState(() =>
    localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("tokens")
      ? jwtDecode(localStorage.getItem("tokens"))
      : null
  );
  const [error, setErrors] = useState("");
  const [loadingbutton, setLoadingButton] = useState(false);
  const [loading, setLoading] = useState(true);
  const [otp, setotp] = useState('')
  const [number, setNumber] = useState('')

  const navigate = useNavigate();

  function onChangeNumber(value){
    setotp(value)
  }

  function onNumber(value){
    setNumber(value)
  }

//   const notify = (msg) => {
//     toast(msg);
//   };

  const loginUser = (e) => {
    e.preventDefault();
    setLoadingButton(true);
    const config = {
      method: "post",
      url: `${apiEndPoint}auth/signin`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        number: number,
        OTPVerification: otp
      },
    }

    axios(config)
      .then((response) => {
        setTokens(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem("tokens", JSON.stringify(response.data));
        // notify(response.data.message);
        setLoadingButton(false);
        // navigate("/");
        window.location.reload(true)
      })
      .catch((error) => {
        setErrors(error.response.data.message);
        setLoadingButton(false);
      });
  };

  const logoutUser = () => {
    setTokens(null);
    setUser(null);
    localStorage.removeItem("tokens");
    navigate("/");
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
        localStorage.setItem("tokens", JSON.stringify(response.data));
      })
      .catch((error) => {
        // logoutUser();
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
    tokens: tokens,
    onChangeNumber:onChangeNumber,
    onNumber: onNumber,
  };

  const twentynine = 24 * 60 * 58;

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
