
import {AuthorizationError, BadRequestError} from "../../../utils/errors";
import {RefreshToken} from "../../../models";

export const removeRefreshToken = async (req, res, next) => {
    try {

        const {
            body: { refreshToken: refreshTokenValue }, refreshTokenPayload: {
                userId
            }
        } = req;
        req.refreshToken = await RefreshToken.delete( {
            where: {
                value: refreshTokenValue,
                userId,
            }
        } );
        if (req.refreshToken) {
            next( new AuthorizationError() );
        }

    } catch (e) {
        next( new AuthorizationError() );
    }

};