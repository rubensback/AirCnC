const express = require("express"),
 multer = require('multer'),
 uploadConfig = require('./config/upload'),
 SessionController = require("./controllers/SessionController"),
 SpotController = require("./controllers/SpotController"),
 DashboardController = require("./controllers/DashboardController"),
 BookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.get('/dashboard', DashboardController.show);



module.exports = routes;