// ? Applications routes will live in here.
import secureRoute from "../middleware/secureRoute.js"
import express from "express"
import soundController from "../controllers/soundController.js"
import userController from "../controllers/userController.js"
import commentController from "../controllers/commentController.js"
import hashtagController from "../controllers/hashtagController.js"
const router = express.Router()

router.route("/all-sounds")
  .get(soundController.getAllSounds)
  .post(secureRoute.secureRoute, soundController.createSound)

router.route("/all-sounds/:soundId")
  .get(soundController.getSingleSound)
  .delete(secureRoute.secureRoute, soundController.removeSoundById)
  .put(secureRoute.secureRoute, soundController.updateSound)

router.route("/all-sounds/:soundId/comments")
  .post(secureRoute.secureRoute, commentController.createComment)

router.route("/all-users/profileList") 
  .get(userController.showAllUsers)

router.route("/oneUser/:singleUserId") 
  .get(userController.showSingleUser)


router.route("/register")
  .post(userController.register)

router.route("/login")
  .post(userController.login)  


router.route('/hashtags')
  .get(hashtagController.getHashtag)
  .post(hashtagController.createHashtag)

router.route("/all-soundsbyhashtag")
  .get(soundController.getSoundsByHashtag)


export default router

