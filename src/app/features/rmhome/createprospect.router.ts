import { Routes} from '@angular/router';
import { CreateprospectComponent } from './createprospect.component'
import { StatusComponent } from './features/status/status.component';
let appRoute : Routes=[

    {
        path:"createprospect",
        component:CreateprospectComponent
    },
    
    {
        path:"",
        component:CreateprospectComponent
    },
    {
        path:"status",
        component:StatusComponent
    }
]
export const createRouter: Routes = appRoute;