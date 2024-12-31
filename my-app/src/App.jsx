import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// Components
import Header from "./components/inc/header";
import Home from "./pages/home";
import Login from "./pages/auth/Login/loginForm";
import SignUp from "./pages/auth/signUp/signUpForm";
import ForgetPassword from "./pages/auth/forgetPass";
import EmailCode from "./pages/auth/emailCode";
import ResetPassword from "./pages/auth/resetPass";
import Contact from "./pages/contact/contact";
import TestimonialPage from "./pages/testimonialsPage";
import DoctorList from "./pages/doctors/doctorsList";
import DoctorProfile from "./pages/doctors/doctorProfile";
import NotFound from "./pages/404";
import Footer from "./components/inc/footer";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  const { pathname } = useLocation();

  
  const isSpecialPage = pathname === '/TestimonialPage' || pathname.startsWith('/booking/');


  const header = isSpecialPage ? null : <Header />;
  const footer = isSpecialPage ? null : <Footer />;

  return (
    <>
      {header}
      
      <main className="lg:pt-0 pb-20">
        <Routes>
          {/* Define all your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/forgetPass" element={<ForgetPassword />} />
          <Route path="/emailCode" element={<EmailCode />} />
          <Route path="/resetPass" element={<ResetPassword />} />
          <Route path="/TestimonialPage" element={<TestimonialPage />} />
          <Route path="/booking/:id" element={<DoctorProfile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      
      {footer}
    </>
  );
};

export default App;
