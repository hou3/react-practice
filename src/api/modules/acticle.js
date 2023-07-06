import axios from "axios";
//删除指定文章的id
let remove = (data) => axios.post('/article/remove', data);
//审核文章
let audit = (data) => axios.post('/article/audit', data);
//添加新的文章
let release = (data) => axios.post('/article/release', data);
//给指定id文章标记标签
let tag = (data) => axios.post('/article/tag', data);
//编辑指定id文章
let edit = (data) => axios.post('/article/edit', data);
//获取指定id的文章详情
let detail = (params) => axios.get('/article/detail', {params});
//获取文章列表
let list = (params) => axios.get('/article/list', {params});



export default{
    remove,
    audit,
    list,
    release,
    edit,
    tag,
    detail,
}