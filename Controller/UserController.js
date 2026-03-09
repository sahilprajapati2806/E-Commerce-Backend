const User = require("../Model/USerModel");
const bcrypt = require("bcrypt");


exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

 
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }


    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      message: "User Created Successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "Login successful",
      user,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "User deleted successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getalluser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getone = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateuser = async (req, res) => {
  try {
    const { name, mobile, address, city, pincode } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { 
        $set: {
          name: name,
          address: { 
            mobile: mobile, 
            address: address, 
            city: city, 
            pincode: pincode 
          }
        }
      },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};