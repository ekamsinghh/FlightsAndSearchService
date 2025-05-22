const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ){
        return res.status(400).json({//* 400=> signifies Bad Request
            message:'All the required fields are not present',
            success:false,
            err:{}
        });
    }
    next();
}

module.exports={
    validateCreateFlight
}