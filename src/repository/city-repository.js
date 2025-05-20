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
    
    async deleteCity({ cityid }){
        try{
            await City.destroy({
                where:{
                    id: cityid
                }
            });
            return true;
        }
        catch(err){
            console.log("Some error happened in repository layer.");
            throw {err};
        }
    }

    async getCity({ cityid }){
        try{
            const city= await City.findByPk(cityid);//we could have used findAll or findOne with where clause but findByPk automatically goes for primary key
            return city;
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