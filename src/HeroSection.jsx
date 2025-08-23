import React from "react";
import gsap from "gsap";
import { useGSAP} from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import './HeroSection.css'

gsap.registerPlugin( useGSAP, ScrambleTextPlugin ); 

export default function HeroSection(){

    useGSAP(()=>{
        // Create sequence of scramble text animations
        const tl = gsap.timeline();
        
        // First: Start with random chars, scramble to "ABHISAR BHARDWAJ"
        tl.fromTo(".hero-text", 
            { 
                scrambleText: {
                    text: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
                    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
                    speed: 0.4,
                    tweenLength: false
                }
            },
            { 
                duration: 1.5,
                scrambleText: {
                    text: "ABHISAR BHARDWAJ",
                    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
                    speed: 0.4,
                    tweenLength: false
                },
                ease: "none"
            }
        )
        
        // Pause for reading
        .to(".hero-text", {duration: 1.25})
        
        // Second: Scramble to "FULL STACK DEVELOPER"
        .to(".hero-text", {
            duration: 1.5,
            scrambleText: {
                text: "FULL STACK DEVELOPER",
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
                speed: 0.4,
                tweenLength: false
            },
            ease: "none"
        })
        
        // Pause for reading
        .to(".hero-text", {duration: 1.25})
        
        // Third: Scramble to "UI UX DESIGN"
        .to(".hero-text", {
            duration: 1.5,
            scrambleText: {
                text: "UI UX DESIGN",
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
                speed: 0.4,
                tweenLength: false
            },
            ease: "none"
        })
        
        // Pause for reading
        .to(".hero-text", {duration: 1.25})
        
        // Fourth: Scramble back to "ABHISAR BHARDWAJ"
        .to(".hero-text", {
            duration: 1.5,
            scrambleText: {
                text: "ABHISAR BHARDWAJ",
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
                speed: 0.4,
                tweenLength: false
            },
            ease: "none"
        });
    })

    return (
        <>
            <section className="hero">
                <p className="hero-text"></p>
            </section>
        </>
    )
}
