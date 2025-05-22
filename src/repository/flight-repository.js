const {Flights} = require("../models/index");
const {Op}= require("sequelize");
class FlightRepository{

    #createFilter(data){//* private function
        const filter={};
        if(data.arrivalAirpotId){
            filter.arrivalAirpotId=data.arrivalAirpotId;
        }
        if(data.departureAirpotId){
            filter.departureAirpotId=data.departureAirpotId;
        }
        if(data.minPrice){
            filter.price = {
                [Op.gte]: data.minPrice
            }
        }
        if(data.maxPrice){
            filter.price = {
                ...filter.price,//* here if we do not destructure it will only apply the last filter applicable.....means if both minprice and maxprice is there in query param, since we assign maxprice to the same key it will override the minprice filter
                [Op.lte]: data.maxPrice
            }
        }
        console.log(filter);
        return filter;
    }

    async createFlight(data){
        try{
            const flight=await Flights.create(data);
            return flight;
        }
        catch(error){
            console.log("Some error happened in Repository Layer");
            throw{error};
        }
    }

    async getFlight(flightid){
        try{
            const flight=await Flights.findByPk(flightid);
            return flight;
        }
        catch(error){
            console.log("Some error happened in Repository Layer");
            throw{error};
        }
    }

    async getAllFlights(filter){
        try{
            const filterObject= this.#createFilter(filter);
            const flights=await Flights.findAll({
                where:filterObject
            });
            return flights;
        }
        catch(error){
            console.log("Some error happened in Repository Layer");
            throw{error};
        }
    }
}

module.exports= FlightRepository;