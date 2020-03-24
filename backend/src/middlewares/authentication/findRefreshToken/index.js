import {RefreshToken} from "../../../models";
import {AuthorizationError} from "../../../utils/errors";

export const findRefreshToken = async (req, res, next) => {
    try {

        const {
            body: { refreshToken: refreshTokenValue }, refreshTokenPayload: {
                userId
            }
        } = req;
        req.refreshToken = await RefreshToken.findOne( {
            where: {
                value: refreshTokenValue,
                userId,
            }
        } );
        if (req.refreshToken) {
            return next();
        }
        next( new AuthorizationError() );
    } catch (e) {
        next( new AuthorizationError() );
    }

};