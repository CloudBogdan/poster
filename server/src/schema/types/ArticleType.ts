import {
    GraphQLObjectType as $Object,
    GraphQLID as $ID,
    GraphQLString as $String,
    GraphQLNonNull as $Null,
} from "graphql";

const ArticleType: $Object<any, any> = new $Object({

    name: "Article",
    fields: {

        _id: { type: new $Null($ID) },

        title: { type: new $Null($String) },
        body: { type: new $Null($String) },
        author: { type: new $Null($String) },
        date: { type: $String },

    }

})

export default ArticleType;