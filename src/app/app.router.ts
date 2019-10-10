import { Routes} from '@angular/router';
 
let appRoute : Routes=[
    
    {
        path:'reports',
        loadChildren:"./features/reports/reports.module#ReportsModule"
    },
    {
        path:'prospectdetails',
        loadChildren:"./features/rmhome/createprospect.module#CreateprospectModule"
    }
]
export const appRouter: Routes = appRoute;