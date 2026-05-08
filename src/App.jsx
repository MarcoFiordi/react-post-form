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
    </>
  )
}
export default App;
