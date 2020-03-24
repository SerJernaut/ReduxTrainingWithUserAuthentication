import axios from "axios";
import {URL} from "../../constants/URLs";
import {CONTENT_TYPE} from "../../constants/content-types";


export const createAxiosConfig = (baseURL, headers) => {
    const config = {
        baseURL: baseURL,
        headers: headers
    }
    return config;
}

export const baseAxiosConfig = createAxiosConfig(URL["API-URL"], {
    'Content-type': CONTENT_TYPE["APPLICATION/JSON"],
});


export const axiosInstance = axios.create(baseAxiosConfig);

