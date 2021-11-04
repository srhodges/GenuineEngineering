import api from './api-config';

export const getAllSoftware = async () => {
  const resp = await api.get('/software');
  return resp.data;
};
