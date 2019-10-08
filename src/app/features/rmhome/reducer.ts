import { ActionReducerMap, ActionReducer, MetaReducer } from "@ngrx/store";
import { AppState } from "src/app/app.state";

import * as homeReducer from './home.reducer'
import { environment } from "src/environments/environment";

export const reducers: ActionReducerMap<AppState> ={
    homeState: homeReducer.reducer
}

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState>{
    return function(state: AppState, action:any){
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action)
    }
}

export const metaReducers:MetaReducer<AppState>[] = !environment.production
?[logger]
:[]; 