const express = require("express");
const router = express.Router();

const Contact = require("../models/contact");

router.post("/", async (req, res) => {

    try {

        const contact = new Contact(req.body);

        await contact.save();

        res.status(201).json({
            success: true,
            message: "Message saved successfully!"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

module.exports = router;
