class Order{
    constructor (id, equipament_id, user_name, pick_up_date, drop_off_date, final_price, status) {
        this._id = id;
        this._equipament_id = equipament_id;
        this._user_name = user_name;
        this._pick_up_date = pick_up_date;
        this._drop_off_date = drop_off_date;
        this._final_price = final_price;
        this._status = status;
    };

    setEquipament_id(equipament_id) {
        this._equipament_id = equipament_id;
    };

    setUser_name(user_name){
        this._user_name = user_name;
    };

    setPick_up_date(pick_up_date){
        this._pick_up_date = pick_up_date;
    };

    setDrop_off_date(drop_off_date){
        this._drop_off_date = drop_off_date;
    };

    setFinal_price(final_price){
        this._final_price = final_price;
    };

    setStatus(status){
        this._status = status;
    };

    getId() {
        return this._id;
    };
    
    getCategory_id(){
        return this._category_id;
    };

    getUser_name() {
        return this._user_name;
    };

    getPick_up_date() {
        return this._pick_up_date;
    };

    getDrop_off_date(){
        return this._drop_off_date;
    };

    getFinal_price(){
        return this._final_price;
    };

    getStatus(){
        return this._status;
    };

};

export default Order