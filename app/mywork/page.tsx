import Navbar from "../components/Navbar";
import React from "react";
import Image from "next/image";

export default function Work(){
    return(
        <>
        <Navbar/>
        
        <div className="image-gallary">
            <div className="image-item">
            <Image src={"/image1.png"} alt="css" height={900} width={400}/>
            </div>

            <div className="image-item">
            <Image src={"/resume.png"} alt="css" height={600} width={400}/>
            </div>

            <div className="image-item">
            <Image src={"/image2.png"} alt="css" height={600} width={400}/>
            </div>
        </div>
       
        </>
    )
}