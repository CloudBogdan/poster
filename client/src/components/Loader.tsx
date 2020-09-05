import React, { useEffect, createRef, RefObject } from "react";
import anime from "../anime.js";

const Loader: React.FC = ()=> {

    const loader: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

    useEffect(()=> {

        if (!loader.current) return;

        anime({
            targets: loader.current.querySelectorAll(".buble"),
            translateY: [
                { value: 0, duration: 0, easing: "easeOutCubic", },
                { value: -20, duration: 300, easing: "easeOutCubic", },
                { value: 0, duration: 300, easing: "easeInCubic", },
            ],
            delay: anime.stagger(600),
            loop: true
        });

    }, []);

    return (
        <div className="loader" ref={ loader }>
            <div className="buble" />
            <div className="buble" />
        </div>
    )
};

export default Loader;