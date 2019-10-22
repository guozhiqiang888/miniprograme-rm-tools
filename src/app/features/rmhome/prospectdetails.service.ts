import { Injectable } from '@angular/core';
import { optionsDetials } from './prospectdetails';
import { detailsListMapping } from './prospectDetailsMapping';
import { RequestService } from 'src/app/commenService/request.service';
import { appConfig } from 'src/app/app.config';
import * as _ from 'lodash'


@Injectable()
export class ProspectDetailsService{
    detailsList = optionsDetials;
    detailsListMapping = detailsListMapping;
    constructor(
        private requestService:RequestService
    ){
    }
    responseMapping(responseBody:object){
        let _this=this;
        let data = this.detailsList.lists;
        let regex = /^(((?:19|20)\d\d)-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]))$/;
        let internalInformation = responseBody['InternalInformation']
        _.forEach(data ,(item, index)=> {
            let mappingKey = this.mappingTitle(item['title'])
            _.forEach(item['list'], (child, childIndex)=> {
                if(child['mapping']!=''){
                    let responsekey = detailsListMapping[mappingKey][child['mapping']];
                    if(responsekey.includes('InternalInformation')){
                        let mappingKeyValue = detailsListMapping[mappingKey][child['mapping']].split('.')[1];
                        let mappingValue = internalInformation[mappingKeyValue]+"";
                        if(mappingValue == "true" || mappingValue == "false"){
                            child['value'] = appConfig[mappingValue+""];
                        }else{
                            child['value'] = regex.test(mappingValue) ? _this.dateTransformation(mappingValue) :mappingValue;
                        }
                    }else{
                        if(detailsListMapping[mappingKey][child['mapping']] !==''){
                            let mappingValue = responseBody[detailsListMapping[mappingKey][child['mapping']]];
                            child['value'] = regex.test(mappingValue) ? _this.dateTransformation(mappingValue) :mappingValue;;
                        }
                    }
                }
                else{
                    child['value'] = ""
                }
                child['itemIndex'] = childIndex;
            })
        }); 
        return data;
    } 
    dateTransformation(date){
        let result = date.split('-');
        result = result[1]+"/"+result[2]+"/"+result[0];
        return result;
    }
    responseMappingById(response:object, id){
        let data = this.detailsList.lists;
        _.forEach(data,(item,index)=>{
            if(item.listIndex == id){
                let itemList = item['list'];
                let mappingKey = this.mappingTitle(item['title'])
                _.forEach(itemList, (child,childIndex)=>{
                    let responsekey = detailsListMapping[mappingKey][child['mapping']];
                    console.log('responsekey:'+responsekey);
                    child['value'] = response[0][responsekey] === undefined? "" :response[0][responsekey];
                })
            }
        })
        console.log(this.detailsList)
    }
    mappingTitle(title:string){
        return title.includes('General')?'status': title.includes('Contact')?'contactInformation': title.includes('Internal')?'InternalInformation':title.includes('Key')?'keyPerson':'';
    }
    buttonsMapping(hash:string){
        if(hash.includes('details')){
            return this.detailsList['buttons']['detailsShow']
        }else if(hash.includes('create')){
            return this.detailsList['buttons']['create']
        }
    }
}