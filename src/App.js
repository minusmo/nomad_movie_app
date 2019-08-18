import React from "react";

function Food({ fav }) {
  return <h3>I love {fav}</h3>;
}

const FoodILike = [
  { name: "kimchi" },
  { name: "cake" },
  { name: "bread" },
  { name: "bun" }
];

function App() {
  return (
    <div>
      {FoodILike.map(dish => (
        <Food fav={dish.name} />
      ))}
    </div>
  );
}

export default App;
