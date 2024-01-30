import axios from "axios";

//? Environment Check

let url = "";

if (process.env.NODE_ENV === "development") {
	url = "http://103.219.160.253:5454/drug-website";
} else {
	url = "https://www.drug-international.com/";
}

//? Security Check

export const securityCheck = async (code: string) => {
	try {
		const response = await axios.get(
			`http://103.219.160.253:5454/drug-website/api/CheckScurityCode/${code}`
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

//? Get Specilized Products

export const getSpecializedProducts = async () => {
	try {
		const response = await axios.get(`${url}/api/SpecilizedProducts`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
