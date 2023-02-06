import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, Subscription } from 'rxjs';
import { IDropDown, INavigationEnd } from 'src/app/models/interfaces';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  public urlLogo: string = assetUrl('images/svg/logo.svg');
  public urlUser: string = assetUrl('images/svg/user.svg');
  public userName: string = 'Juan Carlos Fariña';
  public userCompany: string = 'Vintegris';
  public languageSelected = localStorage.getItem('nebulaLanguage');
  public backNavigation = false;
  public dropDownList: IDropDown[] = [
    {
      name: 'logOut',
      label: 'dropDown.logOut',
    },
    {
      name: 'changeLanguage',
      label: 'dropDown.changeLanguage',
    },
  ];

  constructor(private translate: TranslateService, private router: Router) {}

  ngOnInit(): void {
    this.subscription.add(
      this.router.events.pipe(filter((r) => r instanceof NavigationEnd)).subscribe((data: Partial<INavigationEnd>) => {
        this.backNavigation = data.url === '/doc' ? true : false;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public actions($event: string): void {
    switch ($event) {
      case 'changeLanguage':
        this.changeLanguage();
        break;
      case 'logOut':
        this.logOut();
        break;
    }
  }

  private changeLanguage() {
    this.languageSelected = this.languageSelected === 'en' ? 'es' : 'en';
    localStorage.setItem('nebulaLanguage', this.languageSelected);
    this.translate.use(this.languageSelected);
    const evChangeLanguage = new CustomEvent('externalChangeLanguage', { detail: { language: this.languageSelected } });
    window.dispatchEvent(evChangeLanguage);
  }

  private logOut(): void {
    console.log('logOut*******');
  }

  public backNebula(): void {
    const url = sessionStorage.getItem('nebulaLastUrl');
    if (url) {
      this.router.navigate([`${url}`]);
    } else {
      this.router.navigate(['/users']);
    }
  }
}
