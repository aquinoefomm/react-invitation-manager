import { useEffect, useState } from "react";
import axios from "axios";
import Guest from "../components/Guest";
import { Link } from "react-router-dom";
import Home from "./Home";

function GuestList() {
  const [guests, setGuests] = useState([]);
  const [arrivedCount, setArrivedCount] = useState(0);
  const [expectedCount, setExpectedCount] = useState(0);

  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/people");
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err))
        setGuests(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setExpectedCount(countOut)
    setArrivedCount(countIn)
  }, );

  let countIn = 0;
  let countOut = 0;
  
  return (
    <div className="container">
      <div className="container">
        <h1>Lista de Convidados</h1>
        <div className="counter">
          <p>Convidados presentes: {arrivedCount}</p>
          <p>Convidados esperados: {expectedCount}</p>
        </div>
      </div>
      <div>
        <table className="table-container">
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Presente</th>
            <th></th>
          </tr>
          
          {guests.map(function (item, index) {
            if (item.present === false) {
              countOut++
            } else if (item.present === true) {
              countIn++
            }

            return (
              <Guest
                key={index}
                name={item.name}
                age={item.age}
                checkedIn={item.present ? "✅" : "❌"}
                id={item.id}
              />
            );

          })}
          
        </table>
        <div className="container">
        <button className="back-home">
          <Link to="/" element={<Home />}>
            Voltar ao início
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
}

export default GuestList;
