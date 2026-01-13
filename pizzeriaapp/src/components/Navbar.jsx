import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3" style={{ backgroundColor: '#000' }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="text-secondary fs-2 fw-normal">Pizzeria</span>

          <div
            className="vr mx-3"
            style={{
              height: '32px',
              backgroundColor: 'gray',
              opacity: 0.7,
              alignSelf: 'center',
            }}
          />

          <img src={logo} alt="Pizzeria logo" style={{ height: '65px', width: 'auto' }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link px-3 fs-5" to="/order">
                Order Pizza
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 fs-5" to="/build">
                Build Your Pizza
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link className="btn btn-warning px-4 py-2" style={{ color: '#fff' }} to="/cart">
              🛒 Shopping Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
