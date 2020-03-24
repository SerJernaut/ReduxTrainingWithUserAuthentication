import {signRefreshToken} from "../middlewares/authentication/signRefreshToken";

import express from 'express';
import {UserController} from '../controllers';
import {createValidationMW} from '../middlewares/validation';
import {LOGIN_USER_SCHEMA, SING_UP_USER_SCHEMA} from '../utils/validation/user.js';
import {loginByEmailAndPassword} from "../middlewares/authentication/loginByEmailAndPassword";
import {updateOldOrCreateNewRefreshToken} from "../middlewares/authentication/updateOldOrCreateNewRefreshToken";
import {signAccessToken} from "../middlewares/authentication/signAccessToken";
import {prepareUser} from "../middlewares/authentication/prepareUser";
import {sendTokenPairAndUser} from "../middlewares/authentication/sendTokenPairAndUser";
import {verifyRefreshToken} from "../middlewares/authentication/verifyRefreshToken";
import {findRefreshToken} from "../middlewares/authentication/findRefreshToken";
import {getUserByRefreshToken} from "../middlewares/authentication/getUserByRefreshToken";
import {updateRefreshToken} from "../middlewares/authentication/updateRefreshToken";
import {sendTokenPair} from "../middlewares/authentication/sendTokenPair";
import {removeRefreshToken} from "../middlewares/authentication/removeRefreshToken";

const authenticationRoute = express.Router();

authenticationRoute.post('/sign_in',
    createValidationMW(LOGIN_USER_SCHEMA),
    loginByEmailAndPassword,
    signRefreshToken,
    updateOldOrCreateNewRefreshToken,
    signAccessToken,
    prepareUser,
    sendTokenPairAndUser
);

authenticationRoute.post('/sign_up',
    createValidationMW(SING_UP_USER_SCHEMA),
    UserController.createUser,
    signRefreshToken,
    updateOldOrCreateNewRefreshToken,
    signAccessToken,
    prepareUser,
    sendTokenPairAndUser
);

authenticationRoute.post('/refresh_sign_in',
    verifyRefreshToken,
    findRefreshToken,
    getUserByRefreshToken,
    signRefreshToken,
    updateRefreshToken,
    signAccessToken,
    prepareUser,
    sendTokenPairAndUser
);


authenticationRoute.post('/refresh_tokens',
    verifyRefreshToken,
    findRefreshToken,
    getUserByRefreshToken,
    signRefreshToken,
    updateRefreshToken,
    signAccessToken,
    sendTokenPair
);



export default authenticationRoute;
