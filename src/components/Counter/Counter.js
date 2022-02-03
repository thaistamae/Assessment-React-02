import {useState} from 'react';
import './style.css';

export function Counter(){
    const [counter, setCounter] = useState(0)


    return(
        <div>
            <section>
                <h1 className="counter"></h1>
            </section>        
            <section>
                <button className="increment">Increment</button>
                <button className="decrement">Decrement</button>
            </section>           
        </div>
    )
}
