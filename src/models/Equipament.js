class Equipament{
    constructor (id, name, description, category, status, daily_rate) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._category = category;
        this._status = status;
        this._daily_rate = daily_rate;
    };

    setName(name) {
        this._name = name;
    };

    setDescription(description){
        this._description = description;
    };

    setCategory(category){
        this._category = category;
    };

    setStatus(status){
        this._status = status;
    };

    setDaily_rate(daily_rate){
        this._daily_rate = daily_rate;
    };

    getId() {
        return this._id;
    };
    
    getName() {
        return this._name;
    };

    getDescription() {
        return this._email;
    };

    getCategory(){
        return this._category;
    };

    getStatus(){
        return this._status;
    };

    getDaily_rate(){
        return this._daily_rate;
    };

};

export default Equipament