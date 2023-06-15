import { ApolloClient, InMemoryCache } from "@apollo/client";

const IS_MOCK = true;
export const client = new ApolloClient({
	uri: IS_MOCK
		? "http://localhost:8888/graphql"
		: "http://localhost:3000/graphql",
	cache: new InMemoryCache(),
});
