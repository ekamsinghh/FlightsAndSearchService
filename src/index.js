const express=require("express");
const {PORT}=require("./config/serverConfig");
const CityRepository=require("./repository/city-repository");
const setupAndStartServer= async ()=>{
    const app= express();
    
    //setting middlewares
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));// this enables body parsing(no need to require the body parser as the newer version of express already includes it)

    app.listen(PORT,async ()=>{
        console.log(`Server is running on ${PORT}`);
        const repo= new CityRepository();
        
    });
};

setupAndStartServer();