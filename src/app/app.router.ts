import { Routes} from '@angular/router';
 
let appRoute : Routes=[

    {
        path:'reports',
        loadChildren:"./features/reports/reports.module#ReportsModule"
    },
    {
        path:'prospectdetails',
        loadChildren:"./features/rmhome/prospectdetails.module#ProspectDetailsModule"
    }
]
export const appRouter: Routes = appRoute;