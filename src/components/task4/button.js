import React from "react";
export function Button(){
    return(
        <>
        <div className="container-fluid row back">
            <div className="size3"></div>
            <div className="size2">
                <p className="text-white d-flex justify-content-center size4">Social Buttons</p>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button className="size5 fs-5">Like</button>
                <button className="size6 ms-3 fs-5">Comment</button>
                <button className="size7 ms-3 fs-5">Share</button>
            </div>
            <div className="size3">

            </div>

        </div>
        </>
    );
}