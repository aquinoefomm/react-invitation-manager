import { useEffect, useState } from "react";
import axios from "axios";

function UpdateStatus(props) {
  const [person, setPerson] = useState({ });

//   let response = ''

    useEffect(()=>{
        fetchData()

    }, [person])

    // let chosenGuest = {}

  let fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/people/" + props.id)
      // .then(res => console.log(res.data))      
      // .catch(err => console.log(err))
      // Last error from this point:
      setPerson(response.data[0])
    } catch (error){
      console.log(error)
    } 
    };



  async function handleSubmit(event) {
    event.preventDefault();
    const updateData = {
      name: person.name,
      age: person.age,
      present: true
    }
    try {
      await axios.put("http://localhost:8080/people/" + props.id, updateData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    }catch (error){
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Check in</button>
      </form>
    </div>
  );
}

export default UpdateStatus;
