import axios from "axios";

const API_URL = "https://api.unsplash.com";
const ACCESS_KEY = "SBhZheGav6ss06PRgfr420FMqjItFIntfQX8TXraKWI";

const fetchPhoto = async (params = {}) => {
  const response = await axios.get(`${API_URL}/search/photos/`, {
    params: {
      client_id: ACCESS_KEY,
      per_page: 12,
      ...params,
    },
  });
  return response.data.results;
};

export default fetchPhoto;
