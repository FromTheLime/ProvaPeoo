import Order from "../models/Order.js";
import DBInterface from "../config/DBInterface.js";

const OrderRepository = {
    async findAll() {
        const rows = await DBInterface.query("SELECT * FROM orders");
        return rows.map(row => new Order(row.id, row.equipament_id, row.user_name, row.pick_up_date, row.drop_off_date, row.final_price, row.status))
    },

    async create(order) {
        const result = await DBInterface.query("INSERT INTO orders (id, equipament_id, user_name, pick_up_date, drop_off_date, final_price, status) VALUES (?, ?, ?, ?, ?, ?, ?)", [order.id, order.equipament_id, order.user_name, order.pick_up_date, order.drop_off_date, order.final_price, order.status])
        order.id = result.insertId
        return
    },

    async update(order) {
        const result = await DBInterface.query("UPDATE order set status = (status) where id = (id) VALUES (?, ?) ", [order.status, order.id])
        return result
    }
} 

export default OrderRepository