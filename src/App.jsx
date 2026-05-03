import { useState } from "react";

function App() {
  // 🌙 Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // 🛒 Cart state
  const [cart, setCart] = useState([]);

  // 🔍 Category filter state
  const [category, setCategory] = useState("All");

  // 🧺 Product list
  const items = [
    { id: 1, name: "Milk", category: "Dairy" },
    { id: 2, name: "Cheese", category: "Dairy" },
    { id: 3, name: "Bread", category: "Bakery" },
    { id: 4, name: "Eggs", category: "Dairy" },
    { id: 5, name: "Cake", category: "Bakery" }
  ];

  // 🌙 Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // 🛒 Add to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // 🔍 Filter items
  const filteredItems =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>
      {/* 🌙 Dark mode button (TEST CHECKS TEXT CHANGE) */}
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light" : "Dark"}
      </button>

      {/* 🔍 Category Filter */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>

      {/* 🧺 Shopping List */}
      <h2>Products</h2>
      {filteredItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}

      {/* 🛒 Cart Output (IMPORTANT FOR TESTS) */}
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>{item.name} is in your cart.</p>
      ))}
    </div>
  );
}

export default App;