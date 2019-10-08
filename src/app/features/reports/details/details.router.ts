import { Routes} from '@angular/router';
import { DetailsComponent } from "./details.component"

let appRouter:Routes=[
    {
        path:'details',
        component: DetailsComponent,
    }
]

export const detailsRouter: Routes = appRouter;