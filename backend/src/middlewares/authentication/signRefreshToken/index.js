import jwt                    from 'jsonwebtoken';
import util                   from 'util';

const sign = util.promisify( jwt.sign );

export const signRefreshToken = async (req, res, next) => {
    try {
        const { user } = req;
        req.refreshTokenValue = await sign( {
            userId: user.id,
        }, 'secret', {
            expiresIn: '30d',
        } );
        next();

    } catch (e) {
        next( e );
    }
};