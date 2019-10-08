import { Routes} from '@angular/router';
import { ActivitiesComponent } from './activities.component'
import { DetailsComponent } from '../details/details.component';
 
let appRouter:Routes=[
    {
        path:'activities',
        component: ActivitiesComponent,
    },
    
    {
        path:'details',
        component: DetailsComponent,
    }
]

export const activitiesRouter: Routes = appRouter;