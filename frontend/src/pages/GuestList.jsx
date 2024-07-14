import { useEffect, useState } from 'react';
import axios from 'axios';
import Guest from '../components/Guest';
import { Link } from "react-router-dom"
import Home from './Home';

function GuestList(){

    const [guests, setGuests] = useState([]);
  
  useEffect(() => {
    fetchData()
  }, [guests]);

  let fetchData = async () => {

    try {
      const response = await axios.get(
        "http://localhost:8080/people"
      )
      // .then(res => console.log(res.data))      
        // .catch(err => console.log(err))
      ;
      
      setGuests(response.data);
    } catch(error){
      console.log(error);
    }

    
  }

  return(
    <div className="container">
      <div className='container'>
        <h1>Lista de Convidados</h1>
      </div>
      <div>
      <table className='table-container'>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Presente</th>
          <th></th>
        </tr>
      
      {guests.map(function(item, index){
        return <Guest key={index} name={item.name} age={item.age} checkedIn={item.present? "✅" : "❌"} id={item.id} />
      })}
      </table>
      </div>
      <div>
      <button className="button-link"><Link to="/" element={<Home/>}>Voltar ao início</Link></button>
    
      </div>
      </div>
  )
  

}

export default GuestList;