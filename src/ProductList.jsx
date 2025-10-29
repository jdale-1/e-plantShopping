import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch and useSelector
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice'; // Correct import for addItem action

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  // Redux useSelector to get cart items for displaying count
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        // ... (other products)
      ]
    },
    // ... (other categories)
  ];

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  const styleObj = {
    // your style object
  };
  const styleObjUl = {
    // your style object
  };
  const styleA = {
    // your style object
  };

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
            <a href="/" onClick={(e) => handleHomeClick(e)}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a>
          </div>
          <div>
            <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
              <h1 className='cart'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.636-8.583c.076-.402-.275-.765-.679-.765h-13.684l-.195-.922c-.089-.447-.483-.778-.929-.778h-1.619c-.552 0-1 .448-1 1s.448 1 1 1h.739l2.879 13.565c.148.694.757 1.189 1.488 1.189h10c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h-9.288l-.261-1.229h10.985c.677 0 1.255-.429 1.484-1.069l2.42-7.146c.14-.41-.023-.859-.433-1.077-.41-.219-.884-.044-1.076.368l-2.067 6.113h-10.741l-1.061-5h10.428l.583-3h-11.233z" />
                </svg>
                {/* Conditionally render the cart count */}
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                )}
              </h1>
            </a>
          </div>
        </div>
      </div>
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>
                <div>{category.category}</div>
              </h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button className="product-button" onClick={() => handleAddToCart(plant)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
