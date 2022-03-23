const { default: Axios} = require("axios")
const {DOMAIN_CYBERBUG, ACCESSTOKEN} =require("../utils/constants/setting")
///DOMAIN_CYBERBUG    tr9ong file setting chính là chữ DOMAIn

export const cyberbugsService = {
    signinCyberBugs: (userLogin) =>{
        return Axios({
            url:`${DOMAIN_CYBERBUG}/users/signin`,
            method:'POST', 
            data: userLogin
        })
    }, 
    getALLProjectCategory: () =>{
        return Axios({
            url:`${DOMAIN_CYBERBUG}/ProjectCategory`,
            method: 'GET'
        })
    },

    createProject: (newProject) =>{
        return Axios({
            url:`${DOMAIN_CYBERBUG}/Project/createProject`,
            method:'POST',
            data:newProject,
        })
    },
    createProjectAuthorization: (newProject) =>{
        return Axios({
            url:`${DOMAIN_CYBERBUG}/Project/createProjectAuthorize`,
            method:'POST',
            data:newProject,
            headers:{'Authorization':'Bearer ' + localStorage.getItem(ACCESSTOKEN)} //JWT
        })
    },
    getListProject: ()=>{
        return Axios({
            url:`${DOMAIN_CYBERBUG}/Project/getAllProject`,
            method:'GET',
            headers:{'Authorization':'Bearer ' + localStorage.getItem(ACCESSTOKEN)}
            //Token yêu cầu từ backend chứng minh user đã đăng nhập  rồi
        })
    }
}

