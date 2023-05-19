import { Home } from "../screens/home"
import { Icons } from "../components/Icon"
import { Router } from "../screens/routes"
import { Login } from "../screens/Login/index"
import { Register } from "../screens/Login/register"
import { Logoff } from "../screens/Login/logoff"

export const ScreenArray = [
    {
        router: 'Home', 
        label: 'Home', 
        typeIcon: Icons.Feather, 
        icon:'home', 
        component: Home, 
        notification: 0
    }
]

export const ScreenStack = [
    {   route:'Route',
        component:Router
    },{
        route:'Login',
        component:Login
    },{
        route:'Logoff',
        component:Logoff
    },{
        route:'Register',
        component:Register
    }
]