import { Routes} from '@angular/router';
import { ErrorComponent } from './error.component';
let appRouter:Routes=[
    {
        path:'',
        component: ErrorComponent,
    }
]

export const errorRouter: Routes = appRouter;