import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

function Include() {
  const [newGuest, setNewGuest] = useState({
    name: "",
    age: "",
    present: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    try {
    axios.post("http://localhost:8080/api/people/post", newGuest);
      console.log(newGuest);
      alert("New guest submitted")
    } catch (error) {
      console.log(error);
    }
    
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewGuest((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div>
      <form className="include-form" onSubmit={handleSubmit} >
        <label htmlFor="name">Nome</label>
        <input onChange={handleInputChange} type="text" id="name" name="name"/>
        <label htmlFor="age">Idade</label>
        <input onChange={handleInputChange} type="number" id="age" name="age"/>
        <label htmlFor="present">Presente</label>
        <select onChange={handleInputChange} name="present" id="present">
          <option value={false}>Não</option>
          <option value={true}>Sim</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
      <div className="container">
        <button className="back-home">
          <Link to="/" element={<Home />}>
            Voltar ao início
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Include;
