const express = require('express');
const { getAllUser } = require('../controllers/user-controller');

const userRouter = express.Router();

userRouter.get("/", getAllUser);

export default userRouter;