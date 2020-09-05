import express, { Application } from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import cors from "cors";

const port = 5000;
const
    app: Application = express();

// Connect to db
mongoose.connect("", { // ! Mongo db url
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Use cors
app.use(cors());
// Create schema
app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

// Listen server
app.listen(port, ()=> console.log(`Server has been started on port ${ port }`));