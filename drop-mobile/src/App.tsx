import { useLayoutEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { FIND, UPDATE } from "./graphql/demo";
import { Button, Form, Input } from "antd-mobile";

import { SINGLE_UPLOAD, GET_FILE } from "./graphql/gcs";
import "./App.css";

const App = () => {
	const [file, setFile] = useState<File | null>(null);
	const [msg, setMsg] = useState("");

	// graphql upload file
	// https://aseerkt.hashnode.dev/graphql-file-upload-using-react-with-apollo-graphql
	// const [uploadRequest, { loading: isUploading, error }] = useMutation(
	// 	SINGLE_UPLOAD,
	// 	{
	// 		onCompleted: (data) => console.log("data: ", data),
	// 	}
	// );

	useLayoutEffect(() => {
		document.documentElement.setAttribute("data-prefers-color-scheme", "dark");
	}, []);

	const { loading: isLoading, data } = useQuery(FIND, {
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

	// https://aseerkt.hashnode.dev/graphql-file-upload-using-react-with-apollo-graphql
	const uploadFile = async () => {
		setMsg("");
		if (!file) return;
		try {
			const formData = new FormData();
			formData.append(
				"operations",
				JSON.stringify({
					query: `
						mutation ($file: Upload!, $name: String!) {
							singleUpload(file: $file, name: $name)
						}
					`,
					variables: { file: null, name: "this is name2" },
				})
			);
			formData.append("map", JSON.stringify({ "0": ["variables.file"] }));
			formData.append("0", file);

			const res = await fetch("http://localhost:3000/graphql", {
				method: "POST",
				headers: {
					"apollo-require-preflight": "true",
				},
				body: formData,
			});

			console.log("res: ", res);
		} catch (err) {
			console.log("err: ", err);
		}
	};

	return (
		<div>
			<input
				className="App-input"
				type="file"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					const files = (e.target as HTMLInputElement).files;
					setFile(files ? files[0] : null);
				}}
			/>
			<button onClick={uploadFile}>Upload</button>
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
