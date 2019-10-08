import { Routes} from '@angular/router';
// import { rmhomeRouter } from './features/rmhome/rmhome.router';
import { RmhomeComponent } from './features/rmhome/rmhome.component';
import { ReportsComponent } from './features/reports/reports.component'
// import { reportRouter } from './features/reports/reports.router'
 
let appRoute : Routes=[
    {
        path:'',
        loadChildren:"./features/rmhome/rmhome.module#RmhomeModule"
    },
    {
        path:'reports',
        loadChildren:"./features/reports/reports.module#ReportsModule"
    }
]
export const appRouter: Routes = appRoute;