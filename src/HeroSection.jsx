import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './HeroSection.css'

gsap.registerPlugin(useGSAP); 

export default function HeroSection(){
    return (
        <>
            <section className="hero">
                <p>WEB DESIGN & UI/UX</p>
            </section>
        </>
    )
}