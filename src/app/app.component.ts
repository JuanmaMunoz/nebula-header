import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'nebula-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'nebula-header';
  urlCss :SafeResourceUrl | null = null;
  urlIframe: SafeResourceUrl | null = null;
  public languageSelected: string = localStorage.getItem('nebulaLanguage') || 'en';

  constructor(private translate: TranslateService, public domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void{
    this.translate.setDefaultLang('es');
    this.useLanguage();
    //this.urlCss = this.domSanitizer.bypassSecurityTrustResourceUrl(assetUrl('css/custom1.css'));
    //this.urlCss = this.domSanitizer.bypassSecurityTrustResourceUrl('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css');
  }

  ngOnDestroy(): void{
  }

  changeLanguage(): void {
    this.languageSelected = this.languageSelected === 'en' ? 'es' : 'en';
    this.useLanguage();
  }

  useLanguage():void{
    this.translate.use(this.languageSelected);
    localStorage.setItem('nebulaLanguage', this.languageSelected);
  }

  load(){
    this.urlIframe = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik');
  }


}
