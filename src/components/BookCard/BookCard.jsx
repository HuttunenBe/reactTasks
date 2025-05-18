import "./book.css";
import { useState } from "react";
import { Link } from "react-router";

const BookCard = ({
  title,
  author,
  price,
  genre,
  isFavorite,
  inStock,

  id,
  onToggleFavorite,
  onToggleStock,
  onPriceChange,

  ...rest
}) => {
  const [isEditing, setIsEditing] = useState(false); 
  const [newPrice, setNewPrice] = useState(price); 


  const handleSave = () => {
    onPriceChange(id, parseFloat(newPrice));
    setIsEditing(false);
  };
  
  const handleCancel = () => {
    setNewPrice(price); 
    setIsEditing(!isEditing); 
  };


  const isSaveDisabled = newPrice === "" || parseFloat(newPrice) === parseFloat(price);

  return (
    <div className="styles">
      <div className="ticket">
        <div className="ticketRing">
          <h2>{title}</h2>
          <p onClick={onToggleFavorite}>{isFavorite ? "♡" : "🖤"}</p>
          <p>{author}</p>
          <p className="genre">{genre}</p>

          <div className="editSave">
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)} 
                />
              </div>
            ) : (
              <div>
                <p className="price">{price}€</p> 
              </div>
            )}
          </div>

          <div className="buttons">
            <button
              onClick={onToggleStock}
              className={inStock ? "stockButton inStock" : "stockButton outOfStock"}
            >
              {inStock ? "In stock" : "Out of stock"}
            </button>

         {!inStock && <button className="secondary">Add to Wishlist</button>}

           {isEditing ? (
          <>
            <button onClick={handleSave} disabled={isSaveDisabled}>
              Save
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button className="secondary" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}

            <Link className="secondary" to={`/books/${id}`}>
  Read more!
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
