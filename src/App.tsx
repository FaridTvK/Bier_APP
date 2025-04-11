import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Detailpage from "./pages/Detailpage";
import RandomProduct from "./pages/RandomProduct";
import Navigation from "./components/Header/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="bg-off-white min-h-screen text-dark-text">
        <div className="max-w-7xl mx-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Detailpage />} />
            <Route path="/random" element={<RandomProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
