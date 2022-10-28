import axios from "axios";

export const getAllRegions = async () =>
  await axios.get("http://localhost:4001/locations/departments");

export const saveRegion = async (region) =>
  await axios.post("http://localhost:4001/locations/departments", region);
