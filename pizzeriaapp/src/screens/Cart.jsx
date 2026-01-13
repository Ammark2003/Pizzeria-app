import React, { useEffect, useState } from 'react';
import { cartAPI } from '../services/apiService';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(null);

  const fetchCart = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await cartAPI.getAll();
      setCart(data);
    } catch (err) {
      setError('Failed to load cart. Please try again later.');
      console.error('Error fetching cart:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const deleteItem = async (id) => {
    try {
      setUpdating(id);
      await cartAPI.delete(id);
      await fetchCart();
    } catch (err) {
      alert('Failed to delete item. Please try again.');
      console.error('Error deleting item:', err);
    } finally {
      setUpdating(null);
    }
  };

  const updateQty = async (id, currentQty, amount) => {
    const newQty = currentQty + amount;
    if (newQty < 1) return; // Prevent going below 1

    try {
      setUpdating(id);
      await cartAPI.update(id, { quantity: newQty });
      await fetchCart();
    } catch (err) {
      alert('Failed to update quantity. Please try again.');
      console.error('Error updating quantity:', err);
    } finally {
      setUpdating(null);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return Math.round(calculateTotal() * 0.025);
  };

  const calculateGrandTotal = () => {
    return Math.round(calculateTotal() * 1.05);
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="loading-spinner">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cart.map((item) => {
              {
                console.log(item);
              }
              const itemId = item._id;
              const isUpdating = updating === itemId;
              return (
                <div className="card mb-3 shadow-sm" key={itemId}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">
                          <span className={item.type === 'veg' ? 'veg-icon' : 'nonveg-icon'}></span>
                          {item.name}
                        </h5>
                        {item.toppings && item.toppings.length > 0 && (
                          <small className="text-muted">
                            <strong>Toppings:</strong> {item.toppings.join(', ')}
                          </small>
                        )}
                      </div>

                      <div className="d-flex align-items-center gap-4">
                        <div
                          className="input-group input-group-sm quantity-control"
                          style={{ width: '120px' }}
                        >
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => updateQty(itemId, item.quantity, -1)}
                            disabled={isUpdating}
                          >
                            -
                          </button>
                          <span className="form-control text-center">{item.quantity}</span>
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => updateQty(itemId, item.quantity, 1)}
                            disabled={isUpdating}
                          >
                            +
                          </button>
                        </div>

                        <div className="fw-bold" style={{ minWidth: '70px', textAlign: 'right' }}>
                          ₹{item.price * item.quantity}
                        </div>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteItem(itemId)}
                          disabled={isUpdating}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-header">
                <strong>Order Summary</strong>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>₹{calculateTotal()}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>SGST (2.5%)</span>
                  <span>₹{calculateTax()}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>CGST (2.5%)</span>
                  <span>₹{calculateTax()}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold mb-4">
                  <span>Grand Total</span>
                  <span>₹{calculateGrandTotal()}</span>
                </div>
                <button className="btn btn-warning text-white w-100 fw-bold">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
