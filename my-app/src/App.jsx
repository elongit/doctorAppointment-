import Header from "./components/header";
import AuthHeader from './components/authHeader'
import Home from "./pages/home";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signUp";
import ForgetPassword from "./pages/auth/forgetPass";
import EmailCode from "./pages/auth/emailCode";
import ResetPassword from "./pages/auth/resetPass";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer";
import DoctorList from "./pages/doctorsList";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./pages/404";
function App() {
  
  return (
    <>
      <BrowserRouter>
        <AppContent/>
      </BrowserRouter>
    </>
  );
}

const AppContent = () => {
  const {pathname} = useLocation();

  
  
  
  return (
    <>
     {pathname === '/login' || pathname === '/signUp'  ? <AuthHeader/> :  <Header/> }
     
      <main className="lg:pt-0 pb-20 ">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/doctorsList" element={<DoctorList />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/forgetPass" element={<ForgetPassword />}></Route>
          <Route path="/emailCode" element={<EmailCode />}></Route>
          <Route path="resetPass" element={<ResetPassword />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
