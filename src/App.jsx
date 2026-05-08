import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false,
  });

  console.log(formData);

  return (
    <>
      <h1>React post form</h1>

      <form>
        <input
          type="text"
          name="author"
          placeholder="Autore" />

        <input
          type="text"
          name="title"
          placeholder="titolo"
        />

        <textarea
          name="body"
          placeholder="Testo del post"
        ></textarea>

        <div>
          <input
            type="checkbox"
            id="public"
            name="public"
          />
          <label htmlFor="public">Pubblico</label>
        </div>

        <button type="submit">invia post</button>

      </form>
    </>
  )
}
export default App;
