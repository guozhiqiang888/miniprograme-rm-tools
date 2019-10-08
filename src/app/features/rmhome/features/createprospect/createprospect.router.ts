import { Routes} from '@angular/router';
import { CreateprospectComponent } from './createprospect.component'
let appRoute : Routes=[

    {
        path:"createprospect",
        component:CreateprospectComponent
    },
    
    {
        path:"prospectdetails",
        component:CreateprospectComponent
    }
]
export const createRouter: Routes = appRoute;