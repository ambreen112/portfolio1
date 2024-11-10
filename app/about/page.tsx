
import Navbar from "../components/Navbar";
import React from "react";

export default function About() {
    return (
      <>
        <Navbar />
        <section className="about">
        
          <div className="relative ">
    
            <div className="absolute">
            <div className="flex">
              <h2 className="h2">
                About me
              </h2>
              
                <p className="p"> Over the past two years, I have been learning HTML and CSS on my own.
                     Currently, I am learning TypeScript and Next.J.S. </p>

              
            </div>
          </div>
          </div>
        </section>
      </>
    );
  }
  
  