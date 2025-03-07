import app from "./src/app.js";
import dotenv from 'dotenv';
import EquipamentRouter from "./src/routers/EqipamentRouter.js";
import OrderRouter from "./src/routers/OrderRouter.js";

dotenv.config();

app.use('/pedidos', OrderRouter);
app.use('/equipamentos', EquipamentRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log('Servidor conectado com sucesso')
});
