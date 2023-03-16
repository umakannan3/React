import React from "react";

export function Greeting(){
    return(
        <>
        <div class="backgro">
        <h1 class="text-center">Congratulations</h1>
        <div class="container row ">
            <div class="col-lg-4"></div>
            <div class="col-lg-6 sizes color mt-5 ">
                <div className="d-flex justify-content-center mt-5">
                <img src=" https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="no pic" className="image d-flex justify-content-center"/>
                </div>
                <div class="center pb-5">
                    <h1 >Kiran V</h1>
                    <p>Vishnu Institute of Computer Education and Technology</p>
                    <p>Bhimavaram</p>
                    <img src="  https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt="no pic"/>
                </div>
            </div>
            <div class="col-lg-2"></div>
        </div>
        </div>
        </>
    );
    

}


// return(
//     <>
//     <div class="back">
//         <img src=" https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="no pic"  class="image">
//         <p>Vishnu Institute Computer Education and of Technology</p> 
//         <p>Bhimavaram</p>  

//     </div>
//     </>
// )