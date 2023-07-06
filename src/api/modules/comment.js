import axios from "axios";

//评论列表
const list = (params) => axios.get('/comment/recent', { params });

//回复评论
const reply = (data) => axios.post('/comment/reply', data);

//显示/隐藏评论
const toggle = (data) => axios.post('/comment/visible', data);

export default {
    list,
    reply,
    toggle,
}