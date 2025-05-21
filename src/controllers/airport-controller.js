const {AirportService}=require('../services/index');

const airportService= new AirportService();

const get=async (req,res)=>{
    try{
        const airport= await airportService.getAirportByCityName(req.params.cityname);
        return res.status(200).json({
            data:airport,
            success: true,
            message: 'Sucessfully fetched all airports',
            err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Failed to get the requested airports',
            err:error
        });
    }
};

module.exports={
    get
}