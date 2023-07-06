import axios from 'axios';

// 角色列表
let list = (params) => axios.get('/role/list', { params })

// 添加角色
let insert = (data) => axios.post('/role', data);

// 删除角色
let remove = (id, params) => axios.delete(`/role/${id}`, { params });

// 更新角色
let edit = (id, data) => axios.put(`/role/${id}`, data);

// 根据角色id，获取路由权限
let route = (params) => axios.get('/role/route/', { params });

// 设置路由权限
let set_route = (data) => axios.post('/role/route', data);

// 根据角色id，获取菜单权限 + 操作权限
let menu = (params) => axios.get('/role/menu/', { params });

// 设置菜单权限
let set_menu = (data) => axios.post('/role/menu', data);

export default {
    list,
    remove,
    edit,
    insert,
    route,
    set_route,
    menu,
    set_menu,
}
