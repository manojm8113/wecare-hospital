// Verification Middleware
const jwt = require('jsonwebtoken');
const verifyPass = (req, res, next) => {
  console.log('jsonwebpass', req.headers.pass);
  const authHeader = req.headers.pass;

  if (authHeader) {
    jwt.verify(authHeader, process.env.JWTSEKEY, (err, user) => {
      if (err) {
        return res.status(403).json("Pass is not valid");
      }
      console.log("*********", user);
      if (user.id === req.params.id) {
        next();
      } else {
        return res.status(403).json("Your ID and pass do not match");
      }
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

module.exports = verifyPass;