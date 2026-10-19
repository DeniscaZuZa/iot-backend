const express = require("express")
const router = express.Router()
const TemperaturaController = require("../controllers/temperaturaController")
router.post("/temperatura, temperaturaController.receberTemperatura")
module.export = router
