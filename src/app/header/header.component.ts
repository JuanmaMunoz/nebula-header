import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public urlLogo: string = assetUrl('images/svg/logo.svg');
  public urlUser: string = assetUrl('images/svg/user.svg');
  public userName: string = 'Juan Carlos Fariña';
  public userCompany: string = 'Vintegris';
}
