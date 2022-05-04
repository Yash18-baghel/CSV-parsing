const Collection_A = require('../models/userDetails')

exports.addDetail = async (req, res) => {
    const user = new Collection_A(req.body)
    user.save().then((e) => {
        console.log('user created',e)
        res.json({ success: true, msg: "product created successfully" })
    }).catch((err)=>{
        console.log(err)
    })
}