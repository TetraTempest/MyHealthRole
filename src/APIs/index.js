import axios from "axios";
const ENDPOINT = "http://10.0.2.2:5000/api";

export const getAllHospitals = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/fetch/hospitals`);
    return response;
  } catch (error) {
    return error;
  }
};
