const express=require("express");
const CityController=require("../../controllers/city-controller");
const AirportController=require("../../controllers/airport-controller");
const FlightController=require("../../controllers/flight-controller");
const router=express.Router();


const { FlightMiddlewares } = require('../../middlewares/index');
const { validateCreateFlight } = require("../../middlewares/flight-middlewares");


router.post('/city',CityController.create);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.delete('/city/:id',CityController.destroy);

router.get('/airport/:id',AirportController.getById);
router.get('/airport',AirportController.getByName);
router.post('/airport',AirportController.create);


router.get('/flights',FlightController.getAll);
router.post('/flights',validateCreateFlight,FlightController.create);
module.exports=router;