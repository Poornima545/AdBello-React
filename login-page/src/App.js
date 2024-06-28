import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Login from './components/login/Login';
import PrivacyPolicy from './components/privacy-terms/PrivacyPolicy';
import ForgotPassword from './components/forgot-password/ForgotPassword';
import TermsAndConditions from './components/privacy-terms/TermsAndConditions';
import Register from './components/register/Register'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='privacy' element={<PrivacyPolicy />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/terms-conditions' element={<TermsAndConditions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
