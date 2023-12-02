const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const newCharacter = require('./newCharacter.js');

router.use('/user', userRoutes);
router.use('/newCharacter', newCharacter)

module.exports = router
