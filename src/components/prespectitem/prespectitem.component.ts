import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommenService } from 'src/app/services/commen.service';

@Component({
    selector: 'prespectitem',
    templateUrl:'./prespectitem.component.html',
    styleUrls:['./prespectitem.component.css']
})
export class PrespectitemComponent implements OnInit{
    @Input()
    prospectItem:object;
    generalInformation: object;
    prospectInformation:object;
    referrerInformation:object;
   constructor(private router:Router,
      private commenService:CommenService
    ){} 
   ngOnInit(){
        console.log(this.prospectItem);
        this.generalInformation = this.prospectItem['GeneralInformation'];
        this.prospectInformation = this.prospectItem['ProspectInformation'];
        this.referrerInformation = this.prospectItem['ReferrerInformation'];
   }
   itemPresepecHandler(){
       let options=this.commenService.prospectDetailsConfig();
       let value= JSON.stringify(options);
        this.router.navigate(['/prospectdetails'], {queryParams:{params:value}});
        console.log('prespect item handler');
   }
}