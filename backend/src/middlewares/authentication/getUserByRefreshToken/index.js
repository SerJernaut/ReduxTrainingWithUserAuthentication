import {AuthorizationError} from "../../../utils/errors";

export const getUserByRefreshToken = async (req, res, next) => {
    try {
        const user = (await req.refreshToken.getUser());

        if (user) {
            req.user = user;
            return next();
        }
        next( new AuthorizationError() );
    } catch (e) {
        next( new AuthorizationError() );
    }
};