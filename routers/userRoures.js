import express from 'express'
import { deleteUser, getsingleUser, getUser, postUser, updatedUser } from '../controller/userController.js'

const router = express.Router()

router
    .route("/postuser")
    .post(postUser)
router
    .route("/getuser")
    .get(getUser)
router
    .route("/getuser/:id")
    .get(getsingleUser)
    .patch(updatedUser)
    .delete(deleteUser)

export default router