const User = require("../model/userModel");

exports.getAllUsers = async function (req, res) {

    try {
        const allUsers = await User.find();
        res
            .status(201)
            .json(
                {
                    status: "success",
                    message: `Total [${allUsers.length}] users received`,
                    data: allUsers
                }
            )
    } catch (error) {
        res
            .status(404)
            .json({
                status: "error",
                message: `Error occurred while fetching the users from database [${error}}].`
            });
    }
};
