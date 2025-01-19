import User from "../models/userModel.js";

export const getUsersForSideBar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;
        const users = await User.find({_id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(users);


        
    } catch (error) {
        console.log("error: error in getUsersForSideBar controller", error.message);
        res.send(500).json({ error: "internal server error" });
        
    }
}