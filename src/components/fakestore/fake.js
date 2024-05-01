import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Fake() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4 fw-bolder">Adharshna Garments</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((value, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img src={value.image} className="card-img-top" alt={value.title} />
              <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{value.category}</li>
                <li className="list-group-item">{value.price}</li>
                <li className="list-group-item">
                  <Link to={`/fake1/${value.id}`} className="btn btn-primary w-100">Read more</Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
