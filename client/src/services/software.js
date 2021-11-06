import api from './api-config';

export const getAllSoftware = async () => {
  const resp = await api.get('/softwares');
  return resp.data;
};
