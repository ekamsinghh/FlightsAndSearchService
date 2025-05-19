const express=require("express");

const {PORT}=require("./config/serverConfig");

const setupAndStartServer= async ()=>{
    const app= express();
    
    //setting middlewares
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));// this enables body parsing(no need to require the body parser as the newer version of express already includes it)

    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`);
    });
};

setupAndStartServer();