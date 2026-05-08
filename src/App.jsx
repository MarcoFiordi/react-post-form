import { useState } from "react";
const API_URL = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
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

    fetch(API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formData),
    })

      .then(response => {
        return response.json();
      })

      .then(json => {
        console.log(json);
        
      });
  };

  return (
    <>
      <h1>React post form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="author"
          placeholder="Autore"
          value={formData.author}
          onChange={handleChange}
        />

        <input
          type="text"
          name="title"
          placeholder="titolo"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="body"
          placeholder="Testo del post"
          value={formData.body}
          onChange={handleChange}
        ></textarea>

        <div>
          <input
            type="checkbox"
            id="public"
            name="public"
            checked={formData.public}
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
