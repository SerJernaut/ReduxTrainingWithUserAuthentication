import {AuthorizationError} from "../../../utils/errors";
import util from "util";
import jwt from "jsonwebtoken";

const verify = util.promisify( jwt.verify );

export const verifyRefreshToken = async (req, res, next) => {
    try {
        const { body: { refreshToken } } = req;
        req.refreshTokenPayload = await verify( refreshToken, 'secret' );
        next();
    } catch (e) {
        next( new AuthorizationError() );
    }
};
