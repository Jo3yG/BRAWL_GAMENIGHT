const router = require('express').Router();
const {User, Character} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res) => {
    try{
        const newCharacter = await Character.create({
            charName: req.body.charName ,
            description: req.body.description,
            regMoves: req.body.reqMoves,
            finalSmash: req.body.finalSmash,
            gameSeries: req.body.gameSeries,
            firstApp: req.body.firstApp,
            user_id: req.session.user_id,
        });
        res.status(200).json(newCharacter);
    }catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router;
