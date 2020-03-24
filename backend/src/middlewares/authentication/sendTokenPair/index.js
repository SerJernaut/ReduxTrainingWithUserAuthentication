export const sendTokenPair = (req, res) => {
    const { accessTokenValue, refreshTokenValue } = req;
    res.send( {
        tokenPair: {
            accessToken: accessTokenValue,
            refreshToken: refreshTokenValue,
        },
    } );
};