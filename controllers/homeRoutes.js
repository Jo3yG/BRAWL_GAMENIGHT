const router = require('express').Router();
const { User, Character } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {
  try {
    const characterData = await Character.findAll({
      order: ['votes'],
    });
    const characters = characterData.map((character) => character.get({ plain: true }));
    if (req.session.user_id){
      const character = await Character.findOne({
        where: { user_id: req.session.user_id },
      });
      const isCharacter = character !== null;
      const user = await User.findByPk(req.session.user_id);
      const voted = user.voted;
      res.render('homepage', {
        characters,
        logged_in: req.session.logged_in,
        isCharacter,
        voted,
      });
    } else {
      res.render('homepage', {
        characters,
        logged_in: req.session.logged_in,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/character/:id', async (req, res) => {
  try {
    const characterData = await Character.findByPk(req.params.id);
    const character = characterData.get({ plain: true });
    res.render('profile', {
      ...character,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/newCharacter', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    const user = userData.get({ plain: true });
    res.render('newCharacter', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete('/withdraw', withAuth, async (req, res) => {
  console.log(req.session);
  try {
    const characterData = await Character.destroy({
      where: {
        user_id: req.session.user_id,
      },
    });
    if (characterData === 0) {
      res.status(404).json({ message: 'No Characters Found!!' });
      return;
    }
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});
module.exports = router;
























