import React, { useEffect, useState } from 'react';
import { pizzaAPI, ingredientAPI, cartAPI } from '../services/apiService';

const BuildUrPizza = () => {
  const [ingredients, setIngredients] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizzaId, setSelectedPizzaId] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [building, setBuilding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [ingredientsData, pizzasData] = await Promise.all([
          ingredientAPI.getAll(),
          pizzaAPI.getAll(),
        ]);
        setIngredients(ingredientsData);
        setPizzas(pizzasData);
      } catch (err) {
        setError('Failed to load data. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const pizza = pizzas.find((p) => p._id === selectedPizzaId || p.id === selectedPizzaId);
    if (!pizza) {
      setCheckedItems({});
      setTotalCost(0);
      return;
    }

    const mapping = {};
    ingredients.forEach((ing) => {
      mapping[ing.tname] = pizza.topping?.includes(ing.tname) || false;
    });
    setCheckedItems(mapping);
    setTotalCost(pizza.price || 0);
  }, [selectedPizzaId, pizzas, ingredients]);

  useEffect(() => {
    const pizza = pizzas.find((p) => p._id === selectedPizzaId || p.id === selectedPizzaId);
    if (!pizza) return;

    let total = pizza.price || 0;

    ingredients.forEach((ing) => {
      const inBase = pizza.topping?.includes(ing.tname) || false;
      const checked = !!checkedItems[ing.tname];

      if (checked && !inBase) total += ing.price;
      if (!checked && inBase) total -= ing.price;
    });

    setTotalCost(total);
  }, [checkedItems, selectedPizzaId, pizzas, ingredients]);

  const handleCheckbox = (ing, event) => {
    const isChecked = event.target.checked;
    setCheckedItems((prev) => ({ ...prev, [ing.tname]: isChecked }));
  };

  const handleBuild = async () => {
    if (!selectedPizzaId) {
      alert('Please select a base pizza to customize');
      return;
    }

    try {
      setBuilding(true);
      const pizza = pizzas.find((p) => p._id === selectedPizzaId || p.id === selectedPizzaId);
      const selectedToppings = Object.keys(checkedItems).filter((key) => checkedItems[key]);

      const item = {
        name: `${pizza.name} (Custom)`,
        type: pizza.type,
        price: totalCost,
        quantity: 1,
        image: pizza.image,
        toppings: selectedToppings,
      };

      await cartAPI.add(item);
      alert('Custom Pizza added to cart!');
    } catch (err) {
      alert('Failed to add pizza to cart. Please try again.');
      console.error('Error adding to cart:', err);
    } finally {
      setBuilding(false);
    }
  };

  const selectedPizza = pizzas.find((p) => p._id === selectedPizzaId || p.id === selectedPizzaId);

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
      <p className="text-center mb-4">
        Choose an existing pizza to customize, then add or remove toppings.
      </p>

      <div className="row mb-4">
        <div className="col-md-6">
          <label className="form-label">Select Base Pizza</label>
          <select
            className="form-select"
            value={selectedPizzaId || ''}
            onChange={(e) => setSelectedPizzaId(e.target.value)}
          >
            <option value="">-- Select a pizza --</option>
            {pizzas.map((p) => {
              const pizzaId = p._id || p.id;
              return (
                <option key={pizzaId} value={pizzaId}>
                  {p.name} - ₹{p.price}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-md-6">
          {selectedPizza && (
            <div className="d-flex align-items-center">
              <img
                src={selectedPizza.image}
                alt={selectedPizza.name}
                className="selected-pizza-image"
              />
              <div>
                <div className="fw-bold">{selectedPizza.name}</div>
                <div className="text-muted">Base Price: ₹{selectedPizza.price}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <tbody>
            {ingredients.map((ing) => (
              <tr key={ing.id}>
                <td className="ingredient-image-cell text-center">
                  <img
                    src={ing.image.replace('%22', '')}
                    width="50"
                    height="50"
                    alt={ing.tname}
                    className="ingredient-image"
                  />
                </td>
                <td>
                  <div className="d-flex justify-content-between px-4">
                    <span className="fw-bold">{ing.tname}</span>
                    <span className="text-danger">₹{ing.price}.00</span>
                  </div>
                </td>
                <td className="checkbox-cell text-center">
                  <div className="form-check d-flex align-items-center justify-content-center">
                    <input
                      type="checkbox"
                      className="form-check-input border-warning"
                      onChange={(e) => handleCheckbox(ing, e)}
                      id={`check-${ing.id}`}
                      checked={!!checkedItems[ing.tname]}
                      disabled={!selectedPizzaId}
                    />
                    <label
                      className="form-check-label ms-2 text-warning fw-bold"
                      htmlFor={`check-${ing.id}`}
                    >
                      Add
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 border border-dark text-primary fw-bold total-cost">
        Total Cost: ₹{totalCost}.00
      </div>

      <div className="text-center mt-4">
        <button
          className="btn btn-dark text-warning border-warning p-3"
          onClick={handleBuild}
          disabled={building || !selectedPizzaId}
        >
          {building ? 'Adding to Cart...' : 'Build Your Pizza'}
        </button>
      </div>
    </div>
  );
};

export default BuildUrPizza;
