import { Component, Output,EventEmitter, Input, ElementRef, OnInit } from '@angular/core'

import { filterData } from '../../assets/dummy/filter'
@Component({
    selector: 'filter',
    templateUrl:'./filter.component.html',
    styleUrls:['./filter.component.css']
})
export class FilterComponent implements OnInit{
    @Output()
    filterHiden = new EventEmitter<any>();
    @Input()
    filterState:any;
    public hid='animation-hid'
    public headerlist = filterData
    elContent:any;
    constructor(private elRef:ElementRef){
    }
    ngOnInit(){}
    closeFilter(){
        let _this= this;
        this.filterState = 'animation-hid'
        this.elContent=this.elRef.nativeElement.querySelector('.content');
        this.elContent.addEventListener('webkitAnimationEnd',function(){
            if('animation-hid' === _this.filterState && _this.elContent){
                _this.elContent.setAttribute('class','hidden');
            }
        }, false);
        this.filterHiden.emit(this.filterState);
    }
}