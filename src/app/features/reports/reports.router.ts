import { Routes} from '@angular/router';
import { ReportsComponent } from './reports.component';
import { PerformaceComponent } from './performace/performace.component';

let appRouter:Routes=[
    {
        path:'',
        component: ReportsComponent
    }
]

export const reportRouter: Routes = appRouter;