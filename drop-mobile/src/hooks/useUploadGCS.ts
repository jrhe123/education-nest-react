export const useUploadGCS = (file: File) => {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("name", "this is my name");
	fetch();
};
