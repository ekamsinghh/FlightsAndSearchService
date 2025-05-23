const {CityService}= require("../services/index");

const cityService= new CityService();

const create=async (req,res)=>{
    try{
        const cityarray= await cityService.createCity(req.body);
        return res.status(201).json({
            data:cityarray,
            success: true,
            message: 'Sucessfully Added all the cities',
            err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Failed to create a city',
            err:error
        });
    }
};

// DELETE--> /city/:id => request param will have the city id
const destroy=async (req,res)=>{
    try{
        const response= await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success: true,
            message: 'Sucessfully deleted a city',
            err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Failed to delete the city',
            err:error
        });
    }
};

//GET--> /city/:id
const get=async (req,res)=>{
    try{
        const city= await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success: true,
            message: 'Sucessfully fetched a city',
            err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Failed to get the requested city',
            err:error
        });
    }
};

//PATCH--> /city/:id
const update=async (req,res)=>{
    try{
        const city= await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data:city,
            success: true,
            message: 'Sucessfully updated a city',
            err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Failed to update the city',
            err:error
        });
    }
};

//get--> /city ==> might contains some query params
const getAll=async (req,res)=>{
    try{
        const cities= await cityService.getAll(req.query);
        return res.status(200).json({
            data:cities,
            success: true,
            message: 'Sucessfully fetched all the cities',
            err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: 'Failed to get the cities',
            err:error
        });
    }
};

module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}