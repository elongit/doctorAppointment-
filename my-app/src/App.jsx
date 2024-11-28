import Header from "./components/header"
import Home from "./pages/home"
import Login from "./pages/auth/login"
import SignUp from "./pages/auth/signUp"
import Contact from "./pages/contact/contact"
import Footer from "./components/footer"
import DoctorList from "./pages/doctorsList"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import NotFound from "./pages/404"
function App() {
  return (
  
     <>
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path="/doctorsList" element={<DoctorList/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        {/* <Footer/> */}
     </BrowserRouter>
     </>
  
  )
}

export default App
