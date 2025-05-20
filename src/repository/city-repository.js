const {City} = require("../models/index");

class CityRepository{
    async createCity({ name }){
        try{
            const city= await City.create({name});
            return city;
        }
        catch(err){
            throw {err};
        }
    }
    
    async deleteCity({ cityid }){
        try{
            const city= await City.destroy({
                where:{
                    id: cityid
                }
            });
            return city;
        }
        catch(err){
            throw {err};
        }
    }
}

module.exports=CityRepository;