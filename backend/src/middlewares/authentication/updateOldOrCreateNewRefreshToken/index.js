import {MAX_USER_DEVICES} from "../../../constants";
import {BadRequestError} from "../../../utils/errors";

export const updateOldOrCreateNewRefreshToken = async (req, res, next) => {
    try {
      const {user, refreshTokenValue} = req;
      const userRefreshTokensCount = await user.countRefreshTokens();
      let newToken;
      if (userRefreshTokensCount >= MAX_USER_DEVICES) {
          const [refreshToken] = await user.getRefreshTokens();
          newToken = await refreshToken.update (
              {
                  value: refreshTokenValue
              }
          )
      }
      else {
          newToken = await user.createRefreshToken (
              {
                  value: refreshTokenValue
              }
          )

      }
        if (newToken){
            return next();
        }

        next(new BadRequestError());
    } catch (e) {
        next( e );
    }
};