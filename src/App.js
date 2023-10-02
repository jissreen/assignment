import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import AllProjects from "./components/AllProjects/AllProjects"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/About' exact element={<About />} />
          <Route path='/AllProjects' exact element={<AllProjects/>} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
