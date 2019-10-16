import { Component , Input, OnInit} from '@angular/core'
import { Router } from '@angular/router';
import { editsConfig} from '../../assets/dummy/edits'
import { CommenService } from '../../app/services/commen.service'
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
    selector: 'items',
    templateUrl:'./items.component.html',
    styleUrls:['./items.component.css']
})
export class ItemsComponent implements OnInit{
    @Input()
    params:any ;
    @Input()
    pageParams:object;
    inputLength:number = 0;
    inputEnd:number = 100;
    public imgSrc = '';
    duedate:object
    constructor(private router:Router,
        private commenService:CommenService
        ){}
    ngOnInit(){
        const now = new Date();
        this.duedate ={
            "year": 2019,
            "month": 10,
            "day": 2
        } //new NgbDate(now.getFullYear(), now.getMonth()+1, now.getDate());
        console.log(this.params);
    }
    edits(index, type){
        let eventType = type.split('-')[1];
        let itemParams =this.params[index];
        let editParams=[];
        console.log('edits params' + JSON.stringify(itemParams));
        switch(index){
            case 0:
                editParams = editsConfig.RMS;
                this.commenService.setLocStorage('type', 'RM');
            break;
            case 1:
                editParams = editsConfig.STATUS;
                this.commenService.setLocStorage('type', 'STATUS');
            break;
            case 3:
                editParams = editsConfig.PRIORITY;
                this.commenService.setLocStorage('type', 'PRIORITY');
                break;
        }
        this.router.navigate(['/prospectdetails/status'],{queryParams:{value:JSON.stringify(editParams)}});
    }
    inputEvent(itemName,event){
        if('Comments' == itemName){
            this.inputLength= event.currentTarget.value.length;
        }
    }

}