import React, { useEffect, useState } from "react";
import { Query } from "../queries";
import { IArticle } from "../components/Article";
import { useApolloClient } from "react-apollo";
//
import ArticlesList from "../components/ArticlesList";
import Nav from "../components/Nav";
import CreateModal from "../components/CreateModal";

const Home: React.FC = ()=> {
    
    const [articles, setArticles] = useState<IArticle[]>([]);
    const client = useApolloClient();

    async function loadArticles() {

        const arts = await Query(client, "articles", 
            `_id
            title
            body
            date
            author`
        );
        setArticles((arts as any).articles.reverse());

    }

    useEffect(()=> {
        loadArticles()
    }, []);

    return (<>
        <CreateModal loadArticles={ loadArticles } />
        <Nav />
        <main className="home page">
            <ArticlesList articles={ articles } />
        </main>
    </>);
};

export default Home;