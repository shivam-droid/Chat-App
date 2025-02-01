import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import createJWTtoken from "../utils/createJWTtoken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "username already exists" });
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    //profile pic
    const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashpassword,
      gender,
      profilepic: gender === "male" ? boyprofilepic : girlprofilepic,
    });

    if (newUser) {
      //create and set token
      createJWTtoken(newUser._id, res);
      await newUser.save();
      res
        .status(200)
        .json({
          _id: newUser._id,
          fullName: newUser.fullname,
          username: newUser.username,
          profilePic: newUser.profilepic,
        });
    } else {
      res.status(400).json({ error: "Data is not valid" });
    }
  } catch (error) {
    console.log("error: error in signup controller", error.message);
    res.send(500).json({ error: "internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // Create and set token
        createJWTtoken(user._id, res);
        return res
          .status(200)
          .json({
            _id: newUser._id,
            fullName: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilepic,
          });
      }
    }

    res.status(400).json({ error: "Username or password is incorrect" });
  } catch (error) {
    console.log("error: error in login controller", error.message);
    res.send(500).json({ error: "internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    //clearing cookie
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "user is logged out successfully" });
  } catch (error) {
    console.log("error: error in logout controller", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
