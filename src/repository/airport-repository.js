const { City,Airport }=require('../models/index');
const CrudRepository=require('./crud-repository');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }

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
}

module.exports=AirportRepository;