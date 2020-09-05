import React, { RefObject, createRef } from "react";
import { navigate } from "hookrouter";
import anime from "../anime.js";
//
import { ArrowRightIcon } from "./Icons";

export interface IArticle {
    _id: string,
    title: string,
    body: string,
    date: string,
    author: string
};

export const Article: React.FC<IArticle> = ({ _id, title, body, author, date })=> {

    const art: RefObject<HTMLElement> = createRef<HTMLElement>();    

    function navigateAndAnimate() {

        if (!art.current) return;

        // art.current.style.transition = "0";
        anime.set(".article", {
            transition: "0s"
        });
        anime({
            targets: ".article",
            translateY: 20,
            scale: .9,
            opacity: 0,
            duration: 300,
            easing: "easeInCubic",
        })
        anime({
            targets: art.current,
            translateY: 0,
            scale: 1,
            opacity: 0,
            duration: 300,
            delay: 300,
            easing: "easeInCubic",
        })
        setTimeout(()=> {

            navigate(`/article/${ _id }`);

        }, 1000);

    }

    return (
        <article className="article" ref={ art } onClick={ navigateAndAnimate }>
            <header className="article-header">
                <div className="titles">
                    <h2 className="title">{ title }</h2>
                    <span className="grey-text">{ author }</span>
                </div>
                <span className="date">{ date }</span>
            </header>
            <main className="article-content">
                <p>
                    { body.length > 80 ? body.slice(0, 80) + "..." : body }
                </p>
                <div className="cursor">
                    <ArrowRightIcon />
                </div>
            </main>
        </article>
    );
};