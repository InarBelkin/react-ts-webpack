import React, {useState} from 'react';
import './App.css';

function App() {
    const [num, setNum] = useState(0)
    const unused = 42

    const setNumber = () => {
        const cat = {name: "Senya", age: 12}
        console.log(cat)
        setNum(num + 1)
    }

    return (
        <div className="App">
            <h1>Hello! React</h1>
            <p>asdfasfdasfdasdf</p>
            <p>Count:{num}</p>
            <button onClick={setNumber}>Plus</button>
        </div>
    );
}

export default App;
