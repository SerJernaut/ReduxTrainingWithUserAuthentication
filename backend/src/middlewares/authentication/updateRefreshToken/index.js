import {AuthorizationError} from "../../../utils/errors";

export const updateRefreshToken = async (req, res, next) => {
    try {
        const { refreshToken, refreshTokenValue } = req;
        const updatedRefreshToken = await refreshToken.update( {
            value: refreshTokenValue
        } );

        if (updatedRefreshToken) {
            return next();
        }
        next( new AuthorizationError() );
    } catch (e) {
        next( new AuthorizationError() );
    }

};