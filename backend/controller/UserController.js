
const User = require("../model/userModel");

exports.login = async function (request, response) {
    const email = request.body.email;
    const password = request.body.password;

    if (email === '' || password === '') {
        response.status(400).json({
            status: "failed",
            message: 'Email or password is empty.',
        });
    } else {
        const existingUser = await User.findOne({email: email});

        if (!existingUser) {
            response.status(401).json({
                status: "failed",
                message: 'Provided email does not exists.',
            });
        } else {
            if(existingUser.password === password){
                response.status(200).json({token: 'some_token'});
            }
            else{
                response.status(400).json({
                    status:'failed',
                    message:'Password does not match'

                })
            }

        }

    }
};
