import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { IArticle } from "./components/Article";
import { useRoutes } from "hookrouter";
//
import Context from "./Context";
import Home from "./pages/Home";
import ArticleView from "./pages/ArticleView";
import { ApolloProvider } from "react-apollo";

const client: ApolloClient<any> = new ApolloClient({
    uri: "" // ! Back end uri 
});

const routes: { "/": any, "/article/:id": any } = {
    "/": ()=> <Home />,
    "/article/:id": ({ id }: { id: IArticle["_id"] })=> <ArticleView article_id={ id } />
};

const App: React.FC = ()=> {

    const router_result = useRoutes(routes);
    const [is_creating, setIsCreating] = useState<boolean>(false);

    return (
        <ApolloProvider client={ client }>
            <Context.Provider value={ { is_creating, setIsCreating } }>
                <div className="app">
                    
                    { router_result }
                
                </div>
            </Context.Provider>
        </ApolloProvider>
    );
}

export default App;
