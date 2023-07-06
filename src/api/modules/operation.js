import axios from 'axios';

// 添加操作按钮
let insert = (formData) => axios.post('/operation', formData);

// 更新操作按钮
let update = (id, formData) => axios.put(`/operation/${id}`, formData);

// 删除操作按钮
let remove = (id, params) => axios.delete(`/operation/${id}`, { params });

// 所有操作按钮
let list = (params) => axios.get('/operation/list', { params });

export default {
    list,
    insert,
    update,
    remove,
}
