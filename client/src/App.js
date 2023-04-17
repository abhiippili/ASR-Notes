import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import RegisterCollege from "./Pages/RegisterCollege";
import LoginCollege from "./Pages/LoginCollege";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/register-college" element={<RegisterCollege />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login-college" element={<LoginCollege />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
