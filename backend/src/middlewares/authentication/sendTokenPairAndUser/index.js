export const sendTokenPairAndUser =  (req, res) => {
    const { accessTokenValue, refreshTokenValue, preparedUser } = req;
    res.send( {
        user: preparedUser,
        tokenPair: {
            accessToken: accessTokenValue,
            refreshToken: refreshTokenValue,
        },
    } );
};