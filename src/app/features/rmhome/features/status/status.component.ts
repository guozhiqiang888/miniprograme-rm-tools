import { Component, OnInit, Input, Output, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommenService } from '../../../../services/commen.service'
import { TranslateService } from '@ngx-translate/core';

declare let wx:any;
@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit{
  public list:object;
  // public btns:[];
  public btnDisable:string;
  public currentSelected: object;
  constructor(
    public router:Router,
    public activeRoute:ActivatedRoute,
    public commenService:CommenService,
    public translate:TranslateService,
    private elRefer:ElementRef
  ){
    translate.addLangs(['zh','en']);
    translate.setDefaultLang('en')
    let browserLang = this.commenService.getLocStorage('local')//translate.getBrowserLang();
    if(null == browserLang){
      browserLang = 'zh'
    }
    translate.use(browserLang.match(/zh|en/) ? browserLang : 'en');
  }
  ngOnInit(){
    try{
      this.btnDisable='disabled';
      let params= this.commenService.getParamsValue();
      this.list = JSON.parse(params);
      this.currentSelected = this.commenService.currentSelected(this.list);
      let type = this.commenService.getLocStorage('type');
      
    }catch(e){
      console.error('JSON parse error on statusComponent');
    }
  }
  rediosChange(index){
    let btn = this.elRefer.nativeElement.querySelector('.buttons');
    if(this.list[index] !== this.currentSelected[0]){
      this.btnDisable='enable';
      btn.removeAttribute('disabled')
    }else{
      this.btnDisable='disabled';
      btn.setAttribute('disabled',this.btnDisable)
    }
  }
  statusUpdate(){
    // wx.miniProgram.navigateBack({
    //   delta:1,
    //   success:{},
    //   fail:{}
    // })
    let options=this.commenService.prospectDetailsConfig();
    let value= JSON.stringify(options);
    this.router.navigate(['/prospectdetails'], {queryParams:{params:value}});
  }
}