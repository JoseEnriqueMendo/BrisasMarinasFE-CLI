import axios from 'axios';

const BASE_URL = 'https://brisasmarinasbe.onrender.com';

const pedidoService = {
  create: async (
    cantidad: number,
    subtotal: number,
    id_platillo: number,
    id_factura: number
  ) => {
    const requestData = {
      cantidad: cantidad,
      subtotal: subtotal,
      id_platillo: id_platillo,
      id_factura: id_factura,
    };

    try {
      const { data } = await axios.post(`${BASE_URL}/pedido/create`, requestData);
      return data;
    } catch (error) {
      return null;
    }
  },

  listPorUsuario: async (id: number) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/pedido/selectPedidoPorUsuario/${id}`);
      return data.data;
    } catch (error) {
      return null;
    }
  },
};

export default pedidoService;
