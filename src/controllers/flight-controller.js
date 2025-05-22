const {FlightService}=require("../services/index");

const flightService=new FlightService();

const create=async(req,res)=>{
    try{
        const flight = await flightService.createFlight(req.body);
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