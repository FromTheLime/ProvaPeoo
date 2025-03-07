import OrderRepository from "../repositories/OrderRepository.js";

const OrderController = {
  async getAll(req, res){
    try {
      const result = await OrderRepository.findAll();
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ error: 'Erro na busca de pedidos: ' + error })
    }
  },

  async create(req, res){
    const data = req.body
    try {
      await OrderRepository.create(data)
      return res.status(200).json({ message: 'Pedido criado com sucesso'  })
    } catch (err) {
      return res.status(500).json({ error: 'Erro na criação de pedidos: ' + err })
    }
  },

  async update(req, res){
    const data = req.body
    try {
      await OrderRepository.update(data)
      return res.status(200).json({ message: 'Pedido atualizado com sucesso'  })
    } catch (err) {
      return res.status(500).json({ error: 'Erro na atualização de pedidos: ' + err })
    }
  }
}

export default OrderController