import './styles/index.css';
// import './styles/Auth.css'; // renamed from j's App.css
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Events from './pages/Events';
import Layout from './components/Layout';
// import SampleLogin from './pages/SampleLogin';
import Signup from './pages/Signup';
// import Auth from './pages/Auth';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
// import MainLayout from './components/layout/MainLayout';
// import Dashboard from './pages/Dashboard';
// npm install @material-ui/core @material-ui/icons @material-ui/lab @material-ui/styles

function App() {
  return (
    <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/events" element={<Events />} /> */}
          {/* <Route path="/sampleLogin" element={<SampleLogin />} /> */}
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/auth" element={<Auth />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          {/* <Route path="/admin-dashboard" element={<MainLayout />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
    </Layout>
  );
}

export default App;
