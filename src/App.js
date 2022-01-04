import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Footer/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
