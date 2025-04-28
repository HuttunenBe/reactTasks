import { useState } from "react";

const AddBookForm = () => {
    const [title, setTitle] = useState() // step 1 
    const [author, setAuthor] = useState() 
    const [price, setPrice] = useState() // step 1 
    const [genre, setGenre] = useState() 
    
}



return (
    <div>
      <h1>Add Books</h1>
      <input
        name="title"
        value={formData.title}
        onChange={changeInput}
        placeholder="title"
      />
      <input
        name="author"
        value={formData.author}
        onChange={changeInput}
        placeholder="author"
      />
      <input
        name="price"
        value={formData.price}
        onChange={changeInput}
        placeholder="price"
      />
      <input
        name="genre"
        value={formData.genre}
        onChange={changeInput}
        placeholder="genre"
      />
      <button className="addButton" onClick={AddBook}>
        Update
      </button>
    </div>
  );
;

export default AddBookForm;

