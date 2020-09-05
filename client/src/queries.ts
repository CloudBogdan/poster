import { gql, ApolloClient } from "apollo-boost";

export function Query(client: ApolloClient<any> | null, name: string, params: string, args: string | null=null): Promise<object> {

    return new Promise((resolve, reject)=> {

        client?.query({
            query: gql`
                query ${ name }Query {
                    ${ name }${ args ? `(${ args })` : "" } {
                        ${ params }
                    }
                }
            `   
        }).then(res=> resolve(res.data));

    });

}
export function Mutation(method: string, args: string, args2: string): any {

    return gql`
        mutation ${ method }(${ args }) {
            ${ method }(${ args2 }) {
                _id
            }
        }
    `;

}