import { useLayoutEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { FIND, UPDATE } from "./graphql/demo";
import { Button, Form, Input } from "antd-mobile";

import "./App.css";

const App = () => {
	useLayoutEffect(() => {
		document.documentElement.setAttribute("data-prefers-color-scheme", "dark");
	}, []);

	const { loading, data } = useQuery(FIND, {
		variables: {
			id: "720f3703-89c4-407e-ac49-ac071bdb98c6",
		},
	});

	const [update] = useMutation(UPDATE);

	const onSumbitHandler = (e: { name: string; desc: string }) => {
		update({
			variables: {
				id: "720f3703-89c4-407e-ac49-ac071bdb98c6",
				params: {
					...e,
				},
			},
		});
	};

	return (
		<div>
			<Form
				layout="horizontal"
				onFinish={onSumbitHandler}
				footer={
					<Button block type="submit" color="primary" size="large">
						update
					</Button>
				}
			>
				<p>{JSON.stringify(data)}</p>
				<Form.Item name={"name"} label={"name"}>
					<Input type="text" name="name" />
				</Form.Item>

				<Form.Item name={"desc"} label={"description"}>
					<Input type="text" name="desc" />
				</Form.Item>
			</Form>
		</div>
	);
};

export default App;
