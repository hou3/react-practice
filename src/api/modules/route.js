import axios from 'axios';

// 加载下一级路由
const sub = (params) => axios.get('/route/sub', { params });

// 添加路由
const insert = (formData) => axios.post('/route', formData);

// 更新路由
const update = (id, formData) => axios.put(`/route/${id}`, formData);

// 删除路由
const remove = (id, params) => axios.delete(`/route/${id}`, { params });

// 所有路由
let loadAll = (params) => axios.get('/route/all', { params });

export default {
    loadAll,
    sub,
    insert,
    update,
    remove,
}
