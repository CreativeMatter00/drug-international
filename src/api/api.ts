import axios from "axios";

export const getPosts = async () => {
	try {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const securityCheck = async (code: string) => {
	try {
		const response = await axios.get(
			`http://103.219.160.253:5454/drug-website/api/CheckScurityCode/posts/${code}`
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
