const User = require("../models/User");
const jwt= require("jsonwebtoken");
const bcrypt= require("bcrypt");

// Create token

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
  };

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({success:false, message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token});
  } catch (error) {
    res.status(500).json({success:false, message: "Server Error" });
  }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userExists = await User.findOne({ email });
  
      if (!userExists) {
        return res.send({success:false,message:'Wrong credentials'});
      }
      const isMatch =await bcrypt.compare(password, userExists.password);
      if(!isMatch){
        return res.send({success:false,message:'Wrong password'});
      }
      const token = createToken(userExists._id);
      return res.send({success:true,message:'Login Successfully',token});
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

module.exports = {
  registerUser,
  loginUser
};
