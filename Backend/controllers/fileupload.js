const path = require("path")
const util = require('util')
const csv = require('csv-parser')
const fs = require('fs');
const { url } = require("inspector");
const result = [];
const Collection_B = require("../models/csv");



exports.fileupload = async (req, res) => {


    try {
        const file = req.files.file;
        const filename = file.name;
        const size = file.size;
        const extension = path.extname(filename)

        const md5 = file.md5;

        const URL = "./uploads/" + md5 + extension

        await util.promisify(file.mv)(URL)

        fs.createReadStream(URL)
            .pipe(csv({}))
            .on('data', (data) => result.push(data))
            .on('end', () => {
                console.log(result)
            })



        result.map(async (item) => {
            console.log(item)
            const CSVdata = new Collection_B(item)
            await CSVdata.save().then((e) => {
                console.log('user created', e)
                console.warn({ success: true, msg: "data saved successfully" })
            }).catch((err) => {
                console.log(err)
            })
        })
        res.json({ success: true, data: req.body, msg: 'file uploaded successfully' });

    }
    catch (err) {
        console.log(err)
    }
}