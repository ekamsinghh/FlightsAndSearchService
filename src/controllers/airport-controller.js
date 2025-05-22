const {AirportService}=require('../services/index');

const airportService= new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message: 'Successfully created the airport',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        })
    }
}


const getById=async (req,res)=>{
    try{
        const airport= await airportService.get(req.params.id);
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

const getByName=async (req,res)=>{
    try{
        const airport= await airportService.getAirportByCityName(req.query.name);
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
    create,
    getById,getByName
}