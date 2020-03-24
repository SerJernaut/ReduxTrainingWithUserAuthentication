import {ACCESS_TOKEN_KEY} from "../../constants";
import {axiosInstance} from "../axiosConfig";
import {refreshTokens} from "../index";


axiosInstance.interceptors.request.use( () => {
    config.headers.authorization = sessionStorage.getItem( ACCESS_TOKEN_KEY );
    return config;
} );

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const { response: { status }, config } = error;
        switch (status) {
            case 419: {
                await refreshTokens();
                return axiosInstance.request( config );
            }
            default:
                throw error;
        }
    }
);

