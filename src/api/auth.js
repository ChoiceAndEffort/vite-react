import ajax from '../request/index';
export const loginApi = (data) => ajax.post('/api/account/login', data);
export const registerApi = (data) => ajax.post('/api/account/register', data);
