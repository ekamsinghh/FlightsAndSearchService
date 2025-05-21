const {City , Airport}=require('../models/index');

class AirportRepository{
    async getAirportByCityName(cityname){
        try{
            const city=await City.findOne({
                where: {
                    name: cityname
                }
            });
            const airports=await city.getAirports();
            return airports;
        }
        catch(err){
            console.log("Some error happened in repository layer.");
            throw {err};
        }
    }

    async createAirport(airportarray){
        try{
            const airport= await Airport.bulkCreate(airportarray);
            return airport;
        }
        catch(err){
            console.log("Some error happened in repository layer.");
            throw {err};
        }
    }
}

module.exports=AirportRepository;