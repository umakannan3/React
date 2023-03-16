import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import uma from './umaphoto.jpeg'
export function Home(){
    return(
        <>
        <div className="mx-5 my-5 text-center container-fluid row  h-100 h_height bg-dark text-white">
            <div className="col-lg-6">
                <p>Good, better, best. Never let it rest. 'Till your good is better and your better is best.</p>
                <p className="mt-5 fs-3 fw-medium">Hi! I'm <span className="h_fontcol fw-bold">Umamaheswari P Kannan</span></p>
                {/* <p>Full-Stack Web Developer</p> */}
                <p><button className="rounded-eclipses butsize bg-primary text-white fs-5 fw-bold">Resume <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></button></p>
                <p className="mt-5 fs-4"><span><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span><span className="p-5"><FontAwesomeIcon icon={faLinkedin}/></span><span><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></span><span className="p-5"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span></p>
            </div>
            <div className="col-lg-6">
                <img src={uma} alt="no pic" className="h_imgsize rounded-circle mt-5"/> 
               
            </div>
            <div>
                
            </div>
        </div></>
    );
}