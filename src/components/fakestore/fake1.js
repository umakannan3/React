import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Fake1(){
    const {id} = useParams()
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+id)
        .then(store => store.json())
        .then(store1 => setData(store1))
        console.log(data);
    }) ;
    return(
        <>
        <div className="container-fluid row">
            <div className="col-lg-6 mt-5 justify-content-center">
                <img src={data.image} alt="no pic"/>
            </div>
            <div className="col-lg-6 mt-5">
                <h1>{data.title}</h1>
                <h5>{data.categroy}</h5>
                <p className="fs-1 fw-bold">Price : {data.price}</p>
                <p className="fs-3 fw-medium">Description : <br/>{data.description}</p>
            </div>
        </div>
        </>
    );
}