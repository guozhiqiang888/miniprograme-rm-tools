import { Action } from "@ngrx/store";
export const LMAction = 'LM'
export const RMAction = 'RM'
export class lmAction implements Action{
    readonly type = LMAction;
}
export class RmAction implements Action{
    readonly type = RMAction;
}

export type All = lmAction | RmAction;