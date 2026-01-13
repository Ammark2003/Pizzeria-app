import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import OrderPizza from './screens/OrderPizza';
import BuildUrPizza from './screens/BuildUrPizza';
import Cart from './screens/Cart';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderPizza />} />
          <Route path="/build" element={<BuildUrPizza />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <footer className="footer">Copyrights @ 2026 Pizzeria. All rights reserved.</footer>
      <ToastContainer />
    </Router>
  );
}

export default App;
