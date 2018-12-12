import React from 'react' 

const ItemCard = ({ id, name, price, remove}) => (
  <section>
    <div>
      <h2> {name} </h2>
      <p> {price} </p>
    </div>

    <div>
      <button> Edit </button>
      <button onClick={() => remove(id)}> Remove </button>
    </div>
  </section>
)

export default ItemCard;