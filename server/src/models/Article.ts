import { Schema, model } from "mongoose";

/*
 *
 * title - String!
 * body - String!
 * author - String!
 * date - String
 * 
 */

const ArticleSchema: Schema = new Schema({
    title: String,
    body: String,
    author: String,
    date: String
});

export default model("Article", ArticleSchema);