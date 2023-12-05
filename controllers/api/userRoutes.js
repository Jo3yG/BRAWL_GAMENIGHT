const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.post('/login', async (req, res) => {
  try{
     const userData = await User.findOne({
      where:{
        username: req.body.username
      }
     });
     if(!userData){
      res
      .status(400)
      .json({message:'No User Potato Head!!!!!'});
      return;
     }
     const validPassword = await userData.checkPassword(req.body.password);
     if (!validPassword){
      res
      .status(400)
      .json({message:'No User Potato Head!!!!!'});
      return;
     }
      req.session.save(() => {
          req.session.user_id = userData.id;
          //req.session.username = userData.username;
          req.session.loggedIn = true;
          res.json({ user: userData, message: 'YAY Logged In Potato Head!!'});
      });
    }
  catch(err) {
      res.status(400).json(err);
  }
  });

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
