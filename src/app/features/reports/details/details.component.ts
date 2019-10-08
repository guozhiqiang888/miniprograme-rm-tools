import { Component, OnInit, ElementRef } from "@angular/core";
import * as _ from 'lodash'

@Component({
    selector:'details-wp',
    templateUrl: './details.component.html',
    styleUrls:['./details.component.css']
})

export class DetailsComponent implements OnInit{
   
    constructor(private eleRef:ElementRef){}
    ngOnInit(): void {
        
    }
    exprotAction(){
        console.log('export');
        
    }
}