const {FlightService}=require("../services/index");

const flightService=new FlightService();

const create=async(req,res)=>{
    try{
        let flightRequestData={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Sucessfully created a flight',
            err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Failed to create a flight',
            err:error
        });
    }
}

const getAll=async(req,res)=>{
    try{
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message: 'Sucessfully fetched the flights',
            err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Failed to fetch the flights',
            err:error
        });
    }

    
}

module.exports={
    create,
    getAll
}