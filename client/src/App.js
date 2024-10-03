import './App.css';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Aboutus from './components/Aboutus';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';
import Update from './components/Update';
import Forgotpassword from './components/Forgotpassword';
import Passwordchange from './components/Passwordchange';
import Dashboard from './components/Admin/Dashbord';
import Adminlogin from './components/Admin/Adminlogin';
import { useEffect, useState } from 'react';
import Doctorlogin from './components/Doctor/Doctorlogin';
import Adddoctor from './components/Admin/Adddoctor';
import DoctorsList from './components/Admin/DoctorsList';
import Userslist from './components/Admin/Userslist';
import Usermessage from './components/Admin/Usermessage';
import Adminprofile from './components/Admin/Adminprofile';
import Appointments from './components/Admin/Appointments';
import Doctorupdate from './components/Admin/Doctorupdate';
import Doctorhome from './components/Doctor/Doctorhome';
import Myprofile from './components/Doctor/Myprofile';
import Booking from './components/Doctor/Booking';
import Myappoitments from './components/Doctor/Myappoitments';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [pass, setPass] = useState(null);
  const [doctorToken, setDoctorToken] = useState(null); 
  const LoginInfo = useSelector((state) => state.login.LoginInformation?.[0]);
  const AdminLoginInfo = useSelector((state) => state.adminlogin.AdminLoginInformation?.[0]);
  const DoctorLoginInfo = useSelector((state) => state.doctorlogin.DoctorInformation?.[0]);

  useEffect(() => {
    if (LoginInfo) {
      setToken(LoginInfo.token);
    }
    if (AdminLoginInfo) {
      setPass(AdminLoginInfo.pass);
    }
    if (DoctorLoginInfo) {
      setDoctorToken(DoctorLoginInfo.doctorToken);
    }
    setIsLoading(false);
  }, [LoginInfo, AdminLoginInfo, DoctorLoginInfo]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'signup',
      element: <Signup />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'about',
      element: <Aboutus />
    },
    {
      path: 'appointment',
      element: token ? <Appointment /> : <Login />
    },
    {
      path: 'contact',
      element: token ? <Contact /> : <Login />
    },
    {
      path: 'profile',
      element: token ? <Profile /> : <Login />
    },
    {
      path: 'update/:id',
      element: token ? <Update /> : <Login />
    },
    {
      path: 'forgot',
      element: <Forgotpassword />
    },
    {
      path: 'passwordchange/:token',
      element: <Passwordchange />
    },
    {
      path: 'dashboard',
      element: pass ? <Dashboard /> : <Adminlogin />
    },
    {
      path: 'adminlogin',
      element: <Adminlogin />
    },
    {
      path: 'doctorlogin',
      element: <Doctorlogin />
    },
    {
      path: 'adddoctor',
      element: pass ? <Adddoctor /> : <Adminlogin />
    },
    {
      path: 'adminprofile',
      element: pass ? <Adminprofile /> : <Adminlogin />
    },
    {
      path: 'doctorlist',
      element: pass ? <DoctorsList /> : <Adminlogin />
    },
    {
      path: 'userslist',
      element: pass ? <Userslist /> : <Adminlogin />
    },
    {
      path: 'appointments',
      element: pass ? <Appointments /> : <Adminlogin />
    },
    {
      path: 'messages',
      element: pass ? <Usermessage /> : <Adminlogin />
    },
    {
      path: 'doctorupdate/:doctorId',
      element: pass ? <Doctorupdate /> : <Adminlogin />
    },
    {
      path: 'doctorhome',
      element: pass ? <Doctorhome /> : <Doctorlogin />
    },
    {
      path: 'doctorprofile/:doctorId',
      element: pass ? <Myprofile /> : <Doctorlogin />
    },
    {
      path: 'booking',
      element: pass ? <Booking/> : <Doctorlogin />
    },
    {
      path: 'myappointments',
      element: pass ? <Myappoitments/> : <Doctorlogin />
    }
    
  ]);

  return <RouterProvider router={router} />;
}
export default App;
