const {City} = require("../models/index");

class CityRepository{
    async createCity({ name }){// taking input like this is basically destructuring the object....it helps us to directly access the name without doing obj.name.
        try{
            const city= await City.create({name});
            return city;
        }
        catch(err){
            console.log("Some error happened in repository layer.");
            throw {err};
        }
    }
    
    async deleteCity(cityid){
        try{
            const response=await City.destroy({
                where:{
                    id: cityid
                }
            });
            return response;
        }
        catch(err){
            console.log("Some error happened in repository layer.");
            throw {err};
        }
    }

    async getCity(cityid){
        try{
            const response=await City.findOne({
                where:{
                    id: cityid
                }
            });
            return response;
        }
        catch(err){
            console.log("Some error happened in repository layer.");
            throw {err};
        }
    }

    async updateCity(cityid,data){
        try{
            const city= await City.update(data,{
                where:{
                    id:cityid
                }
            })
            return city;
        }
        catch(err){
            console.log("Some error happened in repository layer.");
            throw {err};
        }
    }
}

module.exports=CityRepository;