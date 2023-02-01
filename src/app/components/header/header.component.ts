import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IDropDown } from 'src/app/models/interfaces';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public urlLogo: string = assetUrl('images/svg/logo.svg');
  public urlUser: string = assetUrl('images/svg/user.svg');
  public userName: string = 'Juan Carlos Fariña';
  public userCompany: string = 'Vintegris';
  public languageSelected = localStorage.getItem('nebulaLanguage');
  public dropDownList: IDropDown[] = [
    {
      name: 'logOut',
      label:'dropDown.logOut'
    },
    {
      name: 'changeLanguage',
      label:'dropDown.changeLanguage'
    }
  ]

  constructor(private translate: TranslateService){}

  ngOnInit(): void{}

  public actions($event: string):void{
    switch($event){
      case 'changeLanguage':
        this.changeLanguage();
      break
      case 'logOut':
        this.logOut();
      break
    }
  }

  private changeLanguage (){
    this.languageSelected = this.languageSelected === 'en' ? 'es' : 'en';
    localStorage.setItem('nebulaLanguage', this.languageSelected);
    this.translate.use(this.languageSelected);
    const evChangeLanguage = new CustomEvent('externalChangeLanguage', {detail:{language: this.languageSelected}});
    window.dispatchEvent(evChangeLanguage);
  }



  private logOut():void{
    console.log('logOut*******');
  }
}
