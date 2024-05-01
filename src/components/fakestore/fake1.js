import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Fake1() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(productData => setData(productData))
            .catch(error => console.error("Error fetching data:", error));
    }, [id]);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 text-center">
                    {data && (
                        <img src={data.image} alt={data.title} className="img-fluid" />
                    )}
                </div>
                <div className="col-lg-6">
                    {data && (
                        <>
                            <h1 className="mb-3">{data.title}</h1>
                            <h5 className="mb-3">{data.category}</h5>
                            <p className="fs-4 fw-bold">Price: ${data.price}</p>
                            <p className="fs-5 fw-medium">Description:<br />{data.description}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
