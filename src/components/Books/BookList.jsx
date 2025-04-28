import { useState } from "react";
import { books } from "./booksData";
import BookCard from "./BooksCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";




const BookList = () => {
  const [booksData, setBooksData] = useState(books);
  const [searchValue, setSearchValue] = useState("");

  const eventHandler = (id) => {
    console.log("read more button was clicked", id);
  };

  const toggleStock = (id) => {
    const updatedArray = booksData.map((book) =>
      book.id === id ? { ...book, inStock: !book.inStock } : book
    );
    console.log("Works");
    setBooksData(updatedArray);
  };

  const toggleFavorite = (id) => {
    setBooksData((prevState) =>
      prevState.map((book) =>
        book.id === id ? { ...book, isFavorite: !book.isFavorite } : book
      )
    );
    console.log("is this working");
  };

  const filteredBooks = booksData.filter((book) => {
    return book.title.toLowerCase().startsWith(searchValue);
  });

  const handlePriceChange = (id, newPrice) => {
    setBooksData((prevState) =>
      prevState.map((book) =>
        book.id === id ? { ...book, price: Number(newPrice) } : book
      )
    );
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value); // Just update the searchValue state
  };

  return (
    <>
      <h1>Books List</h1>

      <input
        type="text"
        placeholder="Search by title..."
        onChange={handleChange}
        value={searchValue}
        className="searchInput"
      />

      <div className="flexBox">
        {booksData.map((book) => (
          <BookCard
            key={book.id}
            {...book}
            onEventHandler={() => eventHandler(book.id)}
            onToggleStock={() => toggleStock(book.id)}
            onToggleFavorite={() => toggleFavorite(book.id)}
            onPriceChange={handlePriceChange}
          />
        ))}
      </div>
    </>
  );
};

export default BookList;

// <Bookcard key={book.id}  (...book)/>
