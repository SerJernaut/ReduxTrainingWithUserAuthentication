import jwt                    from 'jsonwebtoken';
import util                   from 'util';

const sign = util.promisify( jwt.sign );

export const signAccessToken = async (req, res, next) => {
    try {
        const { user } = req;
        req.accessTokenValue = await sign( {
            userId: user.id,
            email: user.email,
        }, 'secret', {
            expiresIn: '20s',
        } );

        next();
    } catch (e) {
        next( e );
    }
};