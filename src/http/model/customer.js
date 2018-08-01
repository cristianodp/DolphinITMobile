export default class Customer {

    constructor(){
        this.name = null;
        this.type = "PERSON";
        this.description = null;
        this.phone = null;
        this.email = null;
        this.avatar = null;
        this.ownerId = null;
    }

    toJson(){
        return JSON.stringify(this)
    }
} 