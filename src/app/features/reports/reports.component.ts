import { Component, OnInit, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { reportConfig } from "./reports.config";
@Component({
    selector:'report',
    templateUrl: './reports.component.html',
    styleUrls:['./reports.component.css']
})

export class ReportsComponent implements OnInit{
    itemList:object;
    chartOption:object;
    config = reportConfig;
    constructor(
        private eleRef:ElementRef,
        private router:Router
        ){}
    ngOnInit(): void {
        let tootleWaper = this.eleRef.nativeElement.querySelector('.tootle-waper');
        let pipishown = this.eleRef.nativeElement.querySelector('.pipi-shown');
        tootleWaper.style.left=(pipishown.offsetWidth - tootleWaper.offsetWidth)/2 + 'px';
        this.itemList=[
            {
                title:"My performance",
                titleImg:"assets/imgs/icn_User_staff.png",
                iconStyle:"",
                titleImgRight:"assets/imgs/icn_chevron_right_thick.png"
            },
            {
                title:"RMs' performances",
                titleImg:"assets/imgs/icn_User_multiple.png",
                iconStyle:"",
                titleImgRight:"assets/imgs/icn_chevron_right_thick.png"
            },
            {
                title:"Prospects' activities",
                titleImg:"assets/imgs/icn_Account.png",
                iconStyle:"",
                titleImgRight:"assets/imgs/icn_chevron_right_thick.png"
            }
        ],
        this.chartOption = this.config.chartOption;
    }
    setTitle(){
        return 'asdasd'
    }
    itemRecord(id){
        let url = id==0? "/reports/myperformance": id == 1 ? "/reports/rmperformance" : id== 2 ? "/reports/activities" :'/reports';
        this.router.navigate([url]);
    }
}