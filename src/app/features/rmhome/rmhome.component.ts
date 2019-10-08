import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';
import { RequestService } from "../../commenService/request.service"
import { Store, select } from '@ngrx/store';
import { HomeState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { home } from './home.models';
import * as homeReducer from './home.reducer'
declare let wx:any;
@Component({
  selector: 'rmhome',
  templateUrl: './rmhome.component.html',
  styleUrls: ['./rmhome.component.css']
})
export class RmhomeComponent implements OnInit{
  public filtershow='';
  public hidden = 'hidden';
  homes: Observable<home[]>
  searchFocus='width';
  prospectLists:any = [];
  constructor(
      private router:Router,
      private requestService:RequestService,
      private store:Store<HomeState>
    ){
      // this.homes = store.select(homeReducer.getHomes);
    }
    ngOnInit(){
      // this.store.dispatch(new homeActions.lmAction());
      // this.store.pipe(
      //   select(homeReducer.getHomes)
      // ).subscribe((state) =>{
      //   console.log(state);
        
      // })
      this.getProspectList();
    }

    getProspectList(){
      const _this = this;
      this.requestService.requestGSP({
        requestName:"prospectList",
        method:"post",
        params:{}
      }, function(data){
        try{
          _this.prospectLists = JSON.parse(data)['body']['ProspectList'];
        }catch(e){
          console.error(e);
        }
        console.log(_this.prospectLists);
      });
    }
    onInput(){
      this.searchFocus = "";
    }
    inputBlur(){
      this.searchFocus = 'width';
    }
    filterFunction(){
      this.hidden = ''
      this.filtershow = 'animation-show'
    }
    child(e){
      this.filtershow = e;
    }
    add(){
      let options={
        prespectName:'',
        lists:[
         {
             title:"RM status",
             titleImg:'assets/imgs/icn_User.png',
             titleImgRight:'',
             defaultShow: true,
             list:[
                  {name:'Assign RM', iconStyle:'icon-right',
                  imgSrc:'assets/imgs/icn_chevron_right_thick.png',value:'', placeholder:'Select RM'},
                  {name: 'Status',  iconStyle:'icon-right',
                  imgSrc:'assets/imgs/icn_chevron_right_thick.png',value: '', placeholder:'Select status'},
                  {name: 'Tracking end date', iconStyle:'list-icon',
                  imgSrc:'assets/imgs/icn_Calendar.png', value: '', placeholder:'Select date'},
                  {name: 'Proiority', iconStyle:'icon-right',
                  imgSrc:'assets/imgs/icn_chevron_right_thick.png', value: '', placeholder:'Select Priority'}
             ]
          },
          {
             title:"Contact information",
             iconStyle: "icon-down",
             titleImg:'assets/imgs/icn_User_staff.png',
             titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
             defaultShow: false,
             list:[
                 {name:'Contact chinese name', value:'', placeholder:'Enter here'},
                 {name: 'Contact english name', value: '', placeholder:'Enter here'},
                 {name: 'Contact personal title', value: '', placeholder:'Enter here'},
                 {name: 'Primary contact number', value: '', placeholder:'Enter here'},
                 {name: 'Secondary contact number', value: '', placeholder:'Enter here'},
                 {name: 'Primary enail address', value: '', placeholder:'Enter here'},
                 {name: 'Secondary enail address', value: '', placeholder:'Enter here'},
                 {name: 'Sales revenus.Net worth(RMB)', value: '', placeholder:'Enter here'},
                 {name: 'Number of employees', value: '', placeholder:'Enter here'},
                 {name: 'Country',iconStyle:'icon-down',imgSrc:'assets/imgs/icn_Chevron_down_thick.png', value: '', placeholder:'Select country'}
             ]
           },{
             title: 'Referrer information',
             iconStyle: "icon-down",
             titleImg:'assets/imgs/icn_User_multiple.png',
             titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
             defaultShow: false,
             list:[]
           },{
             title: 'Internal information',
             iconStyle: "icon-down",
             titleImg:'assets/imgs/icn_Account.png',
             titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
             defaultShow: false,
             list:[]
           },{
             title: 'Activity',
             iconStyle: "icon-down",
             titleImg:'assets/imgs/icn_Contact_chat.png',
             titleImgRight:'assets/imgs/icn_Chevron_down_thick.png',
             defaultShow: false,
             list:[
              ]
           }
        ]
    }
      let value= JSON.stringify(options);
      this.router.navigate(['/createprospect'], {queryParams:{params:value}});
    }
}