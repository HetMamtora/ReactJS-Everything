import React, { useReducer } from 'react'

const initialState = {
    data:[],
    loading:false,
    error:null
}

function reducer(state,action){
    console.log(state,action);
    switch(action.type){
        case 'FETCH_DATA_START':
            return {...state, loading:true};
        case 'FETCH_DATA_SUCCESS':
            return {loading:false, error:null, data:action.payload};
        case 'FETCH_DATA_FAILURE':
            return {...state, loading:false, error:action.payload}
    }
}

const UseReducerEx = () => {

    const [state,dispatch] = useReducer(reducer,initialState);
    
    const fetchData = async() =>{
        dispatch({type: 'FETCH_DATA_START'});

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch({type:'FETCH_DATA_SUCCESS',payload:data});
            console.log(data);
        }catch(error){
            dispatch({type: 'FETCH_DATA_FAILURE',payload:error.message});
        }
    }

  return (
    <div>
        <h1>UseReducer-Eg-2</h1>
        <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default UseReducerEx