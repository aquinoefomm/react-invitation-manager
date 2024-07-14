import UpdateStatus from "./UpdateStatus"


function Guest(props){

    return (
        <>
        <tr>
               <td>{props.name}</td>
               <td>{props.age}</td>
               <td>{props.checkedIn}</td>
               <td>
                <UpdateStatus id={props.id}/>
                </td> 
        </tr></>
    )
}

export default Guest;