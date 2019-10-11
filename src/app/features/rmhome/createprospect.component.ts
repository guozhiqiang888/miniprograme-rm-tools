import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { optionsDetials } from 'src/assets/dummy/prospectdetails';
import { RequestService } from 'src/app/commenService/request.service';
import { CommenService } from 'src/app/services/commen.service';
@Component({
  selector: 'createprospect',
  templateUrl: './createprospect.component.html',
  styleUrls: ['./createprospect.component.css']
})
export class CreateprospectComponent implements OnInit{
  public filtershow='';
  public btns =[];
  public hidden = 'hidden';
  public paramsValue:any;
  public pageParams:object;
  prospectDetails:any = [];
  constructor(
    public activeRoute:ActivatedRoute,
    private requestService:RequestService,
    public commenService:CommenService
  ){
    
  }
  ngOnInit(){
    this.paramsValue= optionsDetials; //JSON.parse(this.activeRoute.queryParams['value']['params']);
    let hash = window.location.hash;
    if(hash.includes('details')){
      this.btns=[
        {title:'Update prospect', enable:''},
        {title:'Reject prospect', enable:''}
      ]
    }else if(hash.includes('create')){
      this.btns=[
        {title:'Create prospect'}
      ]
    }
    this.commenService.currentSelected(this.paramsValue);
    this.getProspectDetail();
  }

  getProspectDetail(){
    const _this = this;
    this.requestService.requestGSP({
      requestName:"prospectDetail",
      method:"post",
      params:{}
    }, function(data){
      try{
        _this.prospectDetails = JSON.parse(data)['body']['prospectDetail'];
      }catch(e){
        console.error(e);
      }
      console.log(_this.prospectDetails);
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