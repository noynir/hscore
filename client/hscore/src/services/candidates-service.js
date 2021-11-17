const axios = require("axios");

const BASE_URL = "http://localhost:3000/candidates";

export async function getCandidates() {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    return [];
  }
}
