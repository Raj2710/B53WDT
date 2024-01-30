const ApiRoutes = {
    SIGN_IN:{
        path:'/user/login',
        authenticate:false
    },
    SIGN_UP:{
        path:'/user/createUser',
        authenticate:false
    },
    GET_USERS:{
        path:'/user',
        authenticate:true
    }
}

export default ApiRoutes