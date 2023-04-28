import axios from 'axios';

const BaseUrl = window.config.BaseUrl;

export const registUser = async (username: string, password: string) => {
  return await axios.post(BaseUrl + '/user/register', {
    username,
    password,
  });
};
