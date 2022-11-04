import axios from "axios";

export const createCountryRequest = async (country) =>
  await axios.post("http://localhost:4001/locations/countries", country);

export const getCountries = async () =>
  await axios.get("http://localhost:4001/locations/countries");

export const getCountrySelect = async () =>
  await axios.get("http://localhost:4001/locations/departmentsForSelect");
