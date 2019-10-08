import { Routes } from '@angular/router'
import { CreateprospectComponent } from './features/createprospect/createprospect.component'
import { statusRouter } from './features/status/status.router'
import { RmhomeComponent } from './rmhome.component'
export const rmhomeRouter: Routes=[
    {
        path:'',
        component: RmhomeComponent,
    }
    
]