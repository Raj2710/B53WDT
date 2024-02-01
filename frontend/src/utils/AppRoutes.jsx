import Home from "../components/Home"
import Login from "../components/Login"
import Dashboard from "../components/admin/Dashboard"
import Request from "../components/request/Request"
import RequestById from "../components/request/RequestById"
import CreateUser from "../components/admin/CreateUser"
import User from "../components/admin/User"
import SuperAdminGuard from "./SuperAdminGuard"
const AppRoutes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path:"/request",
        element:<Request/>
    },
    {
        path:"/request/:id",
        element:<RequestById/>
    },
    {
        path:'/admin/dashboard',
        element:<Dashboard/>
    },
    {
        path:'/admin/create',
        element:<SuperAdminGuard><CreateUser/></SuperAdminGuard>
    },
    {
        path:'/admin/user',
        element:<SuperAdminGuard><User/></SuperAdminGuard>
    }
]


export default AppRoutes