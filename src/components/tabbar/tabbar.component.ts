import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommenService } from 'src/app/services/commen.service';

@Component({
    selector: 'tabbar',
    templateUrl:'./tabbar.component.html',
    styleUrls:['./tabbar.component.css']
})
export class TabbarComponent implements OnInit{
    public tabbarOptions:{};
   constructor(private router:Router,
      private commenService:CommenService
    ){} 
   ngOnInit(){
        this.tabbarOptions=[
            {
                text:'Task',
                currentChecked:'',
                img:'assets/imgs/tabbar/icn_Tasks.png',
                imgAction:'assets/imgs/tabbar/icn_Tasks_active.png'
            },
            {
                text:'Reports',
                currentChecked:'',
                img:'assets/imgs/tabbar/icn_Reports.png',
                imgAction:'assets/imgs/tabbar/icn_Reports_active.png'
            },
            {
                text:'Market News',
                currentChecked:'',
                img:'assets/imgs/tabbar/icn_Newspaper.png',
                imgAction:'assets/imgs/tabbar/icn_Newspaper_active.png'
            }
        ]
        let hash = window.location.hash;
        this.checked(hash == '#/'? 0 : hash == '#/reports'? 1: hash == '#/news' ? 2: 0);
   }
   itemPresepecHandler(){
       let options=this.commenService.prospectDetailsConfig();
       let value= JSON.stringify(options);
        this.router.navigate(['/prospectdetails'], {queryParams:{params:value}});
        console.log('prespect item handler');
   }
   checked(id:any){
       let url = '/';
       switch(id){
        case 0 :
            url = '/'
            this.tabbarOptions[id]['currentChecked']= 'checked-style';
            this.tabbarOptions[1]['currentChecked']= '';
            this.tabbarOptions[2]['currentChecked']= '';
            break;
        case 1:
            url = '/reports'
            this.tabbarOptions[0]['currentChecked']= '';
            this.tabbarOptions[id]['currentChecked']= 'checked-style';
            this.tabbarOptions[2]['currentChecked']= '';
            break;
        case 2:
            url = '/news'
            this.tabbarOptions[0]['currentChecked']= '';
            this.tabbarOptions[1]['currentChecked']= '';
            this.tabbarOptions[id]['currentChecked']= 'checked-style';
            break;
       }
       this.router.navigate([url]);
   }
}