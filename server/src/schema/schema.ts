import { 
    GraphQLSchema,
    GraphQLID as $ID,
    GraphQLString as $String,
    GraphQLList as $List,
    GraphQLNonNull as $Null,
    GraphQLObjectType as $Object
} from "graphql";
import ArticleType from "./types/ArticleType";
import Article from "../models/Article";

// Query
const Query: $Object<any, any> = new $Object({

    name: "Query",
    fields: ()=> ({
        
        // Gets
        // > Get article 📋
        article: {

            type: ArticleType,
            args: { _id: { type: $ID } },
            resolve: (parent, { _id })=>
                Article.findById(_id)

        },
        // > Get articles 📋📋
        articles: {

            type: new $List(ArticleType),
            resolve: (parent, args)=>
                Article.find({})

        }

    })

});

// Mutation
const Mutation: $Object<any, any> = new $Object({

    name: "Mutation",
    fields: ()=> ({

        // Adds
        // > Add article 📋👋
        addArticle: {

            type: ArticleType,
            args: {
                title: { type: new $Null($String) },
                body: { type: new $Null($String) },
                author: { type: new $Null($String) },
                date: { type: $String },
            },
            resolve: (parent, args)=>
                new Article({ ...args }).save()

        }

    })

});

export default new GraphQLSchema({
    query: Query,
    mutation: Mutation
});