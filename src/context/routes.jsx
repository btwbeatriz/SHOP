import { Home } from "../screens/home"
import { Icons } from "../components/Icon"
import { Router } from "../screens/routes"
import { Login } from "../screens/Login"
import { Register } from "../screens/Login/register"
import { Logoff } from "../screens/Login/logoff"
import { Store } from "../screens/Store"

export const ScreenArray = [
    {
        route: 'Home',
        label: 'Home',
        typeIcon: Icons.Feather,
        icon: 'home',
        component: Home,
        notification: 0
    },
    {
        route: 'Loja',
        label: 'Loja',
        typeIcon: Icons.Feather,
        icon: 'home',
        component: Store,
        notification: 0
    }
]

export const ScreenStack = [
    {
        route: 'Routes',
        label: 'Routes',
        component: Router
    }, {
        route: 'Register',
        label: 'Register',
        component: Register
    }, {
        route: 'Logoff',
        label: 'Logoff',
        component: Logoff
    }, {
        route: 'Login',
        label: 'Login',
        component: Login
    }
]
