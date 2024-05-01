import React from "react";
// import "./Hello.css"; // Importing external CSS file for styles

export function Hello() {
    return (
        <div className="container-fluid row bg-warning vh-100">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 mt-5 text-center">
                <h1 className="hello-title">Hi!!!</h1>
                <h1 className="hello-title">Welcome to all</h1>
            </div>
            <div className="col-lg-4"></div>
        </div>
    );
}
