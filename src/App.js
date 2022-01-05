import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import HeaderNav from "./Pages/Header/HeaderNav";

function App() {
  return (
    <Router>
      <HeaderNav />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
