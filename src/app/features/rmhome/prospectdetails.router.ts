import { Routes} from '@angular/router';
import { ProspectDetailsComponent } from './prospectdetails.component'
import { StatusComponent } from './features/status/status.component';
let appRoute : Routes=[
    {
        path:"",
        component:ProspectDetailsComponent
    },
    {
        path:"status",
        component:StatusComponent
    }
]
export const createRouter: Routes = appRoute;