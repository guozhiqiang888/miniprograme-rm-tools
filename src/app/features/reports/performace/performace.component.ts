import { Component, OnInit, ElementRef } from "@angular/core";
import * as _ from 'lodash'
import { reportConfig } from "../reports.config";
@Component({
    selector:'performace',
    templateUrl: './performace.component.html',
    styleUrls:['./performace.component.css']
})

export class PerformaceComponent implements OnInit{
    itemList:object;
    chartOption:object;
    periods:boolean;
    // pageConfig = performaceConfig;
    pageConfig = reportConfig;
    constructor(private eleRef:ElementRef){}
    ngOnInit(): void {
        let tootleWaper = this.eleRef.nativeElement.querySelector('.tootle-waper');
        let pipishown = this.eleRef.nativeElement.querySelector('.pipi-shown');
        tootleWaper.style.left=(pipishown.offsetWidth - tootleWaper.offsetWidth)/2 + 'px';
        this.itemList=[
            {
                title:"Aall & Zyleman Co.",
                subText:"Account opened",
                date:"19 Jul"
            },
            {
                title:"Aall & Zyleman Co.",
                subText:"Account opened",
                date:"19 Jul"
            },
            {
                title:"Aall & Zyleman Co.",
                subText:"Account opened",
                date:"19 Jul"
            }
        ],

        this.chartOption = this.pageConfig.chartOption;
    }
    setTitle(){
        return 'asdasd'
    }
    navigationFilter(id){
        let _this=this;
        _.forEach(this.pageConfig.navigation, function(value, index){
            if(id == index){
                value.style = "border-color";
                _this.periods = value.period;
            }else{
                value.style="";
            }
        });
    }
    exprotAction(){
        this.pageConfig.shade ={
            flag:'export',
            style: ''
        } ;
    }
    sortAction(){
        this.pageConfig.shade = {
            flag:'sort',
            style: ''
        }
    }
    shadeClose(){
        this.pageConfig.shade = {
            flag:'sort',
            style:'hidden'
        }
    }
    sortBy(){
        console.log('change');
        this.shadeClose();
    }
}