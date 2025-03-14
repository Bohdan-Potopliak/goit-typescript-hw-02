import axios from "axios";
import { SearchParams, Photo, SearchResponse } from "./types";

const API_URL: string = "https://api.unsplash.com";
const ACCESS_KEY: string = "SBhZheGav6ss06PRgfr420FMqjItFIntfQX8TXraKWI";

const fetchPhoto = async (params: SearchParams): Promise<Photo[]> => {
    const response = await axios.get<SearchResponse>(`${API_URL}/search/photos/`, {
        params: {
            client_id: ACCESS_KEY,
            per_page: 12,
            ...params,
        },
    });
    return response.data.results;
};

export default fetchPhoto;
