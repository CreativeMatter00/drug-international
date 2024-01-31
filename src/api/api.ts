import axios from "axios";

//? Environment Check

let url = "http://103.219.160.253:5454/drug-website";

<<<<<<< HEAD
if (process.env.NODE_ENV === "development") {
  url = "http://103.219.160.253:5454/drug-website";
} else {
  url = "https://www.drug-international.com/";
}
=======
// if (process.env.NODE_ENV === "development") {
// 	url = "http://103.219.160.253:5454/drug-website";
// } else {
// 	url = "https://www.drug-international.com/";
// }
>>>>>>> 656951cf0f7622d609e52d60b7b8f4b4e43670d5

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

//? Get product details

export const getProductDetails = async () => {
  try {
    const response = await axios.get(`${url}/api/SpecilizedProducts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
