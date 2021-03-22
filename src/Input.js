import React, {useState} from 'react';
import './index.css';

function Input({item,addU}) {

    const [details,setDetails] = useState("");  // taking username
    const [detailsSelect,setDetailsSelect] = useState(false);   // taking user task status

    // Getting last value ............
    // let len = item.length-1;
    
    const handleComplete =(e)=>{
        // let lastVal = item[len];
        // console.log("last value is :",lastVal);
        setDetailsSelect(e.target.value);
        console.log(e.target.value);
    }

    // Adding User ........................
    const addUserData =(e) =>{

        e.preventDefault();
        
        if(typeof item !== "undefined"){
            
            // console.log("value is :",item);
            let len = item.length-1;
            let lastVal = item[len];
            len++;
            // console.log("Last value :",lastVal);
            let newId = lastVal?.id+1;
    
            let index = item.indexOf(lastVal);
            // console.log("index value *****",index);
            // let newUserId = lastVal.userId+1;
            let obj = { 
                 userId:0,
                 id:newId,
                 title:details.name,
                 completed:detailsSelect
                }
                let pushData = item.push(obj);

                // 2.
                // let pushData = {
                //     ...item,
                //     [index+1]:obj
                // }
                // console.log("######",obj);
                // console.log("888888",pushData);
                // console.log("*******",details.name);
                addU(pushData);
            // console.log("last value is :",lastVal);
        }
    }   


    return (
        <form >
            <div className='form-inner'>
                <h2>Add Task </h2>

                <div className='form-group'>
                    <label htmlFor='name'> Title : </label>
                    <input
                    type='text'
                    name='name'
                    id='name'
                    onChange={e => setDetails({ ...details, name: e.target.value })}
                    value={details.name}
                    />
                 </div>
           

                <div className='form-group mt-2'>
                        <label htmlFor='name'> Status: </label>
                        <select className="select" selected="" style={{width:"10%"}} onChange={handleComplete}>
                            <option>True</option>
                            <option>False</option>
                        </select>
                </div>
            <input type="button" className="submitUser" value="Submit" style={{margin:"5px 0px"}} onClick={addUserData}/>
            </div>
          </form>
    )
}

export default Input;
