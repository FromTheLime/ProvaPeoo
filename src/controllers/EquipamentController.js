import EquipamentRepository from "../repositories/EquipamentRepository.js";

const EquipamentController = {
  async getAll(req, res){
    try {
      const result = await EquipamentRepository.findAll();
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ error: 'Erro na busca de equipamentos: ' + error })
    }
  },

  async create(req, res){
    const data = req.body
    try {
      await EquipamentRepository.create(data)
      return res.status(200).json({ message: 'Equipamento criado com sucesso'  })
    } catch (err) {
      return res.status(500).json({ error: 'Erro na criação de equipamentos: ' + err })
    }
  },

  async update(req, res){
    const data = req.body
    try {
      await EquipamentRepository.update(data)
      return res.status(200).json({ message: 'Equipamento atualizado com sucesso'  })
    } catch (err) {
      return res.status(500).json({ error: 'Erro na atualização de equipamentos: ' + err })
    }
  }

}

export default EquipamentController