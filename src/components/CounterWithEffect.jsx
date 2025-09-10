import { useState, useEffect } from "react";
const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("El contador ha cambiado a:", count);
    }, [count]);

    return (
        <div>
            <p>el contador esta en: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    );
};

export default CounterWithEffect;