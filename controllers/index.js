const router = require('express').Router();
const userRoutes = require('./userRoutes');
const newCharacter = require('./newCharacter');
router.use('/users', userRoutes);
router.use('/newCharacter', newCharacter)
module.exports = router

























