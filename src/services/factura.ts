import axios from 'axios';
import { FacturayData } from '../entities/factura';

const BASE_URL = 'https://brisasmarinasbe.onrender.com';

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
