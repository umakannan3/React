import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Fake() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  });
  return (
    <>
      <div className="bg-secondary  pb-5">
        <p className="text-center text-dark fs-1 pt-5 fw-bolder">
          Adharshna Garments
        </p>

        {data.map((value, index) => (
          <>
            <div class="card col-lg-2 d-inline-flex m-2 " >
              <img src={value.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{value.title}</h5>
                <p class="card-text">
                 
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{value.category}</li>
                <li class="list-group-item">{value.price}</li>
                <li class="list-group-item"><Link to={`/fake1/${value.id}`}><button type="button" class="btn btn-primary w-75">Readmore</button></Link></li>
              </ul>
              
            </div>
            {/* <div className="col-lg-2  card d-inline-flex ">
                            <p className="text-center">
                            <img  src={value.image} alt="no pic" className="jewellimg mt-3"/>
                            </p>
                                <div class="card-body ">
                                         <h4 class="card-title">{value.title}</h4>
                        
                                </div>
                                     <ul className="pb-5  ">
                                        <li className="list-group-item">Categroy : {value.category}</li>
                                        <li className="list-group-item  ">Price : {value.price}</li>
                                    </ul> 
                                    <p className="text-center">
                                    <Link to={`/fake1/${value.id}`}><button type="button" class="btn btn-primary w-50">Read more</button></Link>
                                    </p>
                        
                        </div> */}
          </>
        ))}
      </div>
    </>
  );
}
