import { Routes} from '@angular/router';
import { PerformaceComponent } from './performace.component';

let appRouter:Routes=[
    {
        path:'myperformance',
        component: PerformaceComponent,
    },
    {
        path:'rmperformance',
        component: PerformaceComponent,
    }
]

export const perfprmaceRouter: Routes = appRouter;