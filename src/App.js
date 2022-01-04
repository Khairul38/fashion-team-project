import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Footer/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Home/>
      <Routes>
        <Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
