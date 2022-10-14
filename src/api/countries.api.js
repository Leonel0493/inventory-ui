import axios from "axios";

export const createCountryRequest = async (country) =>
  await axios.post("http://localhost:4001/locations/countries", country);
