import { Routes} from '@angular/router';
import { StatusComponent } from './status.component'
let appRoute : Routes=[

    {
        path:"status",
        component:StatusComponent
    }
]
export const statusRouter: Routes = appRoute;