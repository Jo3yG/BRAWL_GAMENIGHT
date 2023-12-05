const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const newCharacter = require('./newCharacter.js');

router.use('/users', userRoutes);
router.use('/newCharacter', newCharacter)

module.exports = router
