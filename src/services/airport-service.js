const {AirportRepository}=require('../repository/index');

class AirportService{
    constructor(){
        this.airportrepository=new AirportRepository();
    }

    async getAirportByCityName(cityname){
        try{
            const airports=await this.airportrepository.getAirportByCityName(cityname);
            return airports;
        }
        catch(err){
            console.log("Some error happened in Service layer.");
            throw {err};
        }
    }
}

module.exports=AirportService;