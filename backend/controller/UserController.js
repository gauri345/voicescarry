
const User = require("../model/userModel");

exports.login = async function (request, response) {
    const email = request.body.email;
    const password = request.body.password;

    if (email === '' || password === '') {
        response.status(400).json({
            status: "failed",
            message: 'email or password is empty.',
        });
    } else {
        const existingUser = await User.findOne({email: email});

        if (!existingUser) {
            response.status(400).json({
                status: "failed",
                message: 'provided email does not exists.',
            });
        } else {
            if(existingUser.password === password){
                response.sendStatus(200);
            }
            else{
                response.status(400).json({
                    status:'failed',
                    message:'password doesnot match'

                })
            }

        }

    }
};
