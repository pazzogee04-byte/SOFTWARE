import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./include/Home.jsx"
import About from "./include/about.jsx"
import Contact from "./include/contact.jsx"
import NavBar from "./include/NavBar.jsx"
import "./App.css";
const App=()=>{
  return(
    <div className="App">
rukundo

<Router>

  <NavBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>

    </div>
  )
}
export default App