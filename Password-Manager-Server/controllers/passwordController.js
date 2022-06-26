const Password = require('../models/password')
const User = require('../models/user')
const mongoose = require('mongoose')

const addPassword = async (req, res) => {
    try{
            const id = req.body.id;
            const user = await User.findById({
                _id: id
            })
            if(!user){
                return res
                        .status(404)
                        .json(
                        {
                            success: false,
                            message : "User not found"
                        }
                )
            }

            const passwordId = await Password.create(req.body);
            user.storedPasswords.push(passwordId._id);
            await user.save();
            return res.status(200).json({
                success: true,
                message: "Added successfully"
            })
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message : err.message
        });
}
}

const getDetailsById = async (id) => {
        try{
            

            return details
        }
        catch(err){
            return res.status(500).json({
                success: false,
                message : err.message
            });
    }
}

const getAllPassword = async (req, res) => {
    try{

        const id = req.params.id;
        //console.log("ENterd, id: ",id)
        const user = await User.findOne({
                _id: mongoose.Types.ObjectId(id)
        })
        if(!user){
            return res
                    .status(404)
                    .json(
                    {
                        success: false,
                        message : "User not found"
                    }
            )
        }

        var data = []
        let i = 0;
        const ids = user.storedPasswords
        //console.log(ids,ids.length)
        for(i=0;i<ids.length;i+=1){
            //console.log(ids[i])
            var details = await Password.findOne({
                _id:ids[i]
            })
            data[i] = details
            
        }

        //console.log(data)
        return res.status(200).json({
            sucess: true,
            data: data
        })
    }
    catch(err){
        return res.status(500).json({
            success: false,
            message : err.message
        });
    }
}

module.exports = {
    addPassword,
    getAllPassword
}