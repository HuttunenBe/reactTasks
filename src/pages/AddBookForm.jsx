import Header from "../components/Footer/Footer";
import Footer from "../components/Header/Header";
import { useState } from "react";

function AddBookForm(onAddBook) {
  const [title, setTitle] = useState(""); // step 1
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(""); // step 1
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title, 
      author,
      price: parseFloat(price),
      genre,
    };

    onAddBook(newBook);
    setTitle("");
    setAuthor("");
    setPrice("");
    setGenre("");
  };

  return (
    <div>
      <Header />
      <main>
        <h1>I'm book form!</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <input
              name="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
            />
            <input
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
            <input
              name="genre"
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Genre"
            />
            <button type="submit">Add book</button>
          </form>
        </div>
        <Footer year={2025} />
      </main>
    </div>
  );
}

export default AddBookForm;
