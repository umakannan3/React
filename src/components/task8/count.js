import React, { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-4 text-center">
                    <h1 className="display-2">{count}</h1>
                    <div className="btn-group mt-4" role="group">
                        <button type="button" className="btn btn-primary" onClick={increment}>Increment</button>
                        <button type="button" className="btn btn-danger" onClick={decrement}>Decrement</button>
                        <button type="button" className="btn btn-secondary" onClick={reset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
