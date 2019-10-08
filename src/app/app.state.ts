import { home } from './features/rmhome/home.models'

export interface AppState{
    homeState:HomeState;
}
export interface HomeState{
    homes: home[];
}