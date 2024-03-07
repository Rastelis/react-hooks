import { useState } from 'react'

export default function Quantity() {
    const [count, setCount] = useState(0)

    const handleClick = (action) => {
        if (count + action > 100 || count + action < 0) return;
        setCount(count + action);
    }

    return (
        <div>
            <button onClick={() => handleClick(1)}>+</button><span>{count}</span><button onClick={() => handleClick(-1)}>-</button>
        </div>
    )
}
