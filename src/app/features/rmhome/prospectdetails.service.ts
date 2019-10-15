import { Injectable } from '@angular/core';
import { optionsDetials } from './prospectdetails';
import { detailsListMapping } from './prospectDetailsMapping';
import { RequestService } from 'src/app/commenService/request.service';
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
        let data = this.detailsList.lists;
        let internalInformation = responseBody['InternalInformation']
        _.forEach(data ,(item, index)=> {
            let mappingKey = this.mappingTitle(item['title'])
            _.forEach(item['list'], (child, index)=> {
                if(child['mapping']!=''){
                    let responsekey = detailsListMapping[mappingKey][child['mapping']];
                    if(responsekey.includes('InternalInformation')){
                        let mappingKeyValue = detailsListMapping[mappingKey][child['mapping']].split('.')[1];
                        child['value'] = internalInformation[mappingKeyValue];
                    }else{
                        if(detailsListMapping[mappingKey][child['mapping']] !==''){
                            child['value'] = responseBody[detailsListMapping[mappingKey][child['mapping']]]
                        }
                    }
                }else{
                    child['value'] = "unk"
                }
            })
        }); 
        return data;
    } 
    mappingTitle(title:string){
        return title.includes('status')?'status': title.includes('Contact')?'contactInformation': title.includes('Internal')?'InternalInformation':title.includes('Key')?'keyPerson':'';
    }
}