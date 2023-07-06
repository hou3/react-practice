import axios from "axios";
//获取所有路由权限
let all = (params) => axios.get('/route/all', {params});
//删除路由
let remove = (route_id, params) => axios.delete(`/route/${route_id}`, {params});
//更新路由
let edit = (route_id, data) => axios.put(`/route/${route_id}`, data);
//新增路由
let insert = (data) => axios.post('/route', data)
//获取子级路由
let sub = (params) => axios.get('/route/sub', { params })

// //根据角色权限获取路由id
// let route =(params) =>axios.get('/role/route/',{params}) 
export default {
    all,
    remove,
    edit,
    insert,
    sub,
}
