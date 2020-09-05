import React, { useEffect, useState } from "react";
import { Query } from "../queries";
import { IArticle } from "../components/Article";
import { navigate } from "hookrouter";
import { useApolloClient } from "react-apollo";
//
import Nav from "../components/Nav";
import Loader from "../components/Loader";
import anime from "../anime";
import CreateModal from "../components/CreateModal";

const ArticleView: React.FC<{ article_id: IArticle["_id"] }> = ({ article_id })=> {

    const [article, setArticle] = useState<IArticle | null>(null);
    const client = useApolloClient();

    useEffect(()=> {

        Query(client, "article",
            `title
            body
            author
            date`,
            `_id: "${ article_id }"`
        ).then((res: any)=> {

            setArticle(res.article);

            anime({
                targets: ".to_animate",
                translateY: [20, 0],
                opacity: [0, 1],
                delay: anime.stagger(200)
            })

        });


    }, []);

    return (<>
        <CreateModal />
        <Nav escape_button={ true } onEscapeButtonClick={ ()=> navigate("/") } />
        <main className="article-view page">
            {
                article ? (
                    
                    <>
                        <header className="page-header to_animate">
                            <div className="page-header-content">
                                <h2 className="title to_animate">{ article.title }</h2>
                                <div className="info">
                                    <span className="subtitle to_animate">{ article.author }</span>
                                    <span className="date to_animate">{ article.date }</span>
                                </div>
                            </div>
                        </header>
                        <main className="page-content to_animate">
                            <p>
                                &emsp;{ article.body }
                            </p>
                        </main>
                    </>

                ) : <Loader />
            }
        </main>
    </>);
};

export default ArticleView;