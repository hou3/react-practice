import axios from 'axios';

// 所有菜单
let loadAll = (params) => axios.get('/menu/all', { params });

// 加载下一级菜单
const submenu = (params) => axios.get('/menu/sub', { params });

// 添加菜单
const insert = (formData) => axios.post('/menu', formData);

// 更新菜单
const update = (id, formData) => axios.put(`/menu/${id}`, formData);

// 删除菜单
const remove = (id, params) => axios.delete(`/menu/${id}`, { params });

// 设置菜单icon
const set_icon = (id, formData) => axios.put(`/menu/icon/${id}`, formData);

// 菜单页面--添加操作按钮
const create_operation = (formData) => axios.post('/menu/operation', formData);

// 菜单页面--编辑操作按钮
const edit_operation = (id, formData) => axios.put(`/menu/operation/${id}`, formData);

// 菜单页面--删除操作按钮
const remove_operation = (id, params) => axios.delete(`/menu/operation/${id}`, { params });

export default {
    loadAll,
    submenu,
    insert,
    update,
    remove,
    set_icon,
    create_operation,
    edit_operation,
    remove_operation,
}
