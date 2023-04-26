import './styles/index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Layout from './components/Layout';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import UserAccount from './pages/UserAccount';
import Community from './pages/Community';

function App() {
  return (
    <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/user-account" element={<UserAccount />} />
        </Routes>
    </Layout>
  );
}

export default App;
