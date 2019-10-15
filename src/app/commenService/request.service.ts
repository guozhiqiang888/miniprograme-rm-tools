import  { Http } from '@angular/http';
import { appConfig } from '../../assets/settings/app.config'
import { apiServiice } from './api.service.config'
import { Injectable } from '@angular/core';

@Injectable()
export class RequestService{
    urlName:string;
    private config = appConfig;
    constructor(
        private http:Http,
    ){

    }
    requestGSP(options:object, fun: Function){
        if(!options['requestName']){
            console.error('requestName can not be null');
        }
        this.urlName = options['requestName'];
        let url =  this.config['domain'] + apiServiice[this.urlName]['url'];
        let params = options['params'];
        let header = options['header'];
        if(!options['method']){
            console.error(this.urlName + 'method can not be null');
        }
        if(options['method'] === 'post' || options['method'] === 'POST'){
            if(url!= undefined || url != ''){
                this.postHandler(url, fun, this.urlName, params, header);
            }else{
                console.error('your url sould not be null');
            }
        }else{
            this.getHandler(url,fun,this.urlName, params,);
        }
    }
    private postHandler(url:string, callfun:Function, apiName:string, params?:object, header?:object){
        if(!this.config.isDummy){
            this.http.post(url, null, params).subscribe(data=>{
                // if(data['status'] == 200){
                    this.succesHandler(data,callfun);
                    // this.succesHandler(data["_body"],callfun);
                // }else {
                //     this.errorHandler(apiName,data['error']['code']);
                // }
            })
        }else{
            var url:string = "assets" + this.config.dummyBase +""+ this.urlName+ ".json";
            this.getHandler(url, callfun, this.urlName, params);
        }
    }
    getHandler(url:string, callfun:Function, apiName:string, params?:object){
        if(this.config.isDummy){
            url = "assets"+  this.config.dummyBase +""+ this.urlName+ ".json";
        }
        this.http.get(url, params).subscribe(data=>{
            
            this.succesHandler(data,callfun);
            // if(data['status'] == 200){
            //     this.succesHandler(data["_body"],callfun);
            // }else{
            //     this.errorHandler(apiName,data['error']['code']);
            // }
        });
    }
    succesHandler(data,callFun:Function){
        callFun(data);
    }
    errorHandler(apiName:string,errorCode:string){
        let errorMsg = apiServiice[apiName][errorCode];
    }
}