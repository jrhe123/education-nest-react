import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { FIND, UPDATE } from "./graphql/demo";

import "./App.css";

const App = () => {
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");

	const { loading, data } = useQuery(FIND, {
		variables: {
			id: "720f3703-89c4-407e-ac49-ac071bdb98c6",
		},
	});

	const [update] = useMutation(UPDATE);

	const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === "name") {
			setName(e.target.value);
		} else {
			setDesc(e.target.value);
		}
	};

	const onSumbitHandler = () => {
		update({
			variables: {
				id: "720f3703-89c4-407e-ac49-ac071bdb98c6",
				params: {
					name,
					desc,
				},
			},
		});
	};

	return (
		<div>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" onChange={onChangeInputHandler} />

			<label htmlFor="desc">Description</label>
			<input type="text" name="desc" onChange={onChangeInputHandler} />

			<button type="button" onClick={onSumbitHandler}>
				update now
			</button>
		</div>
	);
};

export default App;
