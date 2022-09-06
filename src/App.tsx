import React, {useState} from 'react';
import './App.css';

function App() {
    const [num, setNum] = useState(0)
    return (
        <div className="App">
            <h1>Hello! React</h1>
            <p>asdfasfdasfdasdf</p>
            <p>Count:{num}</p>
            <button onClick={() => setNum(num + 1)}>Pluasdfs</button>
        </div>
    );
}

export default App;
