import React, {useState,useEffect} from 'react';
import Navbar from './Navbar';
import Input from './Input';
import User from "./User";
// import TaskData from './Taskdata';
import {NavLink,Switch,Route} from "react-router-dom";
// import LoginForm from "./LoginForm";
import './index.css';
// 
function Task() {

  // 
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  //   

const [toggle,setToggle] = useState(false);

const addUser =()=>{
    setToggle(!toggle)
}

// Fetching from the api

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  console.log("items :",items);

    const ret_val = 
        items.map(item => (
            <tr id="row0">
                    {/* <td id="cell0-0">{item.userId}</td> */}
                    <td id="cell0-1">{item.id}</td>
                    <td id="cell0-2">{item.title}</td>
                    <td id="cell0-3">{item.completed.toString()}</td>
                    <td id="cell0-4"><input type="submit" className="delete" value="Delete" onClick={()=> deleteUser(item.id)} /></td>
            </tr>
        ));
        
        // Delete User function....................
        let deleteUser =(id) =>{
            let delUser = items.filter(i=> {
                return i.id != id
            })
            setItems(delUser);
        }

        // Adding User function .............
        const addUserData =(pushData) =>{
          setItems(pushData);
          console.log("push data val :",pushData);
        }



//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
    // 

    return (
      <>
       <Navbar />
       <input type="submit" className="addtTask" value="AddTask" style={{margin:"5px 0px"}} onClick={addUser}/>
{/* option for if else toggle */}
       {toggle && <Input item={items} addU={addUserData} />}
    
        <table id="simple-board">
            <tbody>
                <thead>
                    {/* <th>UserId</th> */}
                    <th>Id</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                </thead>


            {/* main table
                <tr id="row0">
                    <td id="userid">1</td>
                    <td id="u_id">1</td>
                    <td id="user">title1</td>
                    <td id="cell0-3">completed1</td>
                    <td id="cell0-4"><input type="submit" className="delete" value="Delete"/></td>
                </tr> */}

              {ret_val}
            <input type="submit" className="addtTask" value="AddTask" style={{margin:"5px 0px"}} onClick={addUser}/>
            </tbody>
      </table>
      </>
    );
  };
  
  export default Task;