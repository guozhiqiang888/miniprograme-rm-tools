import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as homeActions from './home.actions'
import {HomeState, AppState } from '../../app.state'
import {LM,RM} from './home.models'
export const initState: HomeState = { homes : [{id:null, title: null}] }

export function reducer(state = initState, action: homeActions.All):HomeState{
    switch(action.type){
        case homeActions.LMAction:{
            return { homes: LM};
        }
        case homeActions.RMAction:{
            return { homes: RM};
        }
        default:{
            return { homes: LM};
        }
    }
}

export const getHomeState = createFeatureSelector<AppState,HomeState> ('homeState');

export const getHomes = createSelector(
    getHomeState,
    (state: HomeState) => state.homes
);

