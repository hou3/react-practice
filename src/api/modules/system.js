import axios from "axios";
//获取操作按钮列表
let list = (params) => axios.get('/operation/list', { params });
//remove
let remove = (id, params) => axios.delete(`/operation/${id}`, { params });
//更新
let edit = (id, data) => axios.put(`/operation/${id}`, data)
//新增
let create = (data) => axios.post('/operation', data)
export default {
    list,
    remove,
    edit,
    create,
}