const router = require('express').Router();
const {User, Character} = require('../../models');
const withAuth = require('../../utils/auth');
router.post('/', withAuth, async (req,res) => {
    try{
        const newCharacter = await Character.create({
         ...req.body,
            votes:0,
            user_id: req.session.user_id,
        });
        res.status(200).json(newCharacter);
    }catch (err) {
        res.status(400).json(err);
      }
});
router.post('/:id/votes', async (req, res) => {
    const user = await User.findByPk(req.session.user_id);
    if (user.voted) {
      return res.status(400).send('No more than 1 vote.');
    }
    const character = await Character.findByPk(req.params.id);
    await character.increment('votes');
    await User.update(
      { voted: true },
      { where: { id: req.session.user_id } }
    );
    res.send('response');
  });
module.exports = router;



























