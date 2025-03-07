import express from 'express';
import EquipamentController from '../controllers/EquipamentController.js';

const EquipamentRouter = express.Router();

EquipamentRouter.get('/', EquipamentController.getAll);
EquipamentRouter.post('/', EquipamentController.create)

export default EquipamentRouter