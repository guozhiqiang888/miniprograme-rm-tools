import { Injectable } from "@angular/core";
import * as _ from 'lodash'
import { ActivatedRoute } from "@angular/router";
import { optionsDetials } from "../features/rmhome/prospectdetails"
@Injectable()
export class CommenService{
    constructor(
        private activeRoute:ActivatedRoute
    ){}
    currentSelected(list:object){
        let result = _.filter(list, 'checked');
        console.log('$$$'+JSON.stringify(result));
        return result;
    }
    getParamsValue(){
        console.log(this.activeRoute.snapshot.queryParams['value']);
        
        return this.activeRoute.snapshot.queryParams['value']
    }
    setLocStorage(key:string, value:string){
        localStorage.setItem(key,value);
    }
    getLocStorage(key:string){
        return localStorage.getItem(key);
    };
    prospectDetailsConfig(){
        return optionsDetials;
    }
}