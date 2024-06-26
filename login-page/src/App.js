import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import ForgotPassword from './component/login/ForgotPassword';
import PrivacyTerms from './component/register/PrivacyTerms';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/privacy' element={<PrivacyTerms />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
