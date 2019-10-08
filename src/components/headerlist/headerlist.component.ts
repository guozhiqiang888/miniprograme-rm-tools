import { Component, OnInit, Input } from '@angular/core';
import { filterData } from '../../assets/dummy/filter'
@Component({
    selector: 'headerlist',
    templateUrl:'./headerlist.component.html',
    styleUrls:['./headerlist.component.css']
})
export class HeaderlistComponent implements OnInit{
    @Input()
    initData:any
    constructor(
    ){

    }
    ngOnInit(){
        
    }
}