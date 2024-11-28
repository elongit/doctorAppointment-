import Header from "./components/header"
import Home from "./pages/home"
import Login from "./pages/login"
import SignUp from "./pages/signUp"
import Contact from "./pages/contact"
import Footer from "./components/footer"
import DoctorList from "./pages/doctorsList"
import { BrowserRouter , Route , Routes } from "react-router-dom"
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
        </Routes>
        <Footer/>
     </BrowserRouter>
     </>
  
  )
}

export default App
