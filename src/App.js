import React from "react";
import SpecificDish from "./food";

function App() {
  return (
    <div>
      <SpecificDish />
    </div>
  );
}

export default App;

// return (
//   <section className="foodList">
//     
//     {data.map((food) => {
//       return <SpecificDish key={food.id} {...food}></SpecificDish>;
//     })}
//   </section>
// );
