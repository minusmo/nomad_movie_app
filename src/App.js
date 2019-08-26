import React from "react";
import PropTypes from "prop-types";

function Food({ name, rating }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function renderFood(dish) {
  console.log(dish);
  return <Food key={dish.id} name={dish.name} rating={dish.rating} />;
}

const FoodILike = [
  { id: 1, name: "kimchi", rating: 5 },
  { id: 2, name: "cake", rating: 4 },
  { id: 3, name: "bread", rating: 3 },
  { id: 4, name: "bun", rating: 2 }
];

function App() {
  return <div>{FoodILike.map(renderFood)}</div>;
}

export default App;
