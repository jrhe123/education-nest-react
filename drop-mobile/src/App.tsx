import { useState } from "react";
import "./App.css";
//
import { useQuery } from "@apollo/client";
import { FIND } from "./graphql/demo";

const App = () => {
	const { loading, data } = useQuery(FIND, {
		variables: {
			id: "720f3703-89c4-407e-ac49-ac071bdb98c6",
		},
	});

	console.log("loading: ", loading);

	return <div>{JSON.stringify(data)}</div>;
};

export default App;
