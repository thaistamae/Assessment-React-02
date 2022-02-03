import {useState} from 'react';
import './style.css';

export function Counter(){
    const [counter, setCounter] = useState(0)

    function increaseCounter(){
        setCounter(counter +1)
    }

    function decreaseCounter(){
        setCounter(counter -1)
    }

    return(
        <div className="section">
            <section >
                <h1 className="counter">{counter}</h1>
            </section>        
            <section>
                <button className="increment" onClick={increaseCounter}>Increment</button>
                <button className="decrement" onClick={decreaseCounter}>Decrement</button>
            </section>           
        </div>
    )
}
