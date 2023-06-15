import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { faker } from "@faker-js/faker";
/**
 * https://www.apollographql.com/docs/apollo-server/testing/mocking/
 */

const typeDefs = `#graphql
  type UserType {
		id: String!
		name: String!
		desc: String!

		"""account info"""
		account: String!
	}

	type Query {
		find(id: String!): UserType!
	}

	type Mutation {
		create(params: UserInput!): Boolean!
		update(id: String!, params: UserInput!): Boolean!
		delete(id: String!): Boolean!
	}

	input UserInput {
		name: String!
		desc: String!
	}
`;

const resolvers = {
	UserType: {
		name: () => faker.person.fullName(),
	},
};

const mocks = {
	Int: () => 6, // for all the int type
	Float: () => 22.1, // for all the float type
	String: () => "hello", // for all the string type
};

const server = new ApolloServer({
	schema: addMocksToSchema({
		schema: makeExecutableSchema({ typeDefs, resolvers }),
		mocks,
		preserveResolvers: true,
	}),
});

startStandaloneServer(server, { listen: { port: 8888 } });
