const { default: axios } = require("axios");


class APIservice {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // fetch product details
  async get(endpoint, params = {}) {
    try {
      const response = await this.api.get(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error("GET Request Error:", error);
      throw error;
    }
  }
}
export default APIservice;