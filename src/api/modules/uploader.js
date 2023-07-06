import axios from "axios";
let remove = (data) => axios.post('/upload/remove', data);


export default{
    remove,
}