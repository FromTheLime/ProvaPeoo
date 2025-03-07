import Equipament from "../models/Equipament.js";
import connection from "../config/DBConnect.js";
import DBInterface from "../config/DBInterface.js";

const EquipamentRepository = {
    async findAll() {
        const rows = await DBInterface.query("SELECT * FROM equipaments");
        return rows.map(row => new Equipament(row.id, row.name, row.description, row.category, row.status, row.daily_rate))
    },

    async create(equipament) {
        const result = await DBInterface.query("INSERT INTO equipaments (id, name, description, category, status, daily_rate) VALUES (?, ?, ?, ?, ?, ?)", [equipament.name, equipament.description, equipament.category, equipament.status, equipament.daily_rate])
        equipament.id = result.insertId
        return
    },

    async update(equipament) {
        const result = await DBInterface.query("UPDATE equipament set nome = (name) where id = (id) VALUES (?, ?) ", [equipament.name, equipament.id])
        return result
    }
} 

export default EquipamentRepository