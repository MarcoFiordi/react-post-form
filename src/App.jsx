import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false,
  });

  console.log(formData);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const checked = target.checked;
    const valueToUpdate = target.type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: valueToUpdate,
    });

    

  
    
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submit del form");
    console.log("dati da inviare", formData);

  }

  return (
    <>
      <h1>React post form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="author"
          placeholder="Autore"
          onChange = {handleChange}
        />

        <input
          type="text"
          name="title"
          placeholder="titolo"
          onChange={handleChange}
        />

        <textarea
          name="body"
          placeholder="Testo del post"
          onChange={handleChange}
        ></textarea>

        <div>
          <input
            type="checkbox"
            id="public"
            name="public"
            onChange={handleChange}
          />
          <label htmlFor="public">Pubblico</label>
        </div>

        <button type="submit">invia post</button>

      </form>
    </>
  )
}
export default App;
