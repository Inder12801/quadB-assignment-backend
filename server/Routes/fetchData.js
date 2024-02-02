const express = require('express');
const router = express.Router();
const Data = require('../models/dataSchema');

router.get("/data", async (req, res) => {

    try{
        const data = await Data.find();
        return res.status(200).json(data);
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).json({error: "Internal server error"});
    }
}
);

module.exports = router;