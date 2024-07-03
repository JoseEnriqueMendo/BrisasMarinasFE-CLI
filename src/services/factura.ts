import axios from 'axios';

const BASE_URL = 'https://t6ty0vc3zj.execute-api.us-east-1.amazonaws.com';

const facturaService = {
  create: async (total: number, fecha: string, id_usuario: number) => {
    const requestData = { total, fecha, id_usuario };

    try {
      const { data } = await axios.post(`${BASE_URL}/factura/create`, requestData);
      return data;
    } catch (error) {
      return null;
    }
  },
};

export default facturaService;
