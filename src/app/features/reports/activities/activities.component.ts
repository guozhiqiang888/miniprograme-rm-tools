import { Component, OnInit, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import * as _ from 'lodash'
import { reportConfig } from "../reports.config";

@Component({
    selector:'activities',
    templateUrl: './activities.component.html',
    styleUrls:['./activities.component.css']
})

export class ActivitiesComponent implements OnInit{
    itemList:object;
    chartOption:object;
    periods:boolean;
    pageConfig = reportConfig;
    constructor(private eleRef:ElementRef,
        private router:Router){}
    ngOnInit(): void {
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
    itemRecord(){
        console.log('itemRecord');
        this.router.navigate(['/reports/details']);
    }

    navigationFilter(id){
        let _this=this;
        _.forEach(this.pageConfig.navigation, function(value, index){
            if(id == index){
                value.style = "border-color";
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
            flag:'',
            style:'hidden'
        }
    }
    sortBy(){
        console.log('change');
        this.shadeClose();
    }
}