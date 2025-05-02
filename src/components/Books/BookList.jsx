import { useState } from "react";

import BookCard from "./BookCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const BookList = ({ booksData, setBooksData }) => {
  console.log("Books Data in BookList:", booksData);
  const [searchValue, setSearchValue] = useState("");



  const eventHandler = (id) => {
    console.log("read more button was clicked", id);
  };


  const toggleStock = (id) => {
    const updatedArray = booksData.map((book) =>
      book.id === id ? { ...book, inStock: !book.inStock } : book
    );
    console.log("Stock toggled");
    setBooksData(updatedArray);
  };

 
  const toggleFavorite = (id) => {
    setBooksData((prevState) =>
      prevState.map((book) =>
        book.id === Number(id) ? { ...book, isFavorite: !book.isFavorite } : book
      )
    );
    console.log("Favorite toggled");
  };

  const filteredBooks = booksData.filter((book) => {
    const search = searchValue.toLowerCase();
    return (
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search)
    );
  });
  
  console.log(filteredBooks)

 
  const handlePriceChange = (id, newPrice) => {
    const search = searchValue.toLowerCase();
    setBooksData((prevState) =>
      prevState.map((book) =>
        book.id === id ? { ...book, price: Number(newPrice) } : book
      )
    );
  };

 
  const handleChange = (event) => {
    setSearchValue(event.target.value); 
  };

  return (
    <>
      <h1 className="styles">Books List</h1>

      <input
        type="text"
        placeholder="Search by title..."
        onChange={handleChange}
        value={searchValue}
        className="searchInput"
      />

      <div className="flexBox">
        {filteredBooks.length === 0 ? (
          <p>No books found</p>
        ) : (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              onEventHandler={() => eventHandler(book.id)}
              onToggleStock={() => toggleStock(book.id)}
              onToggleFavorite={() => toggleFavorite(book.id)}
              onPriceChange={handlePriceChange}
            />
          ))
        )}
      </div>
    </>
  );
};

export default BookList;
