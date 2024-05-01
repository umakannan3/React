import React, { useEffect, useState } from "react";

export function Jewell() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/jewell.json')
            .then(shop => shop.json())
            .then(gold => setData(gold));
    }, []);

    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-4 fw-bolder">Aradhana Jewellers</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.map((value, index) => (
                    <div key={index} className="col">
                        <div className="card h-100">
                            <img src={value.imageURL} className="card-img-top" alt="jewelry" />
                            <div className="card-body">
                                <h5 className="card-title">{value.name}</h5>
                                <p className="card-text">{value.Discription}<br />{value.brand}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item fw-medium fs-5">Weight: {value.weight}</li>
                                    <li className="list-group-item fw-medium fs-5">Price: {value.price}</li>
                                    <li className="list-group-item fw-medium fs-5">Category: {value.Category}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
