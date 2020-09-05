import { createContext } from "react";
import { ApolloClient } from "apollo-boost";

type ContextType = {
    // client: ApolloClient<any> | null,
    is_creating: boolean, 
    setIsCreating: (value: boolean)=> void
};

export default createContext<ContextType>({
    // client: null,
    is_creating: false, 
    setIsCreating: (value: boolean)=> {}
})