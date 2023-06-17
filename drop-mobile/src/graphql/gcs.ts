import { gql } from "@apollo/client";

// export const SINGLE_UPLOAD = gql`
// 	mutation SingleUpload($file: Upload!, $name: String) {
// 		singleUpload(file: $file, name: $name) {
// 			filename
// 		}
// 	}
// `;
export const SINGLE_UPLOAD = gql`
	mutation SingleUpload($file: Upload!, $name: String!) {
		singleUpload(file: $file, name: $name)
	}
`;

export const GET_FILE = gql`
	query GetFile($filename: String) {
		getFile(filename: $filename) {
			url
		}
	}
`;
