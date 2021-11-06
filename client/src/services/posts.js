import api from './api-config';

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
};

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};

export const postPost = async (postData, softwareId) => {
  const resp = await api.post(`/softwares/${softwareId}/posts`, { post: postData });
  return resp.data;
};

export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData });
  return resp.data;
};

export const deletePost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp;
};

export const addSoftwareToPost = async (softwareId, id) => {
  const resp = await api.put(`/software/${softwareId}/posts/${id}`);
  return resp.data;
};
