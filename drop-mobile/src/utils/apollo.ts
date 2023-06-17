import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const IS_MOCK = false;
const uploadLink = createUploadLink({
	uri: "http://localhost:3000/graphql",
});
export const client = new ApolloClient({
	uri: IS_MOCK
		? "http://localhost:8888/graphql"
		: "http://localhost:3000/graphql",
	link: uploadLink, // upload to graphql
	cache: new InMemoryCache(),
});
