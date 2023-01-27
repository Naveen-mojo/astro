import './App.css';
import AuthProvider from './context/AuthContext';
import LoginPopup from './auth/LoginPopup';
import Routes from './Routes';
import OTPModel from './auth/OTPModel';
import ProfileModal from './componet/ProfileModal';
import AstroProvider from './context/AstroContext';

function App() {
  return (
    <>
      <AuthProvider>
        <LoginPopup />
        <ProfileModal />
        <OTPModel />
        <AstroProvider>
          <Routes />
        </AstroProvider>
      </AuthProvider>
    </>
  );
}

export default App;
