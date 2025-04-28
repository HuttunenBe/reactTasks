import "./Books.css";
import { useState } from "react";

const BookCard = ({
  title,
  author,
  price,
  genre,
  isFavorite,
  inStock,
  onEventHandler,
  id,
  onToggleFavorite,
  onToggleStock,
  onPriceChange,

  ...rest
}) => { 

const [isEditing, setIsEditing] = useState() // step 1 
const [newPrice, setNewPrice] = useState(price) 

  const eventHandler = () => {
    console.log("You clicked 'Add wishlist' button is clicked");
  };
  
const handleSave = () =>{
  onPriceChange(id, newPrice)
setIsEditing(!isEditing)
}

  return (
    <div className="ticket">
      <div className="ticketRing">
        <h2>{title}</h2>
     
          <p onClick={onToggleFavorite}>{isFavorite ? "♡" : "🖤"}</p>
          <p>{author}</p>

      
      

<div className= 'editSave'>
{isEditing ? (
    <div>
      <input type='text' value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
    </div> 
  ) : (
    <div>
      <p className='price'>{price}€</p>
    </div>
  )}
</div>

        <div className="buttons">
          <button
            onClick={onToggleStock}
            className={
              inStock ? "stockButton inStock" : "stockButton outOfStock"
            }
          >
            {inStock ? "In stock" : "Out of stock"}
          </button>

          {!inStock && <button onClick={onToggleStock}>Add to Wishlist</button>}

          { isEditing ? (
  <button onClick={handleSave}>Save</button> 
) : (
  <button onClick={() => setIsEditing(!isEditing)}>Edit!</button>
)}


          <button onClick={onEventHandler}>Read more!</button>
         
        </div>
      </div>
    </div>
  );
};

export default BookCard;
