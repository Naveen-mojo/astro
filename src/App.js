import './App.css';
import AuthProvider from './context/AuthContext';
import LoginPopup from './user/auth/LoginPopup';
import Routes from './user/Routes';
import OTPModel from './user/auth/OTPModel';
import ProfileModal from './user/componet/ProfileModal';
import AstroProvider from './context/AstroContext';
import './user/assest/css/app.scss';

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
