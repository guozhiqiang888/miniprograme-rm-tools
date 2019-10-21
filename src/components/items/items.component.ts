import { Component , Input, OnInit} from '@angular/core'
import { Router } from '@angular/router';
import { CommenService } from '../../app/services/commen.service'

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
    day:string;
    duedate:object
    constructor(private router:Router,
        private commenService:CommenService
        ){}
    ngOnInit(){
        const now = new Date();
        // this.duedate ={
        //     "year": 2019,
        //     "month": 10,
        //     "day": 2
        //} //new NgbDate(now.getFullYear(), now.getMonth()+1, now.getDate());
        let date = new Date();
        this.day = date.getFullYear()+"-"+(date.getMonth()+1) + "-" +date.getDate();
        console.log(this.params);
    }
    dateChange(){
        console.log(this.day);
        
    }
    edits(item){
        let itemParams =this.params;
        let editParams=[];
        switch(item.itemIndex){
            case 0:
                this.commenService.setLocStorage('type', 'RMS');
            break;
            case 1:
                this.commenService.setLocStorage('type', 'STATUS');
            break;
            case 4:
                this.commenService.setLocStorage('type', 'PRIORITY');
                break;
        }
        this.router.navigate(['/prospectdetails/status'],{queryParams:{value:JSON.stringify(item)}});
    }
    inputEvent(itemName,event){
        if('Comments' == itemName){
            this.inputLength= event.currentTarget.value.length;
        }
    }

}