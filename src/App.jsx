

import { createBrowserRouter, RouterProvider } from "react-router";
import { useEffect, useState } from "react";
import { books } from "../db.json";
import "./App.css";
import axios from "axios";
import Root from "./pages/Root";
import About from "./pages/About/About";
import BookList from "./pages/Books/BookList";
import AddBookForm from "./pages/AddBookForm/AddBookForm";
import { v4 as uuidv4 } from "uuid";
import Example from "./pages/Example";

import AxiosExample from './pages/AxiosExample';
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router";
import BookDetail from "./pages/Books/BookDetails";
import Todos from "./pages/Todos/Todos";





const App = () => {
  const [booksData, setBooksData] = useState(books);

   useEffect(() => {
    axios
      .get("http://localhost:3010/books")
      .then((res) => setBooksData(res.data))
      .catch((err) => console.error("Failed to fetch books", err));
  }, []);

  const addBookHandler = (newBook) => {
    setBooksData((prev) => [...prev, newBook]);
  };

  const handlePriceChange = (id, newPrice) => {
    axios
      .patch(`http://localhost:3010/books/${id}`, { price: newPrice })
      .then((res) => {
        setBooksData((prev) =>
          prev.map((book) => (book.id === id ? res.data : book))
        );
      })
      .catch((err) => {
        console.error("Failed to update price:", err);
      });
  };

  const handleToggleField = (id, fieldName) => {
    const book = booksData.find((b) => b.id === id);
    if (!book) return;

    const updatedField = { [fieldName]: !book[fieldName] };

    axios
      .patch(`http://localhost:3010/books/${id}`, updatedField)
      .then((res) => {
        setBooksData((prev) =>
          prev.map((book) => (book.id === id ? res.data : book))
        );
      })
      .catch((err) => console.error(`Failed to update ${fieldName}:`, err));
  };

  return (
    // Had to replace createBrowserRouter with BrowserRouter, since createBrowserRouter renders routes only once and doesn’t respond to state changes. In the React Advanced course, you’ll learn how to use state management, which will also help with re-rendering when using createBrowserRouter.

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<About />} />
          <Route
            path="/books"
            element={
              <BookList
                booksData={booksData}
                onToggleChange={handleToggleField}
                onPriceChange={handlePriceChange}
              />
            }
          />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route
            path="/add"
            element={<AddBookForm onAddBook={addBookHandler} />}
          />
          <Route path="/todos" element={<Todos />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;