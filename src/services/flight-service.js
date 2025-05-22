const {FlightRepository,AirplaneRepository}=require('../repository/index');
const {compareTime}=require("../utils/helper");
class FlightService{
    constructor(){
        this.airplanerepository=new AirplaneRepository();
        this.flightrepository=new FlightRepository();
    }

    async createFlight(data){
        try{
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw new Error("Departure time should be less than arrival time.");
            }
            const airplane = await this.airplanerepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({
                ...data ,
                totalSeats : airplane.capacity
            })// ...data destructures the data and using ',' you can more key:value pairs alongside
            return flight;
        }
        catch(error){
            console.log("Some error happened in service layer.");
            throw{error};
        }
    }

    async getFlightData(){
        // todo
    }

    async getAllFlightData(data){
        try{
            const flights = await this.flightrepository.getAllFlights(data);
            return flights;
        }
        catch(error){
            console.log("Some error happened in service layer.");
            throw{error};
        }
    }
}

module.exports = FlightService;