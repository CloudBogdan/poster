import React from "react";
import { IArticle, Article } from "./Article";

const ArticlesList: React.FC<{ articles: IArticle[] }> = ({ articles })=> (
    <main className="articles-list">
        {
            articles.map((article, index)=>
                <Article { ...article } key={ index } />
            )
        }
    </main>
);

export default ArticlesList;