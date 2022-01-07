import React, { useState } from "react";

import { data } from "./data";

const Food = () => {
  const [item, setItem] = useState(data);

  const notInterested = (id) => {
    let newItems = item.filter((dish) => dish.id !== id);
    setItem(newItems);
  };

  const likeThis = () => {
    alert("Amazing choice, try now!");
  };

  return (
    <>
      <h1>WAKE UP!! IT'S FOOD'O CLOCK</h1>
      <h2>
        "There is no sincerer love than the love of food."
        <br />
      </h2>
      {item.map((dish) => {
        const { id, img, title, description } = dish;
        return (
          <article className="food foodList">
            <img src={img} alt={title} />
            <div className="desc">{<h3>{description}</h3>}</div>
            <button type="button" className="likebtn" onClick={likeThis}>
              Like
            </button>
            <button
              type="button"
              className="NIbtn"
              onClick={() => notInterested(id)}
            >
              Not Interested
            </button>
          </article>
        );
      })}
    </>
  );
};
export default Food;
