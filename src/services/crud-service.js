class CrudService{
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try{
            const result = await this.repository.create(data);
            return result;
        }
        catch(err){
            console.log("Some error happened in service layer.");
            throw {err};
        }
    }

    async destroy(id){
        try{
            await this.repository.destroy(id);
            return true;
        }
        catch(err){
            console.log("Some error happened in service layer.");
            throw {err};
        }
    }

    async get(id){
        try{
            const result = await this.repository.get(id);
            return result;
        }
        catch(err){
            console.log("Some error happened in service layer.");
            throw {err};
        }
    }

    async getAll(){
        try{
            const result = await this.repository.getAll();
            return result;
        }
        catch(err){
            console.log("Some error happened in service layer.");
            throw {err};
        }
    }

    async update(id,data){
        try{
            const result = await this.repository.update(id,data);
            return result;
        }
        catch(err){
            console.log("Some error happened in service layer.");
            throw {err};
        }
    }
}

module.exports= CrudService;