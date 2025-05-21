const {CityRepository} = require("../repository/index");

class CityService{
    constructor(){
        this.cityrepository= new CityRepository();
    }

    async createCity(cityarray){
        try{
            const city = await this.cityrepository.createCity(cityarray);
            return city;
        }
        catch(err){
            console.log("Some error happened in service layer.");
            throw {err};
        }
    }

    async deleteCity(cityid){
        try{
            const response = await this.cityrepository.deleteCity(cityid);
            return response;
        }
        catch(err){
            console.log("Some error happened in service layer.");
            throw {err};
        }
    }

    async updateCity(cityid,data){
        try{
            const city = await this.cityrepository.updateCity(cityid,data);
            return city;
        }
        catch(err){
            console.log("Some error happened in service layer.");
            throw {err};
        }
    }

    async getCity(cityid){
        try{
            const city= await this.cityrepository.getCity(cityid);
            return city;
        }
        catch(err){
            console.log("Some error happened in service layer.");
            throw {err};
        }
    }
    
    async getAll(filter){
        try{
            const cities= await this.cityrepository.getAll({name:filter.name});
            return cities;
        }
        catch(err){
            console.log("Some error happened in service layer.");
            throw {err};
        }
    }
}

module.exports= CityService;