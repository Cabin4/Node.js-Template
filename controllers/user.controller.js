const express = require("express");
const router = express.Router();
const { body, check, param, query } = require("express-validator");

const users = require("../services/user.service");

router.get("/v1/", users.fetchAll);

module.exports = router;
