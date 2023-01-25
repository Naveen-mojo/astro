import './App.css';
import AuthProvider from './context/AuthContext';
import LoginPopup from './auth/LoginPopup';
import Routes from './Routes';
import OTPModel from './auth/OTPModel';
import ProfileModal from './componet/ProfileModal';

function App() {
  return (
    <>
      <AuthProvider>
        <LoginPopup />
        <ProfileModal />
        <OTPModel />
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
