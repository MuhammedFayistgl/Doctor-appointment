const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  
  try {
   
    const token = req.cookies.token
    console.log("req.cookies.token",req.cookies.token);
    // const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log('err',err);
        return res.status(401).send({
          message: "Auth failed token err",
          success: false,
        })

      } else {
        console.log('middlwer pass');
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};
