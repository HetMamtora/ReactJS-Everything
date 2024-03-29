import React, {useState} from 'react'
import data from './datas.json'

const Data = () => {

    const [nData,setnData] = useState(data);
    //console.log(data[0].id);

    /*const handleClick = () =>{
        setnData([])
    }*/

    const handleRemove = (itemID) => {
        setnData(nData.filter(item => item.id !== itemID))
    }

    const handleUpdate = (itemID) => {
        setnData(nData.map(items => {
            if(items.id === itemID){
                return{name:"newName"}
            }
            else{
                return items;
            }
        }))
    }

  return (
    <div>
        <h1>Use State Eg-2</h1>
        <ul>
            {
                nData.map(items=>
                    <li key={items.id}>
                        {items.name}
                        <br />
                        <button onClick={()=>handleRemove(items.id)}>Remove</button>
                        <button onClick={()=>handleUpdate(items.id)}>Update</button>
                    </li>
                )
            }
        </ul>
        <button onClick={()=>setnData([])}>Clear</button>
    </div>
  )
}

export default Data