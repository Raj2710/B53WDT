import Home from "../components/user/Home"
import Create from "../components/user/Create"
const AppRoutes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/create",
        element: <Create/>,
    },
]


export default AppRoutes