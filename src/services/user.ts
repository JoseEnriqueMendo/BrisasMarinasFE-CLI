import axios from 'axios';
import { UserDefault } from '../entities/User';

const BASE_URL = 'https://brisasmarinasbe.onrender.com';

const userService = {
  list: async (): Promise<UserDefault[] | null> => {
    try {
      const { data } = await axios.get(`${BASE_URL}/auth/all`);
      return data.data;
    } catch (error) {
      return null;
    }
  },

  count: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/auth/count`);
      return data.data;
    } catch (error) {
      return null;
    }
  },

  register: async (
    nameValue: string,
    emailValue: string,
    passwordValue: string,
    roleValue: string,
    phone: string,
    gender: string,
    dni: string,
    lastname: string
  ): Promise<UserDefault[] | null> => {
    const requestData = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      role: roleValue,
      phone,
      gender,
      dni,
      lastname,
    };

    try {
      const { data } = await axios.post(`${BASE_URL}/auth/register`, requestData);
      return data;
    } catch (error) {
      return null;
    }
  },

  login: async (emailValue: string, passwordValue: string, typeValue: string) => {
    const requestData = {
      email: emailValue,
      password: passwordValue,
      type: typeValue,
    };

    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, requestData);
      return data;
    } catch (error) {
      return null;
    }
  },

  verify: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/auth/verify`, {
        headers: { token: localStorage.token },
      });
      return data;
    } catch (error) {
      return false;
    }
  },

  getUser: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/auth/getUser`, {
        headers: { token: localStorage.token },
      });
      return data;
    } catch (error) {
      return null;
    }
  },

  delete: async (id: number) => {
    const requestData = { id };

    try {
      const { data } = await axios.delete(`${BASE_URL}/auth/delete`, { data: requestData });
      return data;
    } catch (error) {
      return null;
    }
  },
  edit: async (
    name: string,
    lastname: string,
    email: string,
    dni: string,
    phone: string,
    id: number
  ) => {
    try {
      const requestData = {
        name: name,
        lastname: lastname,
        email: email,
        dni: dni,
        phone: phone,
        id: id,
      };

      const { data } = await axios.post(`${BASE_URL}/auth/edit`, requestData);
      return data;
    } catch (error) {
      return null;
    }
  },
};

export default userService;
