const express = require("express");
const router = express.Router();
const axios = require("axios");
const { body, validationResult } = require("express-validator");

router.post("/getUserByUname",
    [
        body("username")
            .custom((value) => {
                if (value && value.includes("@")) {
                    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
                        throw new Error("Invalid email format");
                    }
                } else {
                    if (typeof value !== "string" || value.trim().length === 0) {
                        throw new Error("Username must be a non-empty string");
                    }
                }
                return true;
            })
            .withMessage("Invalid username: must be a valid email or non-empty string"),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        next();
    },
    async (req, res) => {
        try {
            const { username } = req.body;

            if (!username) {
                return res.status(404).json({
                    success: false,
                    errors: "Parameter Missing"
                });
            }
            const response = await axios.get(process.env.API_URL || "https://jsonplaceholder.typicode.com/users");
            const data = response.data.find(val => val.username === username || val.email === username) || null;

            if (data) {
                return res.status(200).json({
                    success: true,
                    result: data
                });
            } else {
                return res.status(200).json({
                    success: true,
                    errors: "User not found",
                    result: null
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                errors: error?.message || "Something went wrong"
            });
        }
    }
);

module.exports = router;
