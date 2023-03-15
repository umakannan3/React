import React from "react"; 
import {Link} from 'react-router-dom'
export function Menu(){
    return(
        <>
        <div className=" bg-dark ">
            <ul className="nav ">
                <li className="text-danger">Moodle Exercises</li>
                <Link to = '/a'><li className="text-white ms-3">Hello</li></Link>
                <Link to = '/congrates'><li className="text-white ms-3">Greeting</li></Link>
                <Link to = '/super'><li className="text-white ms-3">Super Over League</li></Link>
                <Link to = '/button'><li className="text-white ms-3">Social buttons</li></Link>
            </ul>

        </div>
        </>
    );
}