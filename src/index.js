const express=require("express");
const {PORT}=require("./config/serverConfig");
const CityRepository=require("./repository/city-repository");
const ApiRoutes=require("./routes/index");
const sequelize=require('sequelize');
const db=require("./models/index");

const setupAndStartServer= async ()=>{
    const app= express();
    
    //setting middlewares
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));// this enables body parsing(no need to require the body parser as the newer version of express already includes it)

    app.use('/api',ApiRoutes);

    app.listen(PORT,async ()=>{
        console.log(`Server is running on ${PORT}`);
        if(process.env.SYN_DB){
            db.sequelize.sync({alter:true});// whenever there is a need to sync the db just go to the .env file and add the SYN_DB=true and after syncing just remove it if not needed anymore
        }
        
    });
};

setupAndStartServer();