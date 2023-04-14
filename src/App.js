import './App.css';
import AuthProvider from './context/AuthContext';
import LoginPopup from './user/auth/LoginPopup';
import Routes from './user/Routes';
import OTPModel from './user/auth/OTPModel';
import AstroProvider from './context/AstroContext';
import './user/assest/css/app.scss';
import { useLocation } from 'react-router-dom';
import AdminAuthProvider from './astrologer/context/AuthContext'
import AdminRoutes from './astrologer/Routes'
import ZodiacProvider from './context/ZodiacContext';
import HoroscopeProvider from './context/HoroscopeTypeContext';
import WalletProvider from './context/WalletContext';


function App() {
  const location = useLocation();
  const route = location.pathname.split('/')[1];
  if (route === 'astro') {
    return (
      <>
        <AdminAuthProvider>
          <AdminRoutes />
        </AdminAuthProvider>
      </>
    )
  } else {
    return (
      <>
        <AuthProvider>
          <LoginPopup />
          <OTPModel />
          <AstroProvider>
            <ZodiacProvider>
              <HoroscopeProvider>
                <Routes />
              </HoroscopeProvider>
            </ZodiacProvider>
            <WalletProvider>
              <Routes />
            </WalletProvider>
          </AstroProvider>
        </AuthProvider>
      </>
    );
  }
}

export default App;
