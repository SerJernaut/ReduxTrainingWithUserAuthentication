export const prepareUser = (req, res, next) =>{
    const {user} = req;
    const preparedUser = user.get();
    delete preparedUser.password;
    req.preparedUser = preparedUser;
    next();
}