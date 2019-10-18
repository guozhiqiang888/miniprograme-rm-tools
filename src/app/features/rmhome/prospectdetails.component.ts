import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { optionsDetials } from 'src/app/features/rmhome/prospectdetails';
import { RequestService } from 'src/app/commenService/request.service';
import { CommenService } from 'src/app/services/commen.service';
import { ProspectDetailsService } from './prospectdetails.service';
@Component({
  selector: 'prospectdetails',
  templateUrl: './prospectdetails.component.html',
  styleUrls: ['./prospectdetails.component.css']
})
export class ProspectDetailsComponent implements OnInit{
  public filtershow='';
  public btns =[];
  public hidden = 'hidden';
  public paramsValue:any;
  public pageParams:object;
  prospectDetails:any = [];
  constructor(
    public activeRoute:ActivatedRoute,
    private requestService:RequestService,
    public commenService:CommenService,
    private prospectDetailsService:ProspectDetailsService
  ){
    
  }
  ngOnInit(){
    this.paramsValue= optionsDetials; 
    let hash = window.location.hash;
    this.btns = this.prospectDetailsService.buttonsMapping(hash);
    this.commenService.currentSelected(this.paramsValue);
    this.getProspectDetail();
  }
  getProspectDetail(){
    const _this = this;
    this.requestService.requestGSP({
      requestName:"prospectDetail",
      method:"get",
      params:{
        tid:this.activeRoute.queryParams['value'].tid
      }
    }, function(data){
      try{
        // _this.prospectDetails = JSON.parse(data)['body'];
        _this.prospectDetails = _this.prospectDetailsService.responseMapping(JSON.parse(data['_body']));//['body']
      }catch(e){
        console.error(e);
      }
    });
  }

  toogleDownUp(e,isDefaultShow){
    console.log(e,isDefaultShow);
    if(isDefaultShow){
      this.paramsValue['lists'][e.target.id].titleImgRight = 'assets/imgs/icn_Chevron_down_thick.png'
    }else{
      this.paramsValue['lists'][e.target.id].titleImgRight = 'assets/imgs/icn_Chevron_up_thick.png'
    }
    this.paramsValue['lists'][e.target.id].defaultShow = !this.paramsValue['lists'][e.target.id].defaultShow
  }
  submit(){
    console.log('asdasdasd');
    
  } 
  buttonsEvent(index){
  }
}