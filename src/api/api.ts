import axios from "axios";

//? Environment Check

let url = "http://103.219.160.253:5454/drug-website";

// if (process.env.NODE_ENV === "development") {
// 	url = "http://103.219.160.253:5454/drug-website";
// } else {
// 	url = "https://www.drug-international.com/";
// }

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
		const response = await axios.get(`${url}/api/SpecilaizedProducts`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

//? Get Specilized Product Detail

export const getSpecializedProductDetail = async (id: string) => {
	try {
		const response = await axios.get(
			`${url}/api/SpecilaizedProductsById/${id}`
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

//? Get product details

export const getProductDetails = async () => {
	try {
		const response = await axios.get(`${url}/api/SpecilizedProducts`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

//? Get product letter

export const getProductByLetter = async (letter: any) => {
	try {
		const response = await axios.get(`${url}/api/GetProductByTrade/${letter}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

//? Get herbal product

export const getHerbalProducts = async () => {
	try {
		const response = await axios.get(`${url}/api/GetProductHerbal`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

//? Get unani product

export const getUnaniProducts = async () => {
	try {
		const response = await axios.get(`${url}/api/GetProductUnani`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
//? Get Oncology product

export const getOncologyProducts = async () => {
	try {
		const response = await axios.get(`${url}/api/GetOncologyProduct`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
