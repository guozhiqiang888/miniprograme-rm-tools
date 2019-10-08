import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommenService } from '../../../../services/commen.service'

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
  constructor(
    public activeRoute:ActivatedRoute,
    public commenService:CommenService
  ){
    
  }
  ngOnInit(){
    this.paramsValue=JSON.parse(this.activeRoute.queryParams['value']['params']);
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