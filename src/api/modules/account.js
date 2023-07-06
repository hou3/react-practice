import axios from "axios";
// 编辑个人资料

let info = (data) => axios.post('/account/info', data)
export default {
    info,
}