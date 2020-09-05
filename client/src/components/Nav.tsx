import React, { useContext } from "react";
import anime from "../anime.js";
import Context from "../Context";
//
import { AddIcon, ArrowLeftIcon } from "./Icons";

type NavType = {
    escape_button?: boolean,
    onEscapeButtonClick?: ()=> void
};

const Nav: React.FC<NavType> = ({ escape_button=false, onEscapeButtonClick=()=>{} })=> {

    const { setIsCreating } = useContext(Context);

    const buttons_anims = {
        add(e: any): void {
            
            anime({
                targets: e.target.querySelector(".icon"),
                rotate: [
                    { value: anime.random(-180, 180), duration: 1000 },
                    { value: 0, duration: 1000 }
                ]
            });

        },
        escape(e: any): void {
            
            anime({
                targets: e.target.querySelector(".icon"),
                translateX: [
                    { value: -5, duration: 1000 },
                    { value: 0, duration: 1000 },
                ],
                scaleY: [
                    { value: .8, duration: 1000 },
                    { value: 1, duration: 1000 },
                ]
            });

        },
    }
    
    return (
        <nav className="nav">
            {
                escape_button ?
                    (<button onClick={ onEscapeButtonClick } onMouseOver={ buttons_anims.escape }>
                        <ArrowLeftIcon />
                    </button>)
                : ""
            }
            <button onClick={ ()=> setIsCreating(true) } onMouseOver={ buttons_anims.add }>
                <AddIcon />
            </button>
        </nav>
    );
};

export default Nav;