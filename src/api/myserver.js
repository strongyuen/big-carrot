import axios from 'axios'

export default {

    // 上传文件换取url
    uploadAny(params) {
        return axios.post('/newserver/file/upload', params,{
            headers:{
                'Content-Type':'multipart/form-data;charset=utf-8'
            }
        })
    },

    
}