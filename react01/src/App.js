import './App.css';

function App(){
    let a=2;
    return(
        <div>
            {a}
            <h1 className='main'>Hello, inside App</h1>
            <p style={{backgroundColor: "beige", color:"blue"}}>This is tutorial of React</p>
        </div>
    )
}

export default App;