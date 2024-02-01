export const ApiRoutes = {
    CREATE_REQUEST:{
        path:'/request',
        authenticate:false
    },
    LOGIN:{
        path:'/user/login',
        authenticate:false
    },
    GET_ALL_USERS:{
        path:'/user/all',
        authenticate:true
    },
    CREATE_USER:{
        path:'/user/create',
        authenticate:true
    },

}