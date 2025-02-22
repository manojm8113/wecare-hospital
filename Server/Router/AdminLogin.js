const router = require('express').Router();
const admin = require('../Model/AdminSchema');
const JWT = require('jsonwebtoken');
const Crypto = require('crypto-js');
const verifyPass = require('../Verification/passverication');

// Login Route
router.post('/login', async (req, res) => {
  console.log("reqbody datass", req.body);
  try {
    const findadmin = await admin.findOne({ Email: req.body.Email });
    if (!findadmin) {
      return res.status(401).json('Invalid Email');
    }
    console.log("email", findadmin);

    const decryptepassword = Crypto.AES.decrypt(findadmin.Password, process.env.crypto);
    const originalPassword = decryptepassword.toString(Crypto.enc.Utf8);
    console.log("original password is", originalPassword);

    if (req.body.Password !== originalPassword) {
      return res.status(401).json('Invalid Password');
    }

    const pass = JWT.sign({ id: findadmin._id }, process.env.JWTSEKEY, { expiresIn: '1d' });
    console.log("Pass", pass);

    res.status(200).json({ pass, id: findadmin._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Data Route
router.get('/Getdatas/:id', async (req, res) => {
  console.log("body datas", req.headers.pass);
  try {
    const data = await admin.findById(req.params.id); // Ensure you are querying the correct model
    if (!data) {
      return res.status(404).json('Data not found');
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

module.exports = router;
