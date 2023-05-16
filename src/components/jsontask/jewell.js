import React, { useEffect, useState } from "react";

export function Jewell(){
    const [data,setData] = useState([])
    useEffect (() => {
        fetch ('http://localhost:3000/jewell.json')
        .then (shop => shop.json())
        .then (gold => setData(gold))
    });
    return(
        <>
            <div className="bg-secondary pb-5">
            <p className="text-center text-dark fs-1 pt-5 fw-bolder">
                Aradhana Jewellers
            </p>
        
            {
                data.map((value,index) =>(
                    <>
                        
                        <div className="col-lg-2 card d-inline-flex m-2 ">
                            <p className="text-center">
                            <img  src={value.imageURL} alt="no pic" />
                            </p>
                                <div class="card-body ">
                                    <h4 class="card-title">{value.name}</h4>
                                    <p class="card-text">{value.Discription}<br/>{value.brand}</p>
                                </div>
                                    <ul className="pb-5 ">
                                        <li className="list-group-item fw-medium fs-5">Weight : {value.weight}</li>
                                        <li className="list-group-item fw-medium fs-5 ">Price : {value.price}</li>
                                        <li className="list-group-item fw-medium fs-5">Categroy : {value.Catagroy}</li>
                                    </ul>
                                
                        
                        </div>
                     
                    </>
                )
                
                )
            }
            </div>
    
        </>
    );
}