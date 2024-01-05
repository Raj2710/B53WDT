import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import Create from '../components/Create'
import Edit from '../components/Edit'
import { Navigate } from 'react-router-dom'
const AppRoutes = [
    {
        path:'/',
        exact:true,
        element:<Home/>
    },
    {
        path:'/dashboard',
        exact:true,
        element:<Dashboard/>
    },
    {
        path:'/create',
        exact:true,
        element:<Create/>
    },
    {
        path:'/edit/:id',
        exact:true,
        element:<Edit/>
    },
    {
        path:'*',
        exact:false,
        element:<Navigate to="/"/>
    }
]

export default AppRoutes