import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// components
import Header from "./components/header";
import TestimonialPage from "./pages/testimonialsPage";
import Home from "./pages/home";
import Login from "./pages/auth/Login/loginForm";
import SignUp from "./pages/auth/signUp/signUpForm";
import ForgetPassword from "./pages/auth/forgetPass";
import EmailCode from "./pages/auth/emailCode";
import ResetPassword from "./pages/auth/resetPass";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer";
import DoctorList from "./pages/doctorsList";
import NotFound from "./pages/404";
import UserHeader from "./pages/userProfile/userheader";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  const { pathname } = useLocation();
  const routes = [
    { path: '/', component: <Home /> },
    { path: '/login', component: <Login /> },
    { path: '/contact', component: <Contact /> },
    { path: '/signUp', component: <SignUp /> },
    { path: '/doctorsList', component: <DoctorList /> },
    { path: '/*', component: <NotFound /> },
    { path: '/forgetPass', component: <ForgetPassword /> },
    { path: '/emailCode', component: <EmailCode /> },
    { path: '/resetPass', component: <ResetPassword /> },
    { path: '/user', component: <UserHeader /> },
    { path: '/TestimonialPage', component: <TestimonialPage /> },
  ];


  let header;
  if (pathname === '/doctorsList' || pathname === '/contact') {
    header = <UserHeader />;
  } else if (pathname === '/TestimonialPage') {
    header = null;
  } else {
    header = <Header />;
  }

  return (
    <>
      {header}
      <main className="lg:pt-0 pb-20">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
