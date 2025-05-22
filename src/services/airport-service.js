const {AirportRepository}=require('../repository/index');
const CrudService=require("./crud-service");

class AirportService extends CrudService{
    constructor(){
        const airportRepository=new AirportRepository();
        super(airportRepository);
        this.repo=airportRepository;
    }

    async getAirportByCityName(cityname){
        try{
            const airports=await this.repo.getAirportByCityName(cityname);
            return airports;
        }
        catch(err){
            console.log("Some error happened in Service layer.");
            throw {err};
        }
    }
}


// class AirportService{
//     constructor(){
//         this.airportrepository=new AirportRepository();
//     }

//     async getAirportByCityName(cityname){
//         try{
//             const airports=await this.airportrepository.getAirportByCityName(cityname);
//             return airports;
//         }
//         catch(err){
//             console.log("Some error happened in Service layer.");
//             throw {err};
//         }
//     }
// }

module.exports=AirportService;